"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LazyYouTubeVideo } from "@/components/LazyYouTubeVideo";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    number: "01",
    title: "Sustainable lash innovation",
    copy: "Industry-first lash extensions crafted from recycled HDPE and biodegradable cornstarch—salon-grade performance without single-use plastic waste.",
    linkLabel: "Read their sustainability approach",
    href: "https://avaribeauty.com/pages/our-sustainable-lashes-and-approach"
  },
  {
    number: "02",
    title: "Barrier-first care & rituals",
    copy: "Gentle lash and brow aftercare alongside clean everyday essentials designed for long-term follicle health, with proceeds supporting conservation and Indigenous empowerment.",
    linkLabel: "Explore the catalog",
    href: "https://avaribeauty.com/collections/all"
  },
  {
    number: "03",
    title: "Collaboration with Sage Partners",
    copy: "We partnered with Kari to refine Avari Beauty’s storefront architecture, technical SEO, and AI search positioning (AISEO) so high-intent buyers discover the brand naturally."
  }
] as const;

export function AvariSpotlight() {
  return (
    <section id="spotlight" className="section-shell spotlight-section">
      <div className="container-wide">
        {/* Clean Editorial Header */}
        <Reveal>
          <div className="spotlight-header">
            <div className="spotlight-heading-block">
              <p className="eyebrow">Client spotlight</p>
              <h2 className="display-heading text-balance">
                How Avari Beauty Is Redefining Sustainable Aesthetics.
              </h2>
              <p className="spotlight-meta">
                <span>Indigenous-owned</span>
                <span aria-hidden="true">·</span>
                <span>White Bear Lake, MN</span>
                <span aria-hidden="true">·</span>
                <span>Storefront, SEO &amp; AISEO</span>
              </p>
            </div>

            <div className="spotlight-brand-bar">
              <a
                href="https://avaribeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight-logo-link"
                aria-label="Avari Beauty official website"
              >
                <Image
                  src="/images/clients/avari-beauty-logo-dark.png"
                  alt="Avari Beauty logo"
                  width={132}
                  height={81}
                  className="h-11 w-auto object-contain"
                />
              </a>
              <a
                href="https://avaribeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight-visit-link"
              >
                <span>avaribeauty.com</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Row 1: Current Homepage Screenshot + Concise Overview */}
        <div className="spotlight-showcase">
          <Reveal className="spotlight-preview-col">
            <figure className="spotlight-browser">
              <div className="spotlight-browser-bar">
                <span className="spotlight-browser-url">avaribeauty.com</span>
                <a
                  href="https://avaribeauty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-browser-open"
                >
                  <span>Live site</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              <a
                href="https://avaribeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight-browser-frame"
                aria-label="Open Avari Beauty homepage in a new tab"
              >
                <Image
                  src="/images/clients/avari-beauty-homepage.png"
                  alt="Current homepage view of Avari Beauty website"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="spotlight-browser-img"
                />
              </a>
            </figure>
          </Reveal>

          <Reveal delay={0.06} className="spotlight-copy-col">
            <p className="spotlight-lead">
              Founded by licensed esthetician Kari Tribble, Avari Beauty is an Indigenous, woman, and LGBTQ-owned brand bridging salon-grade lash and brow artistry with measurable environmental responsibility.
            </p>

            <div className="spotlight-list">
              {highlights.map((item) => (
                <div key={item.number} className="spotlight-list-item">
                  <span className="spotlight-list-num">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    {"href" in item ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spotlight-inline-link"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Row 2: Founder Quote + 9:16 Video Testimonial */}
        <div className="spotlight-testimonial-row">
          <Reveal className="spotlight-quote-col">
            <p className="eyebrow">Founder testimonial</p>
            <blockquote className="spotlight-quote">
              &ldquo;Michael is extremely professional and totally helped me understand and identify areas of my website that needed fixing, SEO improvement, but the coolest part about it was the advancement of AI capabilities and the fact that our business could be picked up a lot easier in searches that people use for AI to locate different services and products. I have definitely noticed an increase of visits to our website... definitely highly recommend.&rdquo;
            </blockquote>
            <div className="spotlight-attribution">
              <strong>Kari Tribble</strong>
              <span>Founder, Avari Beauty</span>
              <a
                href="https://avaribeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight-inline-link"
              >
                <span>Visit avaribeauty.com</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="spotlight-video-col">
            <div className="spotlight-short-container">
              <LazyYouTubeVideo
                id="NTvq8OFzCeQ"
                label="Avari Beauty Client Spotlight Testimonial with Kari Tribble"
                eyebrow="Avari Beauty Testimonial"
                prompt="Play Video"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
