import { ArrowUpRight, ChevronDown } from "lucide-react";
import { problems } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ProblemCards() {
  return (
    <section id="problems" className="section-shell bg-paper/70">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            eyebrow="We have heard this before"
            title="Does Any of This Sound Familiar?"
            copy="These are not isolated problems. They are recurring frustrations shared by ecommerce owners every day."
          />
        </Reveal>
        <div className="problem-grid mt-10 lg:mt-14">
          {problems.map((problem, index) => {
            const contentId = `problem-panel-${index}`;
            return (
              <Reveal key={problem.title} delay={(index % 2) * 0.08}>
                <details className="problem-card" open={index === 0}>
                  <summary
                    className="problem-trigger"
                    aria-controls={contentId}
                  >
                    <span className="problem-number">0{index + 1}</span>
                    <span>{problem.title}</span>
                    <ChevronDown className="problem-chevron" size={20} aria-hidden="true" />
                  </summary>
                  <div id={contentId} className="problem-detail">
                    <Detail label="What you may be experiencing" value={problem.experience} />
                    <Detail label="Likely underlying causes" value={problem.causes} />
                    <Detail label="What we investigate" value={problem.investigate} />
                    <Detail label="A practical direction" value={problem.solution} />
                    <a className="text-link" href="#contact">
                      Discuss this problem <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
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
