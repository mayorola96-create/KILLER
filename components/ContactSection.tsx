"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Clock3, Mail } from "lucide-react";
import { siWhatsapp, siX } from "simple-icons/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BrandIcon } from "@/components/BrandIcon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

const problemOptions = [
  "Traffic without sales",
  "Expensive advertising",
  "Cart or checkout abandonment",
  "Weak customer trust",
  "Low customer retention",
  "Search visibility",
  "Technical performance",
  "I am not sure yet"
];

const linkedInIcon = {
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM6.816 20.452H3.861V9h2.955v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
};

const contacts = [
  { label: "WhatsApp", value: "Start a direct conversation", href: "https://wa.link/cubji5", icon: siWhatsapp },
  { label: "LinkedIn", value: "Connect with Michael", href: "https://www.linkedin.com/in/michael-olajire-65a5842b6", icon: linkedInIcon },
  { label: "X", value: "Follow Sage Partners", href: "https://x.com/Sage_Glyph", icon: siX }
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-sage-pale">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            eyebrow="Let’s find what is holding your store back"
            title="Tell Us What Is Happening With Your Store."
            copy="You don’t need to know the technical name of the problem. Tell us what you are experiencing and we will help you determine the next practical step."
          >
            <span className="response-badge"><Clock3 size={16} aria-hidden="true" /> Typical response time: Less than 1 hour</span>
          </SectionHeading>
        </Reveal>
        <div className="contact-layout mt-12 lg:mt-16">
          <Reveal className="contact-methods">
            {contacts.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon"><BrandIcon icon={item.icon} /></span>
                <span><b>{item.label}</b><small>{item.value}</small></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            ))}
            <a href="mailto:michael@sagepartners.space" className="contact-card">
              <span className="contact-icon"><Mail size={21} aria-hidden="true" /></span>
              <span><b>Email</b><small>michael@sagepartners.space</small></span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <div className="contact-note"><span>Not sure where to begin?</span><p>Describe the symptoms in your own words. A technical diagnosis is our job, not yours.</p></div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string; fallback?: string }>({ type: "idle" });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", storeUrl: "", problem: "", message: "", company: "" }
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = (await response.json()) as { message?: string; fallback?: string };
      if (!response.ok) {
        setStatus({ type: "error", message: result.message || "Your message could not be sent.", fallback: result.fallback });
        return;
      }
      setStatus({ type: "success", message: result.message || "Your message was sent." });
      reset();
    } catch {
      setStatus({ type: "error", message: "We could not reach the secure form endpoint. Please use email instead.", fallback: "mailto:michael@sagepartners.space" });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name" aria-invalid={!!errors.name} /></Field>
        <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} /></Field>
      </div>
      <Field label="Store URL" hint="Optional" error={errors.storeUrl?.message}><input {...register("storeUrl")} inputMode="url" placeholder="https://yourstore.com" aria-invalid={!!errors.storeUrl} /></Field>
      <Field label="What problem are you currently experiencing?" error={errors.problem?.message}>
        <select {...register("problem")} defaultValue="" aria-invalid={!!errors.problem}><option value="" disabled>Select the closest match</option>{problemOptions.map((option) => <option key={option}>{option}</option>)}</select>
      </Field>
      <Field label="Message" error={errors.message?.message}><textarea {...register("message")} rows={6} placeholder="Tell us what you are seeing, what you have tried and where you feel stuck." aria-invalid={!!errors.message} /></Field>
      <div className="honeypot" aria-hidden="true"><label>Company<input {...register("company")} tabIndex={-1} autoComplete="off" /></label></div>
      {status.type !== "idle" ? (
        <div className={`form-status ${status.type}`} role="status">
          <p>{status.message}</p>
          {status.fallback ? <a href={status.fallback}>Open email instead <ArrowUpRight size={15} aria-hidden="true" /></a> : null}
        </div>
      ) : null}
      <button className="btn btn-dark w-full sm:w-auto" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending securely…" : "Send Message"}<ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="form-privacy">Your details are used only to respond to this enquiry. Never send passwords through this form.</p>
    </form>
  );
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="form-field"><span>{label}{hint ? <small>{hint}</small> : null}</span>{children}{error ? <em role="alert">{error}</em> : null}</label>
  );
}
