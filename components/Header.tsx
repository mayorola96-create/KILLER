"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/site";

const logo = "/images/sage-partners-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60%", threshold: [0.01, 0.25, 0.5] }
    );
    navItems.forEach(({ href }) => {
      const node = document.querySelector(href);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container-wide flex h-[76px] items-center justify-between gap-6">
        <a href="#top" className="logo-link" aria-label="Sage Partners home">
          <Image src={logo} width={44} height={44} priority alt="" className="brand-mark" />
          <span className="brand-wordmark">Sage Partners</span>
        </a>

        <button
          ref={triggerRef}
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={23} aria-hidden="true" />
        </button>
      </div>

      <noscript>
        <nav className="mobile-noscript-nav" aria-label="Mobile fallback navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="#contact">Contact Sage Partners</a>
        </nav>
      </noscript>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu-backdrop"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && close()}
          >
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="mobile-menu-panel"
              initial={reduced ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-5">
                <span className="eyebrow mb-0">Navigate</span>
                <button type="button" className="menu-trigger" aria-label="Close navigation menu" onClick={close}>
                  <X size={23} aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-7 flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={close} className={`mobile-nav-link ${active === item.href ? "is-active" : ""}`}>
                    <span>0{index + 1}</span>{item.label}
                  </a>
                ))}
              </nav>
              <a href="#contact" onClick={close} className="btn btn-dark mt-auto w-full">
                Contact Sage Partners <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
