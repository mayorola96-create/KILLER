"use client";

import { CreditCard, Radar, RefreshCcw, Search, ShieldCheck, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { leakStages } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const icons: Record<(typeof leakStages)[number]["icon"], LucideIcon> = { CreditCard, Radar, RefreshCcw, Search, ShieldCheck, ShoppingBag };

export function RevenueLeakMap() {
  const [selected, setSelected] = useState(0);
  const current = leakStages[selected];
  return (
    <section id="how-we-help" className="section-shell overflow-hidden bg-sage-pale">
      <div className="container-main">
        <Reveal>
          <SectionHeading eyebrow="From symptoms to causes" title="We Find the Problem Behind the Problem." copy="A sale is rarely lost in one place. Follow the journey to see what each symptom can reveal." />
        </Reveal>
        <Reveal className="leak-map mt-10 lg:mt-14">
          <div className="leak-stage-list" role="tablist" aria-label="Revenue leak checkpoints">
            {leakStages.map((stage, index) => {
              const Icon = icons[stage.icon];
              return (
                <button
                  type="button"
                  key={stage.key}
                  role="tab"
                  id={`leak-tab-${stage.key}`}
                  aria-selected={selected === index}
                  aria-controls="leak-stage-panel"
                  className={`leak-stage ${selected === index ? "is-selected" : ""}`}
                  onClick={() => setSelected(index)}
                >
                  <span className="leak-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span><b>0{index + 1}</b>{stage.label}</span>
                </button>
              );
            })}
          </div>
          <div className="leak-connector" aria-hidden="true"><span /></div>
          <div id="leak-stage-panel" role="tabpanel" aria-labelledby={`leak-tab-${current.key}`} className="leak-panel" key={current.key}>
            <p className="eyebrow mb-4">Checkpoint {String(selected + 1).padStart(2, "0")} · {current.label}</p>
            <h3>{current.problem}</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div><p className="detail-label">What it can mean</p><p className="detail-copy">This symptom may be a signal from an earlier or later part of the customer journey.</p></div>
              <div><p className="detail-label">How we help</p><p className="detail-copy">{current.help}.</p></div>
            </div>
            <a href="#contact" className="btn btn-dark mt-8">Investigate this stage <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
