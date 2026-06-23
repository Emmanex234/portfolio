import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiFirebase, SiSupabase, SiTailwindcss, SiFlask } from "react-icons/si";

const projects = [
  {
    title: "CryptoKit",
    emoji: "🔐",
    gradient: "linear-gradient(135deg, #84cc16, #0a0a0f)",
    description:
      "A browser-based cryptography toolkit that lets users hash, encrypt, and decrypt text using multiple algorithms. Built with vanilla JavaScript and CryptoJS — all operations run locally with zero data transmitted.",
    features: [
      "Text Hashing (MD5, SHA-256, SHA-512...)",
      "AES / DES Encryption",
      "In-Browser Decryption",
      "Live Hash Preview",
    ],
    tags: [
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38bdf8" },
    ],
    github: "https://github.com/Emmanex234/hashing.git",
    demo: "https://hashing-one.vercel.app/",
  },
  {
    title: "Nigerian Hate Speech Detection",
    emoji: "🛡️",
    gradient: "linear-gradient(135deg, #16a34a, #15803d)",
    description:
      "A web-based ML system that detects hate speech in Nigerian English and Pidgin text. Built with Python, Flask, and Scikit-learn using Logistic Regression and TF-IDF vectorization, with a user feedback loop for continuous model improvement.",
    features: [
      "Hate Speech Classification",
      "Nigerian Pidgin Support",
      "User Feedback System",
      "Model Retraining",
    ],
    tags: [
      { name: "Python", icon: <FaPython />, color: "#3b82f6" },
      { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
    ],
    github: "https://github.com/Emmanex234/hate.git",
    demo: "https://github.com/Emmanex234/hate.git",
  },
  {
    title: "Personal Portfolio",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
    description:
      "A premium developer portfolio — this very site — featuring a glassmorphism dark theme, animated sections, particle background, dark/light toggle, and an EmailJS contact form.",
    features: [
      "Responsive Design",
      "Contact Form",
      "Smooth Animations",
      "Dark/Light Mode",
    ],
    tags: [
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    ],
    github: "https://github.com/Emmanex234/portfolio.git",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "7rem 2rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label" style={{ justifyContent: "center" }}>
            What I&apos;ve built
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Real-world applications built with a focus on clean code, great UX,
            and modern stacks.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="glass gradient-border"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Project banner */}
              <div
                style={{
                  height: "160px",
                  background: project.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: "4rem" }}>{project.emoji}</span>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    left: "-30px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "20px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Features */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: "0.73rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "100px",
                        background: "rgba(79,142,247,0.1)",
                        border: "1px solid rgba(79,142,247,0.2)",
                        color: "var(--accent-blue)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.8rem",
                        color: tag.color,
                        fontWeight: 500,
                      }}
                    >
                      {tag.icon} {tag.name}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      padding: "0.6rem 1rem",
                    }}
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      padding: "0.6rem 1rem",
                    }}
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
