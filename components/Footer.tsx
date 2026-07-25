import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/data/site";

const logo = "/images/sage-partners-logo.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-main">
        <div className="final-cta">
          <p className="eyebrow">One clear next step</p>
          <h2>Your Store May Not Need More Traffic. It May Need Fewer Reasons for Customers to Leave.</h2>
          <p>Let’s identify the problems affecting your growth and build a practical plan for solving them.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="#contact" className="btn btn-paper">Start With a Store Diagnosis <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="https://wa.link/cubji5" target="_blank" rel="noreferrer" className="btn btn-outline-paper">Message Us on WhatsApp</a>
          </div>
        </div>
        <div className="footer-main">
          <a href="#top" className="footer-brand" aria-label="Sage Partners home"><Image src={logo} width={50} height={50} alt="" /><span>Sage Partners</span></a>
          <nav aria-label="Footer navigation">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/michael-olajire-65a5842b6" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/_SagePartners" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.facebook.com/profile.php?id=61592408152309" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/sagepartners.space" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.link/cubji5" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sage Partners</span><span>Built around clarity, trust and practical ecommerce growth.</span></div>
      </div>
    </footer>
  );
}
