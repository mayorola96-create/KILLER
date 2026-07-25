import { Bot, Braces, SearchCheck } from "lucide-react";
import { aiseoVideos } from "@/data/site";
import { LazyYouTubeVideo } from "@/components/LazyYouTubeVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const foundations = [
  {
    icon: SearchCheck,
    title: "Answer real customer questions",
    copy: "Build useful product, category and editorial content around the questions people ask before they buy."
  },
  {
    icon: Braces,
    title: "Make the store easy to understand",
    copy: "Use clear structure, internal links and reliable entity signals so search and AI systems can interpret the brand."
  },
  {
    icon: Bot,
    title: "Earn visibility beyond blue links",
    copy: "Improve the chance of appearing in AI answers, recommendations and search summaries while strengthening traditional SEO."
  }
] as const;

export function AiseoBrief() {
  return (
    <section id="aiseo" className="section-shell bg-cream">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="AISEO, briefly"
            title="Help Customers Find Your Brand Wherever They Ask."
            copy="AISEO means AI Search Engine Optimization. It prepares your store’s content and technical signals so search engines and AI answer tools can understand, trust and surface your brand. It complements traditional SEO rather than replacing it."
          />
        </Reveal>

        <div className="aiseo-layout mt-12 lg:mt-16">
          <Reveal className="aiseo-foundations">
            {foundations.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="aiseo-point">
                <span>0{index + 1}</span>
                <div>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <div className="aiseo-video-grid" aria-label="AISEO explainer videos">
            {aiseoVideos.map((video, index) => (
              <Reveal key={video.id} className="video-card aiseo-video-card" delay={index * 0.08}>
                <div className="video-media aiseo-video-media">
                  <LazyYouTubeVideo {...video} prompt="Watch AISEO brief" />
                </div>
                <div className="video-body">
                  <span>0{index + 1}</span>
                  <h3>{video.label}</h3>
                  <p>Short explanation from Sage Partners.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
