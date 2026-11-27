export const navItems = [
  { label: "Problems", href: "#problems" },
  { label: "How We Help", href: "#how-we-help" },
  { label: "AISEO", href: "#aiseo" },
  { label: "Transformations", href: "#transformations" },
  { label: "Spotlight", href: "#spotlight" },
  { label: "Leadership", href: "#team" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
] as const;

export const problems = [
  {
    title: "I’m getting traffic, but almost no sales.",
    experience: "People visit, browse and leave without adding products to their cart.",
    causes: "Traffic intent, offer clarity, product positioning or a weak mobile journey may be misaligned.",
    investigate: "Traffic sources, landing-page continuity, product discovery and the path to purchase.",
    solution: "Clarify the offer and remove the highest-impact conversion barriers in priority order."
  },
  {
    title: "My ads are becoming too expensive.",
    experience: "Clicks cost more, reports feel unreliable and paid campaigns struggle to stay profitable.",
    causes: "Poor tracking, weak creative-to-page alignment or over-dependence on paid acquisition.",
    investigate: "Tracking accuracy, audience intent, campaign message and post-click experience.",
    solution: "Improve acquisition quality while building stronger conversion and organic discovery systems."
  },
  {
    title: "Customers add products and disappear.",
    experience: "Carts fill, but unexpected costs or friction stop customers before payment.",
    causes: "Late shipping information, missing payment options, distracting fields or mobile checkout friction.",
    investigate: "Cart behaviour, checkout steps, payment coverage and abandonment communication.",
    solution: "Make the cost, confidence and next action clear before the customer reaches checkout."
  },
  {
    title: "My store doesn’t feel trustworthy enough.",
    experience: "Visitors hesitate because the store feels incomplete, unclear or too familiar to low-quality shops.",
    causes: "Thin proof, generic design, unclear policies or weak delivery and returns messaging.",
    investigate: "Trust architecture, reviews, visual consistency, policy clarity and payment reassurance.",
    solution: "Place credible proof and useful reassurance at the exact moments customers need them."
  },
  {
    title: "Customers buy once and never return.",
    experience: "Revenue depends on constantly finding new buyers or running another discount.",
    causes: "Weak post-purchase communication, generic campaigns and no timely reason to return.",
    investigate: "Customer segments, lifecycle messages, replenishment timing and win-back opportunities.",
    solution: "Build relevant journeys that help the first purchase become a durable customer relationship."
  },
  {
    title: "I don’t know what is actually broken.",
    experience: "There is plenty of data and advice, but no clear first move.",
    causes: "Disconnected tools, conflicting recommendations and too many simultaneous changes.",
    investigate: "The full customer journey, performance data, technical health and operational friction.",
    solution: "Turn symptoms into a ranked diagnosis with a clear owner, rationale and next step."
  }
] as const;

export const leakStages = [
  { key: "attract", label: "Attract", icon: "Radar", problem: "Wrong or expensive traffic", help: "Traffic quality, campaign alignment and acquisition analysis" },
  { key: "convince", label: "Convince", icon: "ShoppingBag", problem: "Visitors do not understand why they should purchase", help: "Offers, product positioning, merchandising and product-page improvement" },
  { key: "reassure", label: "Reassure", icon: "ShieldCheck", problem: "The store does not create enough confidence", help: "Reviews, policies, delivery messaging, proof and trust architecture" },
  { key: "convert", label: "Convert", icon: "CreditCard", problem: "Customers encounter friction before payment", help: "Cart, checkout, mobile UX and payment-flow optimization" },
  { key: "retain", label: "Retain", icon: "RefreshCcw", problem: "Customers purchase once and disappear", help: "Email automation, post-purchase journeys, loyalty and win-back systems" },
  { key: "discover", label: "Discover", icon: "Search", problem: "The business depends entirely on advertising", help: "Ecommerce SEO, content architecture and AI-search visibility" }
] as const;

export const solutions = [
  { title: "Ecommerce Conversion Improvement", problem: "Traffic arrives without enough purchases.", examine: "Behaviour data, offers, navigation, persuasion and mobile friction.", work: "Journey restructuring, offer clarity, UX recommendations and conversion-focused implementation." },
  { title: "Store Design and User Experience", problem: "The store feels difficult, inconsistent or unreliable.", examine: "Hierarchy, discovery, accessibility, trust cues and responsive behaviour.", work: "Interface refinement, clearer navigation, mobile layouts and a more credible design system." },
  { title: "Product Page Optimization", problem: "Product pages inform without creating confidence or desire.", examine: "Imagery, benefits, objections, variants, proof and calls to action.", work: "Page structure, persuasive product content, merchandising and decision-support improvements." },
  { title: "Cart and Checkout Recovery", problem: "Customers add products, then leave before payment.", examine: "Unexpected costs, checkout steps, payment methods and abandonment patterns.", work: "Cart clarity, friction removal, recovery messages and checkout-flow recommendations." },
  { title: "Ecommerce SEO and AI Visibility", problem: "The store depends on ads and remains hard to discover.", examine: "Technical SEO, product content, collections, internal links and entity signals.", work: "Search architecture, content optimization, technical fixes and AI-search readiness." },
  { title: "Customer Retention and Email Systems", problem: "Most customers purchase once and disappear.", examine: "Customer segments, lifecycle gaps, offer dependence and campaign relevance.", work: "Welcome, post-purchase, abandonment, win-back and replenishment journeys." },
  { title: "Performance and Technical Optimization", problem: "Slow pages and technical debt make every visit and change more expensive.", examine: "Core Web Vitals, apps, scripts, theme quality, errors and maintainability.", work: "Performance fixes, script cleanup, issue repair and a more stable storefront foundation." },
  { title: "Analytics and Revenue-Leak Diagnosis", problem: "Data exists, but it does not point to a confident decision.", examine: "Tracking quality, funnel drop-offs, customer behaviour and operational constraints.", work: "Measurement repair, evidence-led diagnosis and a ranked action plan." }
] as const;

export const videos = [
  {
    id: "jZ7npJ8L0q8",
    label: "Conversion Transformation 01",
    url: "https://youtu.be/jZ7npJ8L0q8",
    description: "Watch the first Sage Partners conversion transformation."
  },
  {
    id: "8lZtRGMK9dA",
    label: "Conversion Transformation 02",
    url: "https://youtu.be/8lZtRGMK9dA",
    description: "Watch the second Sage Partners conversion transformation."
  },
  {
    id: "rROrt_czWuA",
    label: "Conversion Transformation 03",
    url: "https://youtu.be/rROrt_czWuA",
    description: "Watch the third Sage Partners conversion transformation."
  }
] as const;

export const aiseoVideos = [
  { id: "qhsqCwB1s1I", label: "What AISEO means for ecommerce visibility" },
  { id: "sg9jq9CvEGw", label: "How AISEO helps customers discover your brand" }
] as const;

export const team = [
  { name: "Michael Olajire", role: "Lead Developer", image: "/images/team/michael-olajire.webp", fiverr: "https://www.fiverr.com/michae1_olajire" }
] as const;

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  idLabel?: string;
  certificateId: string;
  dateLabel?: string;
  validRange: string;
  summary: string;
  certificateImage: string;
  imageWidth: number;
  imageHeight: number;
  badgeImage?: string;
  sealValue?: string;
  sealCaption?: string;
  credentialUrl: string;
  actionLabel?: string;
  tooltipText?: string;
}

export const certifications: readonly CertificationItem[] = [
  {
    id: "klaviyo-practitioner",
    title: "Klaviyo Practitioner",
    issuer: "Klaviyo Academy",
    idLabel: "Certificate ID",
    certificateId: "201370403",
    dateLabel: "Validity",
    validRange: "Nov 21, 2026 – Nov 21, 2028",
    summary:
      "Recognizes full mastery of Klaviyo retention workflows, customer segmentation, lifecycle email and SMS automation, and revenue attribution for ecommerce storefronts.",
    certificateImage: "/assets/aistudio/image_60045b50.png",
    imageWidth: 599,
    imageHeight: 454,
    badgeImage: "/assets/aistudio/08dc62da-1451-41b4-a38c-d42937fe14cd_094fa25d.png",
    credentialUrl: "https://credential.klaviyo.com/05e4c011-16de-4a95-933a-e9916219b331#acc.IuVqdtnF",
    actionLabel: "Verify Credential",
    tooltipText: "Independently verifiable through Klaviyo Academy’s official credential portal."
  },
  {
    id: "mailchimp-foundations",
    title: "Mailchimp Foundations",
    issuer: "Mailchimp Certified",
    idLabel: "Completion ID",
    certificateId: "439548344",
    dateLabel: "Completed · Score",
    validRange: "Nov 27, 2026 · 94/100",
    summary:
      "Certifies mastery of Mailchimp Foundations across audience segmentation, automated customer journeys, campaign strategy, and ecommerce retention marketing.",
    certificateImage: "/images/certifications/mailchimp-foundations.png",
    imageWidth: 1200,
    imageHeight: 1105,
    sealValue: "94%",
    sealCaption: "Certified",
    credentialUrl: "/assets/aistudio/foundation_certificate_3ef3128b.pdf",
    actionLabel: "View Certificate PDF",
    tooltipText: "Official Mailchimp Foundations Final Assessment certificate (Completion ID: 439548344)."
  }
] as const;
