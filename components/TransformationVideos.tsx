"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { videos } from "@/data/site";
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
  const [playing, setPlaying] = useState(false);
  return (
    <Reveal className="video-card" delay={index * 0.08}>
      <div className="video-media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-play-area" onClick={() => setPlaying(true)} aria-label={`Watch ${label}`}>
            <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} fill sizes="(max-width: 768px) 88vw, 31vw" alt={`${label} video thumbnail`} className="object-cover" />
            <span className="video-play"><Play fill="currentColor" size={22} aria-hidden="true" /></span>
            <span className="video-watch">Watch transformation</span>
          </button>
        )}
      </div>
      <div className="video-body"><span>0{index + 1}</span><h3>{label}</h3><p>Reserved for an accurate project summary after review.</p></div>
    </Reveal>
  );
}
