import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, number[]>();

function clientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requests.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] || character));
}

function mailtoFallback(data?: { name: string; email: string; storeUrl: string; problem: string; message: string }) {
  const recipient = "michael@sagepartners.space";
  if (!data) return `mailto:${recipient}`;
  const body = [`Name: ${data.name}`, `Email: ${data.email}`, `Store: ${data.storeUrl || "Not supplied"}`, `Problem: ${data.problem}`, "", data.message].join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(`Store diagnosis enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: NextRequest) {
  const type = request.headers.get("content-type") || "";
  if (!type.includes("application/json")) return NextResponse.json({ message: "Please submit the form as JSON." }, { status: 415 });
  if (Number(request.headers.get("content-length") || 0) > 12_000) return NextResponse.json({ message: "The message is too large." }, { status: 413 });

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many attempts. Please wait 15 minutes or use email.", fallback: mailtoFallback() }, { status: 429, headers: { "Retry-After": "900" } });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "The form data could not be read." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Check the highlighted fields and try again.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const data = parsed.data;
  if (data.company) return NextResponse.json({ message: "Submission rejected." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Secure email delivery is not configured yet. Your message has not been sent; please open the prepared email instead.", fallback: mailtoFallback(data) },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "michaellolajire03@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Sage Partners <onboarding@resend.dev>";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Store diagnosis enquiry: ${data.problem}`,
        html: `<h2>New Sage Partners website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p><strong>Store URL:</strong> ${escapeHtml(data.storeUrl || "Not supplied")}</p><p><strong>Problem:</strong> ${escapeHtml(data.problem)}</p><p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`
      })
    });
    if (!response.ok) {
      return NextResponse.json({ message: "Email delivery failed. Your message has not been sent; please use the prepared email.", fallback: mailtoFallback(data) }, { status: 502 });
    }
    return NextResponse.json({ message: "Your message was sent successfully. Sage Partners will respond as soon as possible." });
  } catch {
    return NextResponse.json({ message: "Email delivery timed out. Your message has not been sent; please use the prepared email.", fallback: mailtoFallback(data) }, { status: 504 });
  } finally {
    clearTimeout(timeout);
  }
}
