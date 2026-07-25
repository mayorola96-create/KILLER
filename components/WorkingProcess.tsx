import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  ["Diagnose", "We examine the complete customer journey, not just the visible page."],
  ["Prioritize", "We separate urgent revenue leaks from low-impact distractions."],
  ["Implement", "Our specialists improve the areas preventing profitable growth."],
  ["Measure", "We compare changes against the starting point and identify what should happen next."]
] as const;

export function WorkingProcess() {
  return (
    <section className="section-shell bg-paper">
      <div className="container-main">
        <Reveal><SectionHeading eyebrow="A useful order of operations" title="From ‘Something Is Wrong’ to a Clear Plan." /></Reveal>
        <div className="process-grid mt-10 lg:mt-14">
          {steps.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.07} className="process-step">
              <div className="flex items-start justify-between gap-5"><span className="process-number">0{index + 1}</span><ArrowDownRight size={20} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="promise-note mt-10 lg:mt-14">
          <span className="note-kicker">A standing promise</span>
          <p>“You will always know what we are changing, why it matters and what should happen next.”</p>
        </Reveal>
      </div>
    </section>
  );
}
