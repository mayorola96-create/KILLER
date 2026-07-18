import { ArrowDownRight, ArrowRight, Check, ScanSearch } from "lucide-react";

const notes = [
  { text: "Visitors are coming. Why aren’t they buying?", className: "note-one" },
  { text: "Our advertising costs keep rising.", className: "note-two" },
  { text: "We don’t know what to fix first.", className: "note-three" }
];

export function HeroStory() {
  return (
    <section id="top" className="hero-section section-shell overflow-hidden pt-12 sm:pt-16 lg:pt-24">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div className="hero-content-visible">
          <p className="eyebrow">Ecommerce problem-solving partners</p>
          <h1 className="hero-title text-balance">Your Store Is Working Hard. But Something Is Getting in the Way of Growth.</h1>
          <p className="hero-copy text-pretty">
            Traffic without sales. Rising advertising costs. Abandoned carts. Customers who purchase once and disappear. Sage Partners identifies what is holding your ecommerce store back and helps you fix it in the right order.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-dark">Diagnose My Store <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#how-we-help" className="btn btn-light">See How We Solve It <ArrowDownRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="trust-line"><Check size={16} aria-hidden="true" /> Practical recommendations. Clear priorities. No generic growth package.</p>
        </div>

        <div className="diagnostic-board" aria-label="Common ecommerce owner concerns being diagnosed">
          <div className="diagnostic-label"><ScanSearch size={18} aria-hidden="true" /><span>Finding the leak…</span><i aria-hidden="true" /></div>
          <svg className="hero-thread" viewBox="0 0 560 540" aria-hidden="true">
            <path
              d="M270 14 C180 70 420 100 312 174 C215 240 420 270 287 345 C201 393 349 440 265 524"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {notes.map((note, index) => (
            <article
              key={note.text}
              className={`hero-note ${note.className}`}
            >
              <span>0{index + 1}</span>
              <p>{note.text}</p>
            </article>
          ))}
          <div className="thread-checkpoint checkpoint-a" aria-hidden="true" />
          <div className="thread-checkpoint checkpoint-b" aria-hidden="true" />
          <div className="thread-checkpoint checkpoint-c" aria-hidden="true" />
        </div>
      </div>
      <div className="container-wide mt-14 lg:mt-24"><div className="section-rule"><span>Start with the symptom</span><ArrowDownRight size={17} aria-hidden="true" /></div></div>
    </section>
  );
}
