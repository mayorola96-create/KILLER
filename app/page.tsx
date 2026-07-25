/* eslint-disable @next/next/no-img-element -- local assets are pre-sized and compressed WebP/PNG files */
import {
  siFacebook,
  siFiverr,
  siInstagram,
  siWhatsapp,
  siX,
} from "simple-icons/icons";

type IconData = { path: string; title: string };

const linkedinIcon: IconData = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.289zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V8.997H7.12v11.455zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z",
};

const navigation = [
  ["Problems", "#problems"],
  ["How We Help", "#how-we-help"],
  ["AISEO", "#aiseo"],
  ["Transformations", "#transformations"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

const problems = [
  {
    title: "I’m getting traffic, but almost no sales.",
    symptom: "People visit, browse and leave without adding products to their cart.",
    cause: "Traffic intent, offer clarity, product positioning or a weak mobile journey may be misaligned.",
    direction: "Clarify the offer and remove the highest-impact conversion barriers in priority order.",
  },
  {
    title: "My ads are becoming too expensive.",
    symptom: "Clicks cost more and campaigns struggle to stay profitable.",
    cause: "Poor tracking, weak creative-to-page alignment or too much dependence on paid acquisition.",
    direction: "Improve acquisition quality while strengthening conversion and organic discovery.",
  },
  {
    title: "Customers add products and disappear.",
    symptom: "Carts fill, but friction stops customers before payment.",
    cause: "Late shipping information, missing payment options or mobile checkout friction.",
    direction: "Make cost, confidence and the next action clear before checkout.",
  },
  {
    title: "My store doesn’t feel trustworthy enough.",
    symptom: "Visitors hesitate because the store feels incomplete or unclear.",
    cause: "Thin proof, inconsistent design, unclear policies or weak reassurance.",
    direction: "Place credible proof where customers need it most.",
  },
  {
    title: "Customers buy once and never return.",
    symptom: "Revenue depends on constantly finding another new customer.",
    cause: "Weak post-purchase communication and no timely reason to return.",
    direction: "Build lifecycle journeys that turn a first order into a durable relationship.",
  },
  {
    title: "I don’t know what is actually broken.",
    symptom: "There is plenty of data and advice, but no clear first move.",
    cause: "Disconnected tools, conflicting recommendations and too many simultaneous changes.",
    direction: "Turn symptoms into a ranked diagnosis with a clear next step.",
  },
];

const process = [
  ["01", "Diagnose", "We examine the complete customer journey, not just the visible page."],
  ["02", "Prioritize", "We separate urgent revenue leaks from low-impact distractions."],
  ["03", "Implement", "Specialists improve the areas preventing profitable growth."],
  ["04", "Measure", "We compare results with the starting point and plan what happens next."],
];

const services = [
  ["Conversion improvement", "Find and remove the friction between a visit and a purchase."],
  ["Store design & UX", "Create clearer navigation, stronger trust and better mobile journeys."],
  ["Product page optimization", "Turn product information into confidence and desire."],
  ["Cart & checkout recovery", "Reduce avoidable abandonment before payment."],
  ["SEO & AI visibility", "Improve search architecture, content signals and AI readiness."],
  ["Retention & email systems", "Build useful post-purchase, win-back and replenishment journeys."],
  ["Performance optimization", "Reduce page weight, script cost and technical instability."],
  ["Revenue-leak diagnosis", "Transform scattered data into a ranked, evidence-led action plan."],
];

const team = [
  {
    name: "Michael Olajire",
    role: "Lead Developer",
    image: "/images/michael.webp",
    fiverr: "https://www.fiverr.com/michae1_olajire",
  },
  {
    name: "Timi Oladunjoye",
    role: "Project Manager",
    image: "/images/timi.webp",
    email: "mailto:michael.sagepartners@gmail.com",
  },
  {
    name: "DeTruth",
    role: "Project Manager and Marketing Specialist",
    initials: "DT",
    fiverr: "https://www.fiverr.com/dreal_detruth",
  },
  {
    name: "Michy",
    role: "Backend Developer and Technical Optimization Specialist",
    image: "/images/michy.webp",
    fiverr: "https://www.fiverr.com/michyblake",
  },
  {
    name: "Bams",
    role: "Marketer",
    image: "/images/bams.webp",
    fiverr: "https://www.fiverr.com/d_bams",
  },
];

const socialLinks: Array<{
  label: string;
  detail: string;
  href: string;
  icon: IconData;
}> = [
  {
    label: "X",
    detail: "@_SagePartners",
    href: "https://x.com/_SagePartners",
    icon: siX,
  },
  {
    label: "Facebook",
    detail: "Sage Partners",
    href: "https://www.facebook.com/profile.php?id=61592408152309",
    icon: siFacebook,
  },
  {
    label: "Instagram",
    detail: "@sagepartners.space",
    href: "https://www.instagram.com/sagepartners.space",
    icon: siInstagram,
  },
  {
    label: "LinkedIn",
    detail: "Connect with Michael",
    href: "https://www.linkedin.com/in/michael-olajire-65a5842b6",
    icon: linkedinIcon,
  },
  {
    label: "WhatsApp",
    detail: "Start a conversation",
    href: "https://wa.link/cubji5",
    icon: siWhatsapp,
  },
];

function BrandIcon({ icon, size = 20 }: { icon: IconData; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      focusable="false"
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Sage Partners home">
          <img src="/images/sage-logo.png" alt="" width="44" height="44" fetchPriority="high" />
          <span>Sage Partners</span>
        </a>
        <details className="menu">
          <summary aria-label="Open navigation menu">
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </summary>
          <div className="menu-backdrop">
            <nav className="menu-panel" aria-label="Primary navigation">
              <p className="eyebrow">Navigate</p>
              {navigation.map(([label, href], index) => (
                <a href={href} key={href}>
                  <small>0{index + 1}</small>
                  {label}
                </a>
              ))}
              <a className="button dark menu-contact" href="#contact">
                Contact Sage Partners <span>↗</span>
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function VideoPlaceholder({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) {
  return (
    <a className="video-card" href={href} target="_blank" rel="noreferrer">
      <div className="video-frame">
        <img src={image} alt={`${title} video thumbnail`} width="480" height="360" loading="lazy" decoding="async" />
        <span className="play" aria-hidden="true">▶</span>
        <span className="shorts-tag">YouTube Shorts</span>
      </div>
      <div className="video-copy">
        <p className="eyebrow">{title}</p>
        <strong>Watch the AISEO explainer <span>↗</span></strong>
      </div>
    </a>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Sage Partners",
    url: "https://www.sagepartners.space",
    email: "michael.sagepartners@gmail.com",
    sameAs: [
      "https://x.com/_SagePartners",
      "https://www.facebook.com/profile.php?id=61592408152309",
      "https://www.instagram.com/sagepartners.space",
      "https://www.linkedin.com/in/michael-olajire-65a5842b6",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <section id="top" className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Ecommerce problem-solving partners</p>
              <h1>Your Store Is Working Hard. But Something Is Getting in the Way of Growth.</h1>
              <p className="hero-copy">
                Traffic without sales. Rising advertising costs. Abandoned carts.
                Customers who purchase once and disappear. Sage Partners finds what is
                holding your ecommerce store back and helps you fix it in the right order.
              </p>
              <div className="actions">
                <a className="button dark" href="#contact">Diagnose My Store <span>→</span></a>
                <a className="button light" href="#how-we-help">See How We Solve It <span>↘</span></a>
              </div>
              <p className="micro-proof"><span>✓</span> Practical recommendations. Clear priorities. No generic growth package.</p>
            </div>
            <div className="leak-map" aria-label="Common ecommerce growth symptoms">
              <span className="status-dot">Finding the leak… <i /></span>
              <article><small>01</small><strong>Visitors are coming. Why aren’t they buying?</strong></article>
              <article><small>02</small><strong>Our advertising costs keep rising.</strong></article>
              <article><small>03</small><strong>We don’t know what to fix first.</strong></article>
            </div>
          </div>
        </section>

        <section id="problems" className="section paper">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Start with the symptom</p>
              <h2>Does Any of This Sound Familiar?</h2>
              <p>These are not isolated problems. They are recurring frustrations shared by ecommerce owners every day.</p>
            </div>
            <div className="problem-grid">
              {problems.map((problem, index) => (
                <details className="problem-card" key={problem.title} open={index === 0}>
                  <summary><small>0{index + 1}</small><span>{problem.title}</span><b aria-hidden="true">+</b></summary>
                  <div className="problem-body">
                    <p><strong>What you may be experiencing</strong>{problem.symptom}</p>
                    <p><strong>Likely underlying causes</strong>{problem.cause}</p>
                    <p><strong>A practical direction</strong>{problem.direction}</p>
                    <a href="#contact">Discuss this problem <span>↗</span></a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="how-we-help" className="section sage">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A useful order of operations</p>
              <h2>From “Something Is Wrong” to a Clear Plan.</h2>
              <p>Every recommendation connects to a real customer-journey problem, a clear owner and a measurable next step.</p>
            </div>
            <div className="process-grid">
              {process.map(([number, title, copy]) => (
                <article key={title}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
            <blockquote>“You will always know what we are changing, why it matters and what should happen next.”</blockquote>
          </div>
        </section>

        <section id="aiseo" className="section aiseo">
          <div className="container aiseo-grid">
            <div>
              <p className="eyebrow">Search is changing</p>
              <h2>AISEO Helps Your Store Get Understood—and Found.</h2>
              <p className="lead">
                AISEO combines strong ecommerce SEO with structured content and
                technical signals that help customers, search engines and AI-powered
                discovery tools understand your products and expertise.
              </p>
              <ul className="check-list">
                <li><span>01</span><div><strong>Clear product meaning</strong><p>Explain what each product is, who it helps and why it is relevant.</p></div></li>
                <li><span>02</span><div><strong>Connected store structure</strong><p>Strengthen collections, internal links and entity relationships.</p></div></li>
                <li><span>03</span><div><strong>Answer-ready content</strong><p>Create useful pages that address real customer questions and buying concerns.</p></div></li>
                <li><span>04</span><div><strong>Technical clarity</strong><p>Improve metadata, structured data, crawlability and performance.</p></div></li>
              </ul>
              <p className="note"><span>✓</span> AISEO is not a shortcut or ranking guarantee. It is a practical way to make your store clearer wherever people search.</p>
            </div>
            <div className="video-grid" aria-label="AISEO explainer videos">
              <VideoPlaceholder
                title="AISEO Explainer 01"
                href="https://youtube.com/shorts/qhsqCwB1s1I?si=kubtt3WO1XODgmqN"
                image="/images/aiseo-1.webp"
              />
              <VideoPlaceholder
                title="AISEO Explainer 02"
                href="https://youtube.com/shorts/sg9jq9CvEGw?si=YNALMPPGoTVA_YIh"
                image="/images/aiseo-2.webp"
              />
            </div>
          </div>
        </section>

        <section className="section paper">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Practical solutions</p>
              <h2>The Right Help for the Problem in Front of You.</h2>
              <p>No preset package. Each capability is applied only when the diagnosis shows it matters.</p>
            </div>
            <div className="services-grid">
              {services.map(([title, copy], index) => (
                <article key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="transformations" className="section ink">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Real work. Visible thinking.</p>
              <h2>See the Transformation, Not Just the Promise.</h2>
              <p>Reserved for reviewed examples that clearly show the problem, approach and result.</p>
            </div>
            <div className="transformation-grid">
              {[1, 2, 3].map((item) => (
                <article key={item}>
                  <div className="placeholder-visual"><span>Case file 0{item}</span><i>↗</i></div>
                  <h3>Conversion Transformation 0{item}</h3>
                  <p>Project summary will appear here after review.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section butter">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The people behind the work</p>
              <h2>Specialists for Different Parts of the Problem.</h2>
              <p>Sage Partners brings together specialists across development, marketing, project delivery and technical optimization.</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => (
                <article className="team-card" key={member.name}>
                  <div className="portrait-frame">
                    <div className="portrait">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`${member.name}, ${member.role} at Sage Partners`}
                          width="720"
                          height="900"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="monogram" aria-label={`${member.name} monogram`}>{member.initials}</span>
                      )}
                    </div>
                    <p><span>Sage Partners</span><span>Team file / 0{index + 1}</span></p>
                  </div>
                  <div className="member-copy">
                    <span className="verified">✓ Verified</span>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="member-links">
                      {member.email ? <a href={member.email}>Email</a> : null}
                      {member.fiverr ? (
                        <a className="fiverr" href={member.fiverr} target="_blank" rel="noreferrer">
                          <BrandIcon icon={siFiverr} size={19} /> View on Fiverr <span>↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section security">
          <div className="container security-card">
            <div>
              <p className="eyebrow">Collaboration notice</p>
              <h2>Contact our support team before collaborating with any expert.</h2>
            </div>
            <p>Confirm the project through Sage Partners before making payments, sharing store access or beginning any collaboration.</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Let’s find what is holding your store back</p>
              <h2>Tell Us What Is Happening With Your Store.</h2>
              <p className="lead">You do not need to know the technical name of the problem. Describe what you are seeing and we will help determine the next practical step.</p>
              <div className="social-grid">
                {socialLinks.map((social) => (
                  <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                    <span><BrandIcon icon={social.icon} /></span>
                    <div><small>{social.label}</small><strong>{social.detail}</strong></div>
                  </a>
                ))}
                <a href="mailto:michael.sagepartners@gmail.com">
                  <span className="email-icon">@</span>
                  <div><small>Email</small><strong>michael.sagepartners@gmail.com</strong></div>
                </a>
              </div>
            </div>
            <form action="mailto:michael.sagepartners@gmail.com" method="post" encType="text/plain">
              <label>Name<input name="name" autoComplete="name" required /></label>
              <label>Email<input type="email" name="email" autoComplete="email" required /></label>
              <label>Store URL — optional<input type="url" name="storeUrl" placeholder="https://" inputMode="url" /></label>
              <label>
                What problem are you currently experiencing?
                <select name="problem" defaultValue="">
                  <option value="" disabled>Select the closest match</option>
                  <option>Traffic without sales</option>
                  <option>Expensive advertising</option>
                  <option>Cart or checkout abandonment</option>
                  <option>Weak customer trust</option>
                  <option>Low customer retention</option>
                  <option>Search and AI visibility</option>
                  <option>Technical performance</option>
                  <option>I am not sure yet</option>
                </select>
              </label>
              <label>Message<textarea name="message" rows={5} required /></label>
              <button className="button dark" type="submit">Send Message <span>→</span></button>
              <p className="form-note">Your details are used only to respond to this enquiry. Never send passwords through this form.</p>
            </form>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <p className="eyebrow">One clear next step</p>
            <h2>Your Store May Not Need More Traffic. It May Need Fewer Reasons for Customers to Leave.</h2>
            <div className="actions">
              <a className="button dark" href="#contact">Start With a Store Diagnosis</a>
              <a className="button light" href="https://wa.link/cubji5">Message Us on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <img src="/images/sage-logo.png" alt="" width="44" height="44" loading="lazy" />
              <span>Sage Partners</span>
            </a>
            <p>Built around clarity, trust and practical ecommerce growth.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="footer-social">
            {socialLinks.slice(0, 5).map((social) => (
              <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>
                <BrandIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="container copyright">© 2026 Sage Partners.</div>
      </footer>

      <a className="floating-wa" href="https://wa.link/cubji5" aria-label="Message Sage Partners on WhatsApp">
        <BrandIcon icon={siWhatsapp} size={25} />
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
