import { BadgeCheck, Mail, ExternalLink } from "lucide-react";
import { siFiverr } from "simple-icons/icons";
import { team } from "@/data/site";
import { BrandIcon } from "@/components/BrandIcon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SafeTeamImage } from "@/components/SafeTeamImage";

export function TeamSection() {
  return (
    <section id="team" className="section-shell bg-butter">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="The people behind the work"
            title="Specialists for Different Parts of the Problem."
            copy="Ecommerce growth is rarely blocked by only one issue. Sage Partners brings together specialists across development, marketing, project delivery and technical optimization."
          />
        </Reveal>
        <div className="team-grid mt-12 lg:mt-16">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 0.08} className={`team-item team-item-${index + 1}`}>
              <article className="team-card">
                <div className={`taped-frame ${index % 2 ? "rotate-right" : "rotate-left"}`}>
                  <div className="photo-window">
                    {"image" in member && member.image ? (
                      <SafeTeamImage
                        src={member.image}
                        name={member.name}
                        role={member.role}
                      />
                    ) : (
                      <div className="monogram" aria-label={`${member.name} monogram`}>{member.initials}</div>
                    )}
                  </div>
                  <div className="photo-caption"><span>Sage Partners</span><span>Team file / 0{index + 1}</span></div>
                </div>
                <div className="team-info">
                  <div className="verified-wrap">
                    <span className="verified-badge" tabIndex={0} aria-describedby={`verified-${index}`}><BadgeCheck size={16} aria-hidden="true" /> Verified</span>
                    <span role="tooltip" id={`verified-${index}`} className="verified-tooltip">Confirmed as a Sage Partners team member.</span>
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <div className="team-links">
                    {"email" in member && member.email ? <a className="team-email-link" href={member.email} aria-label={`Email ${member.name}`}><Mail size={18} aria-hidden="true" /> Email</a> : null}
                    {"fiverr" in member && member.fiverr ? (
                      <a className="fiverr-button" href={member.fiverr} target="_blank" rel="noreferrer" aria-label={`View ${member.name} on Fiverr`}>
                        <BrandIcon icon={siFiverr} className="h-[19px] w-[19px]" />
                        View on Fiverr
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
