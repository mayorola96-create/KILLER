import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function CertificationsSection() {
  const isSingle = certifications.length === 1;

  return (
    <section id="certifications" className="section-shell bg-cream cert-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Verified credentials"
            title="Certifications & Platform Mastery."
            copy="Independently verifiable platform credentials supporting the retention, engineering and ecommerce growth systems delivered by Michael Olajire and Sage Partners."
          />
        </Reveal>

        <div className={isSingle ? "cert-showcase mt-12 lg:mt-16" : "cert-grid mt-12 lg:mt-16"}>
          {certifications.map((cert, index) => {
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <Reveal
                key={cert.id}
                delay={(index % 3) * 0.08}
                className={isSingle ? "cert-feature" : "cert-card"}
              >
                <div className="cert-frame-col">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-frame-link"
                    aria-label={`Verify ${cert.title} certificate on ${cert.issuer}`}
                  >
                    <div className={`taped-frame ${index % 2 ? "rotate-right" : "rotate-left"} cert-taped-frame`}>
                      <div className="cert-window">
                        <Image
                          src={cert.certificateImage}
                          alt={`${cert.title} Certificate of Completion issued by ${cert.issuer}`}
                          width={599}
                          height={454}
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="cert-image"
                        />
                      </div>
                      <div className="photo-caption">
                        <span>{cert.issuer}</span>
                        <span>Credential / {indexLabel}</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="cert-info-col">
                  <div className="cert-header-row">
                    <div className="cert-title-group">
                      <div className="verified-wrap">
                        <span
                          className="verified-badge"
                          tabIndex={0}
                          aria-describedby={`cert-verified-${cert.id}`}
                        >
                          <BadgeCheck size={16} aria-hidden="true" /> Verified Credential
                        </span>
                        <span
                          role="tooltip"
                          id={`cert-verified-${cert.id}`}
                          className="verified-tooltip"
                        >
                          Independently verifiable through {cert.issuer}&rsquo;s official credential portal.
                        </span>
                      </div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">Issued by {cert.issuer}</p>
                    </div>

                    {cert.badgeImage ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-seal-link"
                        aria-label={`Open official ${cert.title} digital badge`}
                      >
                        <Image
                          src={cert.badgeImage}
                          alt={`${cert.title} official verification badge`}
                          width={96}
                          height={96}
                          className="cert-seal-img"
                        />
                      </a>
                    ) : null}
                  </div>

                  <p className="cert-summary">{cert.summary}</p>

                  <dl className="cert-meta-list">
                    <div className="cert-meta-row">
                      <dt>Certificate ID</dt>
                      <dd className="tabular-nums">{cert.certificateId}</dd>
                    </div>
                    <div className="cert-meta-row">
                      <dt>Validity</dt>
                      <dd className="tabular-nums">{cert.validRange}</dd>
                    </div>
                  </dl>

                  <div className="cert-actions">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      Verify Credential <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
