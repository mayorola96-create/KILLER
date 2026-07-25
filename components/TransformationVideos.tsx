"use client";

import { videos } from "@/data/site";
import { LazyYouTubeVideo } from "@/components/LazyYouTubeVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function TransformationVideos() {
  return (
    <section id="transformations" className="section-shell bg-sage-dark text-paper">
      <div className="container-wide">
        <Reveal>
          <SectionHeading eyebrow="Real work. Visible thinking." title="See the Transformation, Not Just the Promise." copy="Watch how ecommerce problems were identified, approached and transformed." />
        </Reveal>
        <div className="video-carousel mt-10 lg:mt-14">
          {videos.map((video, index) => <VideoCard key={video.id} {...video} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ id, label, index }: { id: string; label: string; index: number }) {
  return (
    <Reveal className="video-card" delay={index * 0.08}>
      <div className="video-media">
        <LazyYouTubeVideo id={id} label={label} prompt="Watch transformation" />
      </div>
      <div className="video-body"><span>0{index + 1}</span><h3>{label}</h3><p>Reserved for an accurate project summary after review.</p></div>
    </Reveal>
  );
}
