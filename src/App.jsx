import { useEffect, useRef, useState } from "react";
import {
  profile,
  skills,
  experience,
  projects,
  publications,
  certifications,
  education,
  repos,
} from "./data";
import {
  GitHub,
  LinkedIn,
  Mail,
  External,
  Repo,
  Award,
  Arrow,
  Download,
} from "./icons.jsx";

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Credentials", "credentials"],
  ["GitHub", "github"],
];

const LANG_COLOR = {
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  JavaScript: "#f1e05a",
};

/* Reveal-on-scroll wrapper */
function Reveal({ children, className = "", as: Tag = "div", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${w}%` }} />;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          Aniket<span>.</span>
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

/* Typing-terminal hero visual (replaces the photo) */
const TERMINAL_LINES = [
  { t: "$ whoami", cls: "t-cmd" },
  { t: "aniket_bembale — AI Engineer", cls: "t-out" },
  { t: "$ cat focus.json", cls: "t-cmd" },
  { t: "{", cls: "t-json" },
  { t: '  "genai":   ["RAG", "Agents", "LLMs"],', cls: "t-json" },
  { t: '  "cloud":   "AWS Bedrock",', cls: "t-json" },
  { t: '  "stack":   ["LangGraph", "FastAPI"],', cls: "t-json" },
  { t: '  "shipping": true', cls: "t-json" },
  { t: "}", cls: "t-json" },
  { t: "$ deploy --to production", cls: "t-cmd" },
  { t: "✓ build passed  ✓ live", cls: "t-ok" },
];

function HeroVisual() {
  const [count, setCount] = useState(0); // how many lines are visible
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(TERMINAL_LINES.length);
      return;
    }
    let i = 0;
    let stepId;
    let loopId;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < TERMINAL_LINES.length) {
        stepId = setTimeout(tick, 650);
      } else {
        // hold the finished frame, then restart
        loopId = setTimeout(() => {
          i = 0;
          setCount(0);
          stepId = setTimeout(tick, 650);
        }, 2800);
      }
    };
    stepId = setTimeout(tick, 650);
    return () => {
      clearTimeout(stepId);
      clearTimeout(loopId);
    };
  }, []);

  return (
    <div className="visual-wrap">
      {/* animated aurora orb behind */}
      <div className="visual-orb" />

      {/* orbiting skill nodes */}
      <div className="orbit orbit-1"><span className="orbit-chip">LLM</span></div>
      <div className="orbit orbit-2"><span className="orbit-chip">RAG</span></div>
      <div className="orbit orbit-3"><span className="orbit-chip">AWS</span></div>

      {/* terminal */}
      <div className="term">
        <div className="term-top">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
          <span className="term-title">aniket@portfolio ~ </span>
        </div>
        <div className="term-body">
          {TERMINAL_LINES.slice(0, count).map((ln, idx) => (
            <div key={idx} className={`term-line ${ln.cls}`}>
              {ln.t}
            </div>
          ))}
          <span className="term-cursor" />
        </div>
      </div>

      <div className="hero-badge badge-bot">🏆 2× Best Paper</div>
    </div>
  );
}

function Hero() {
  return (
    <header id="top" className="hero container">
      <div className="hero-grid">
        <div>
          <Reveal>
            <p className="hero-hi">Hi, I'm</p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              <span className="gradient-text">{profile.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero-role">
              <b>{profile.role}</b> · GenAI · LLMs · MLOps
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="hero-sum">{profile.tagline} {profile.summary}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View my work <Arrow />
              </a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                <Mail /> Contact me
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-socials">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail />
              </a>
              <a href={profile.links.cloudthat} target="_blank" rel="noreferrer" aria-label="CloudThat articles">
                <External />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual">
          <HeroVisual />
        </Reveal>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse" />
        Scroll
      </a>
    </header>
  );
}

function Stats() {
  return (
    <div className="container" style={{ marginTop: "-30px" }}>
      <Reveal>
        <div className="stats">
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section container">
      <Reveal className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01 · Who I am" title="About me">
      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            I'm an <b>AI Engineer</b> with <b>2.8+ years</b> of experience taking
            Generative AI and ML systems from idea to production. My work spans
            <b> multi-agent systems</b>, <b>advanced RAG</b>, <b>LLM fine-tuning</b>,
            and cloud-native deployment on <b>AWS</b>.
          </p>
          <p>
            At <b>CloudThat</b> I build GenAI analytics and support platforms on
            Amazon Bedrock. At <b>C-DAC CINE, IIT Guwahati</b> I work on an R&D
            project under the <b>National Quantum Mission (MeitY)</b>, applying
            Quantum Machine Learning to real-time disaster evacuation routing.
          </p>
          <p>
            Beyond shipping products, I publish research — with work in <b>IEEE
              Access</b> and two <b>Best Paper Awards</b> in the quantum &amp; AI/ML
            space.
          </p>
        </Reveal>
        <Reveal delay={120} className="about-card">
          <h4>Quick facts</h4>
          <div className="info-row">
            <span>Role</span>
            <strong>{profile.role}</strong>
          </div>
          <div className="info-row">
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="info-row">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="info-row">
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </div>
          <div className="info-row">
            <span>GitHub</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              @AniketBembale
            </a>
          </div>
          <div className="info-row">
            <span>LinkedIn</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              aniket-bembale
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Toolbox" title="Skills & technologies">
      <div className="skills-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60} className="skill-card">
            <h4>{g.group}</h4>
            <div className="chips">
              {g.items.map((it) => (
                <span className="chip" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Career" title="Experience">
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 80} className="tl-item">
            <div className="tl-period">{e.period}</div>
            <div className="tl-role">{e.role}</div>
            <div className="tl-company">
              <b>{e.company}</b> · {e.location}
            </div>
            <ul className="tl-points">
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, delay }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Reveal delay={delay} className="proj-card" onMouseMove={onMove}>
      <div className="proj-top">
        <span className="proj-cat">{p.category}</span>
        <span className="proj-icon">
          <Repo />
        </span>
      </div>
      <h3>{p.title}</h3>
      <p className="proj-blurb">{p.blurb}</p>
      <ul className="proj-high">
        {p.highlights.map((h, j) => (
          <li key={j}>{h}</li>
        ))}
      </ul>
      <div className="proj-tech">
        {p.tech.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="04 · Selected work" title="Featured projects">
      <div className="proj-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={(i % 3) * 70} />
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section id="research" eyebrow="05 · Publications" title="Research & papers">
      <div className="pub-list">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 70} className="pub-card">
            <div className="pub-head">
              <span className="pub-venue">
                {pub.venue} · {pub.year}
              </span>
              {pub.award && (
                <span className="pub-award">
                  <Award /> {pub.award}
                </span>
              )}
            </div>
            <h3>{pub.title}</h3>
            <p className="pub-authors">
              {pub.authors
                .split(", ")
                .map((a, idx) => (
                  <span key={idx}>
                    {a.includes("Bembale") || a.includes("A. Bembale") ? (
                      <b>{a}</b>
                    ) : (
                      a
                    )}
                    {idx < pub.authors.split(", ").length - 1 ? ", " : ""}
                  </span>
                ))}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Credentials() {
  return (
    <Section id="credentials" eyebrow="06 · Proof" title="Certifications & education">
      <div className="two-col">
        <Reveal>
          <h3 className="mini-title">🎖️ Certifications</h3>
          {certifications.map((c) => (
            <div className="cert-card" key={c.title}>
              <div className="cert-badge">
                <img src={c.badge} alt={`${c.title} badge`} loading="lazy" />
              </div>
              <div className="cert-info">
                <h4>{c.title}</h4>
                <p>
                  {c.issuer} · {c.date}
                </p>
                <span className="cert-verified">● Verified</span>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <h3 className="mini-title">🎓 Education</h3>
          {education.map((ed) => (
            <div className="edu-card" key={ed.school + ed.degree}>
              <div className="tl-period">{ed.period}</div>
              <h4>{ed.degree}</h4>
              <p>
                {ed.school} · {ed.location}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

function GitHubSection() {
  return (
    <Section id="github" eyebrow="07 · Open source" title="From my GitHub">
      <Reveal className="section-head" >
        <p style={{ color: "var(--text-dim)", marginTop: "-28px" }}>
          A selection from{" "}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--accent)" }}
          >
            40 public repositories
          </a>{" "}
          — from LLMs built from scratch to end-to-end MLOps pipelines.
        </p>
      </Reveal>
      <div className="gh-grid">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 60}>
            <a
              className="gh-card"
              href={r.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="gh-name">
                <Repo className="gh-ic" />
                <span className="gh-repo">{r.name}</span>
                <External className="gh-ext" />
              </div>
              <div className="gh-desc">{r.desc}</div>
              <div className="gh-foot">
                <span
                  className="lang-dot"
                  style={{ background: LANG_COLOR[r.lang] || "#8b949e" }}
                />
                {r.lang}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section container contact">
      <Reveal>
        <div className="contact-box">
          <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
            08 · Let's build
          </span>
          <h2>
            Let's create something <span className="gradient-text">intelligent</span>
          </h2>
          <p>
            I'm open to AI/ML engineering roles and collaborations on GenAI,
            agentic systems, and applied research. Let's talk.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container footer">
      <span>
        © {new Date().getFullYear()} {profile.name} · Built with React
      </span>
      <div className="footer-links">
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.links.cloudthat} target="_blank" rel="noreferrer">
          Articles
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Credentials />
      <GitHubSection />
      <Contact />
      <Footer />
    </>
  );
}
