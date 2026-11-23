import { ArrowRight, BadgeCheck, ExternalLink } from "lucide-react";
import { siFiverr } from "simple-icons/icons";
import { team } from "@/data/site";
import { BrandIcon } from "@/components/BrandIcon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SafeTeamImage } from "@/components/SafeTeamImage";

const leadershipPillars = [
  {
    number: "01",
    title: "One direct point of accountability",
    copy: "You work directly with Michael from the initial store diagnosis through implementation—no middlemen, no repeated briefings, and no handoff confusion."
  },
  {
    number: "02",
    title: "Managed specialist team behind the scenes",
    copy: "Michael leads and coordinates a private, vetted team across backend engineering, UX, conversion optimization, SEO, AISEO, and retention so every discipline moves in sync."
  },
  {
    number: "03",
    title: "Reviewed and signed off before launch",
    copy: "Every technical fix, storefront update, and growth deliverable is vetted under Michael’s direct oversight before it touches your live store."
  }
] as const;

export function TeamSection() {
  const lead = team[0];

  return (
    <section id="team" className="section-shell bg-butter">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="The people behind the work"
            title="Led by Michael Olajire. Backed by a Managed Specialist Team."
            copy="Ecommerce growth rarely breaks in only one place, but working with a fragmented group of freelancers slows everything down. At Sage Partners, Michael Olajire leads the work directly while managing a dedicated internal team behind the scenes."
          />
        </Reveal>

        <Reveal className="lead-spotlight mt-12 lg:mt-16">
          <div className="lead-portrait-col">
            <div className="taped-frame rotate-left lead-frame">
              <div className="photo-window">
                <SafeTeamImage
                  src={lead.image}
                  name={lead.name}
                  role={lead.role}
                />
              </div>
              <div className="photo-caption">
                <span>Sage Partners</span>
                <span>Lead Developer</span>
              </div>
            </div>
          </div>

          <div className="lead-bio-col">
            <div className="lead-header">
              <div className="verified-wrap">
                <span className="verified-badge" tabIndex={0} aria-describedby="verified-lead">
                  <BadgeCheck size={16} aria-hidden="true" /> Verified Lead
                </span>
                <span role="tooltip" id="verified-lead" className="verified-tooltip">
                  Lead Developer and primary point of contact at Sage Partners.
                </span>
              </div>
              <h3 className="lead-name">{lead.name}</h3>
              <p className="lead-role">
                <span>{lead.role}</span>
                <span aria-hidden="true">·</span>
                <span>Managing the Sage Partners Specialist Team</span>
              </p>
            </div>

            <div className="lead-story">
              <p>
                As Lead Developer at Sage Partners, I lead technical audits, storefront architecture, and implementation while directing a private team of specialists across development, conversion optimization, search visibility, and retention.
              </p>
              <p>
                Clients never have to chase separate contractors or coordinate moving parts. Every project is scoped, managed, and delivered centrally through me so your store gets multi-disciplinary expertise with clear, single-owner accountability.
              </p>
            </div>

            <div className="lead-pillars" aria-label="How Michael manages your project">
              {leadershipPillars.map((pillar) => (
                <div key={pillar.number} className="lead-pillar">
                  <span className="lead-pillar-num">{pillar.number}</span>
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lead-actions">
              <a href="#contact" className="btn btn-dark">
                Work With Michael <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                className="fiverr-button"
                href={lead.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${lead.name} on Fiverr`}
              >
                <BrandIcon icon={siFiverr} className="h-[19px] w-[19px]" />
                View on Fiverr
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
