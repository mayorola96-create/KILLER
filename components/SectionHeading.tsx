import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  children
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={`section-heading ${align === "center" ? "text-center mx-auto" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-heading text-balance">{title}</h2>
      {copy ? <p className="heading-copy text-pretty">{copy}</p> : null}
      {children}
    </div>
  );
}
