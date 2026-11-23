import { BadgeCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  { icon: BadgeCheck, title: "Verified leadership", copy: "Every project is led directly by Michael Olajire and verified through official Sage Partners channels." },
  { icon: MessagesSquare, title: "Keep communication central", copy: "All strategy, team coordination and project updates are managed centrally through Sage Partners." },
  { icon: ShieldCheck, title: "Share access carefully", copy: "Confirm scope and access needs with us directly before sharing store credentials or making payments." }
] as const;

export function CollaborationNotice() {
  return (
    <section className="section-shell bg-paper">
      <div className="container-main">
        <Reveal className="security-notice">
          <div className="security-heading">
            <span className="security-icon"><ShieldCheck size={28} strokeWidth={1.7} aria-hidden="true" /></span>
            <div><p className="eyebrow">Collaboration notice</p><h2>Work directly through official Sage Partners channels.</h2></div>
          </div>
          <p className="security-copy">To protect every client, all collaborations, specialist assignments and store access are coordinated exclusively through Michael Olajire and official Sage Partners channels before any work or payment begins.</p>
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
