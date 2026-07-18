import { CollaborationNotice } from "@/components/CollaborationNotice";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroStory } from "@/components/HeroStory";
import { ProblemCards } from "@/components/ProblemCards";
import { RevenueLeakMap } from "@/components/RevenueLeakMap";
import { SolutionAccordion } from "@/components/SolutionAccordion";
import { TeamSection } from "@/components/TeamSection";
import { ThreadedStoryPath } from "@/components/ThreadedStoryPath";
import { TransformationVideos } from "@/components/TransformationVideos";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorkingProcess } from "@/components/WorkingProcess";
import { team } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sagepartners.space";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Sage Partners",
      url: siteUrl,
      logo: `${siteUrl}/images/sage-partners-logo.png`,
      description: "An ecommerce problem-solving and growth agency that identifies and resolves barriers to profitable growth.",
      email: "michael@sagepartners.space",
      sameAs: ["https://www.linkedin.com/in/michael-olajire-65a5842b6", "https://x.com/Sage_Glyph"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "michael@sagepartners.space",
        url: "https://wa.link/cubji5",
        availableLanguage: "English"
      }
    },
    ...team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      worksFor: { "@id": `${siteUrl}/#organization` }
    }))
  ]
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <HeroStory />
        <ThreadedStoryPath>
          <ProblemCards />
          <RevenueLeakMap />
          <WorkingProcess />
          <SolutionAccordion />
          <TransformationVideos />
          <TeamSection />
          <CollaborationNotice />
          <ContactSection />
        </ThreadedStoryPath>
      </main>
      <Footer />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
