import { ChevronDown } from "lucide-react";
import { solutions } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function SolutionAccordion() {
  return (
    <section className="section-shell bg-cream">
      <div className="container-main grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Practical solutions" title="The Right Help for the Problem in Front of You." copy="No preset package. Each capability is applied only when the diagnosis shows it matters." />
        </Reveal>
        <div className="solution-list">
          {solutions.map((item, index) => {
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.04}>
                <details className="solution-item" open={index === 0}>
                  <summary aria-controls={`solution-${index}`} className="solution-trigger">
                    <span className="solution-number">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span><ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <div id={`solution-${index}`} className="solution-detail">
                    <Detail label="Problem this solves" value={item.problem} />
                    <Detail label="What we examine" value={item.examine} />
                    <Detail label="Practical work" value={item.work} />
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div><p className="detail-label">{label}</p><p className="detail-copy">{value}</p></div>;
}
