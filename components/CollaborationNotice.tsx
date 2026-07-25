import { BadgeCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  { icon: BadgeCheck, title: "Verified means confirmed", copy: "Use the badge to identify the specialists listed by Sage Partners." },
  { icon: MessagesSquare, title: "Keep communication central", copy: "Confirm the project through our support team before work begins." },
  { icon: ShieldCheck, title: "Share access carefully", copy: "Confirm scope and access needs before sharing store credentials or making payments." }
] as const;

export function CollaborationNotice() {
  return (
    <section className="section-shell bg-paper">
      <div className="container-main">
        <Reveal className="security-notice">
          <div className="security-heading">
            <span className="security-icon"><ShieldCheck size={28} strokeWidth={1.7} aria-hidden="true" /></span>
            <div><p className="eyebrow">Collaboration notice</p><h2>Contact our support team before collaborating with any expert.</h2></div>
          </div>
          <p className="security-copy">To protect every client and team member, confirm the project through Sage Partners before making payments, sharing store access or beginning any collaboration.</p>
          <div className="security-points">
            {points.map(({ icon: Icon, title, copy }) => (
              <div key={title}><Icon size={20} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
