"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Leaf,
  Quote,
  Sparkles,
  HeartHandshake
} from "lucide-react";
import { LazyYouTubeVideo } from "@/components/LazyYouTubeVideo";
import { Reveal } from "@/components/Reveal";

export function AvariSpotlight() {
  return (
    <section id="spotlight" className="section-shell spotlight-section">
      <div className="container-wide">
        {/* Section Eyebrow & Brand Header */}
        <Reveal>
          <div className="mb-10 lg:mb-14">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(255,253,243,0.12)] pb-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="relative flex items-center justify-center rounded-xl bg-black/40 px-4 py-2 border border-[rgba(255,253,243,0.15)] shadow-md">
                  <Image
                    src="/images/clients/avari-beauty-logo-white.png"
                    alt="Avari Beauty Brand Logo"
                    width={150}
                    height={92}
                    className="h-10 sm:h-12 w-auto object-contain"
                    priority
                  />
                </div>
                <div>
                  <span className="spotlight-badge">
                    <Sparkles size={13} className="text-[#87f502]" aria-hidden="true" />
                    Client Spotlight & Case Study
                  </span>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#c8d3af]">
                    <span>Indigenous-Owned</span>
                    <span>•</span>
                    <span>Eco-Conscious Aesthetics</span>
                  </div>
                </div>
              </div>

              {/* Official Link Button */}
              <a
                href="https://avaribeauty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-paper text-xs sm:text-sm"
                aria-label="Visit official Avari Beauty website (opens in new tab)"
              >
                <span>Visit avaribeauty.com</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="eyebrow !text-[#c8d3af]">Client Spotlight • Sustainable Commerce</p>
              <h2 className="display-heading text-balance !text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Brand Spotlight: How Avari Beauty Is Redefining Sustainable Aesthetics
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Main Grid: Story Content (Left) & Testimonial + Video (Right) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          {/* Left Column: Full Article Story */}
          <div className="space-y-10 lg:col-span-7">
            {/* Lead & Background */}
            <Reveal>
              <div className="spotlight-glass-card p-6 sm:p-8 space-y-6">
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
                  In an industry long dominated by single-use plastics and harsh synthetics, true innovation requires both technical mastery and uncompromising values. That is the exact standard set by Avari Beauty.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-[#f0f3e6]/85">
                  Founded by licensed esthetician and beauty innovator Kari Tribble, Avari Beauty is an Indigenous-owned brand leading the movement toward conscious aesthetics. Based out of White Bear Lake, Minnesota, the brand has carved out a recognized niche by bridging high-performance lash and brow artistry with genuine environmental responsibility.
                </p>

                <div className="pt-2 border-t border-[rgba(255,253,243,0.08)]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#c8d3af] mb-1">
                    Explore their official home here:
                  </p>
                  <a
                    href="https://avaribeauty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-link text-sm sm:text-base font-semibold"
                  >
                    https://avaribeauty.com/ <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Sustainable Craft: Products Leading the Shift */}
            <Reveal delay={0.08}>
              <div className="spotlight-glass-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(135,245,2,0.12)] border border-[rgba(135,245,2,0.3)] text-[#87f502]">
                    <Leaf size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Sustainable Craft: The Products Leading the Shift
                  </h3>
                </div>

                <p className="leading-relaxed text-[#f0f3e6]/85">
                  Rather than relying on superficial greenwashing, Avari Beauty engineers products with lifecycle impact in mind. For both professional lash artists and self-care minimalists, their collection delivers salon-grade performance without the typical ecological footprint.
                </p>

                <div className="space-y-5 pt-2">
                  <p className="font-semibold text-white text-sm uppercase tracking-wider font-mono text-[#c8d3af]">
                    A few standout innovations from their line include:
                  </p>

                  <ul className="space-y-6 pl-1">
                    {/* Innovation 1 */}
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[#87f502]">
                      <div className="space-y-2">
                        <strong className="text-white text-base block font-medium">
                          Industry-First Sustainable Eyelash Extensions:
                        </strong>
                        <p className="text-sm sm:text-base leading-relaxed text-[#f0f3e6]/80">
                          Kari pioneered the development of eco-conscious lash extensions, including lines made from recycled materials (HDPE) as well as fully biodegradable, plant-based options crafted from compostable cornstarch. These lashes offer the ultra-soft feel, durability, and effortless fanning required by top lash technicians while eliminating non-degradable waste.
                        </p>
                        <div className="pt-1">
                          <span className="text-xs block font-mono text-[#c8d3af] mb-1">
                            Learn more about their lash design and sustainability standards:
                          </span>
                          <a
                            href="https://avaribeauty.com/pages/our-sustainable-lashes-and-approach"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="spotlight-link text-xs sm:text-sm font-medium"
                          >
                            https://avaribeauty.com/pages/our-sustainable-lashes-and-approach
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>

                    {/* Innovation 2 */}
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[#87f502]">
                      <div className="space-y-1">
                        <strong className="text-white text-base block font-medium">
                          Barrier-First Brow and Lash Aftercare:
                        </strong>
                        <p className="text-sm sm:text-base leading-relaxed text-[#f0f3e6]/80">
                          From gentle perming and fixing solutions to nourishing lash lift aftercare, their treatment products prioritize follicle health and long-term retention without reliance on heavy chemicals.
                        </p>
                      </div>
                    </li>

                    {/* Innovation 3 */}
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[#87f502]">
                      <div className="space-y-1">
                        <strong className="text-white text-base block font-medium">
                          Conscious Makeup and Rituals:
                        </strong>
                        <p className="text-sm sm:text-base leading-relaxed text-[#f0f3e6]/80">
                          Everyday essentials like their Fluffy Brow and Best Brow Day Pencil are formulated to work seamlessly with treated brows, combining ease of application with clean ingredients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[rgba(255,253,243,0.08)]">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#c8d3af] mb-1">
                    Discover their complete professional and consumer catalog:
                  </p>
                  <a
                    href="https://avaribeauty.com/collections/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-link text-sm font-semibold"
                  >
                    https://avaribeauty.com/collections/all <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* The Vision & Collaboration with Sage Partners */}
            <Reveal delay={0.14}>
              <div className="spotlight-glass-card p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(200,211,175,0.12)] border border-[rgba(200,211,175,0.25)] text-[#c8d3af]">
                      <HeartHandshake size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      The Vision: Purpose-Driven Growth
                    </h3>
                  </div>
                  <p className="leading-relaxed text-[#f0f3e6]/85">
                    Avari Beauty represents what modern commerce looks like when values dictate product development. As an Indigenous, woman, and LGBTQ-owned business, the brand actively donates a percentage of proceeds to organizations dedicated to environmental conservation and Indigenous empowerment. Whether delivering services in their studio, training beauty professionals, or shipping sustainable supplies worldwide, their focus remains on clean beauty that honors both the individual and the planet.
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(255,253,243,0.1)] space-y-3">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#87f502] flex items-center gap-2">
                    <span>The Collaboration with Sage Partners</span>
                  </h4>
                  <p className="leading-relaxed text-[#f0f3e6]/85">
                    Scaling an authentic, values-led brand online requires digital discovery systems that match the quality of the products themselves.
                  </p>
                  <p className="leading-relaxed text-[#f0f3e6]/85">
                    At Sage Partners, we had the distinct pleasure of collaborating with Kari and the Avari Beauty team to refine their digital storefront architecture, organic visibility, and generative AI search positioning (AISEO). When strong products meet clear discovery systems, high-intent buyers find their way naturally.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Founder Testimonial & 9:16 Video Player Container */}
          <div className="space-y-8 lg:col-span-5 lg:sticky lg:top-24">
            {/* Testimonial Quote Box */}
            <Reveal delay={0.1}>
              <div className="spotlight-quote-card space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#87f502] flex items-center gap-1.5">
                    <Quote size={15} aria-hidden="true" />
                    Founder Testimonial
                  </span>
                  <span className="text-xs font-mono text-[#c8d3af]">
                    Kari Tribble
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-white text-base sm:text-lg">
                    What Founder Kari Tribble Shared About Sage Partners:
                  </p>
                  <blockquote className="relative italic leading-relaxed text-[#f0f3e6] text-sm sm:text-base pl-4 border-l-2 border-[#87f502]">
                    &ldquo;Michael is extremely professional and totally helped me understand and identify areas of my website that needed fixing, SEO improvement, but the coolest part about it was the advancement of AI capabilities and the fact that our business could be picked up a lot easier in searches that people use for AI to locate different services and products. I have definitely noticed an increase of visits to our website... definitely highly recommend.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-3 border-t border-[rgba(255,253,243,0.1)] flex items-center justify-between text-xs text-[#c8d3af]">
                  <div>
                    <strong className="text-white block font-medium">Kari Tribble</strong>
                    <span>Founder, Avari Beauty</span>
                  </div>
                  <a
                    href="https://avaribeauty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#87f502] hover:underline"
                  >
                    avaribeauty.com <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* 9:16 Vertical Video Container */}
            <Reveal delay={0.16}>
              <div className="flex flex-col items-center">
                <div className="spotlight-short-container">
                  <LazyYouTubeVideo
                    id="NTvq8OFzCeQ"
                    label="Avari Beauty Client Spotlight Testimonial with Kari Tribble"
                    eyebrow="Avari Beauty Testimonial"
                    prompt="Play Video"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
