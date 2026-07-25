"use client";

import { ExternalLink, MoveHorizontal } from "lucide-react";
import { videos } from "@/data/site";
import { LazyYouTubeVideo } from "@/components/LazyYouTubeVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function TransformationVideos() {
  return (
    <section id="transformations" className="section-shell bg-sage-dark text-paper">
      <div className="container-wide">
        <Reveal>
          <SectionHeading eyebrow="Conversion transformations" title="See the Transformation, Not Just the Promise." copy="Play all three conversion transformation videos here, or open any episode directly on YouTube." />
        </Reveal>
        <p className="swipe-hint" aria-hidden="true"><MoveHorizontal size={16} /> Swipe to view all three videos</p>
        <div className="video-carousel mt-8 lg:mt-14" aria-label="Conversion transformation videos">
          {videos.map((video, index) => <VideoCard key={video.id} {...video} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  id,
  label,
  url,
  description,
  index
}: {
  id: string;
  label: string;
  url: string;
  description: string;
  index: number;
}) {
  return (
    <Reveal className="video-card" delay={index * 0.08}>
      <div className="video-media">
        <LazyYouTubeVideo id={id} label={label} eyebrow="Conversion transformation" prompt="Tap to play" />
      </div>
      <div className="video-body">
        <span>0{index + 1}</span>
        <h3>{label}</h3>
        <p>{description}</p>
        <a className="video-source-link" href={url} target="_blank" rel="noreferrer" aria-label={`Open ${label} on YouTube`}>
          Open on YouTube <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}
