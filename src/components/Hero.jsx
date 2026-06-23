import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FiEye, FiArrowRight } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import CVModal from "../components/CVModal";

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  { icon: <FaWhatsapp size={18} />, href: "https://wa.me/", label: "WhatsApp" },
  {
    icon: <HiOutlineMail size={18} />,
    href: "mailto:udofot@example.com",
    label: "Email",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)}>
            <span className="section-label" style={{ marginBottom: "1.25rem" }}>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Hi, I&apos;m <span className="gradient-text">Udofot Emmanuel</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.3)}
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              minHeight: "2.2rem",
            }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Web Developer",
                2500,
                "React.js Specialist",
                2500,
                "UI/UX Implementer",
                2500,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: "var(--accent-cyan)" }}
            />
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "500px",
            }}
          >
            Building modern, responsive, and user-friendly web applications with
            React.js and modern web technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.5)}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <Link to="projects" smooth duration={500} offset={-70}>
              <button className="btn-primary">
                View Projects <FiArrowRight />
              </button>
            </Link>
            <button onClick={() => setCvOpen(true)} className="btn-outline">
              <FiEye /> View CV
            </button>
            <Link to="contact" smooth duration={500} offset={-70}>
              <button className="btn-outline">
                <HiOutlineMail /> Contact Me
              </button>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            {...fadeUp(0.6)}
            style={{ display: "flex", gap: "0.75rem" }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-card)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                  e.currentTarget.style.color = "var(--accent-blue)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="float" style={{ position: "relative" }}>
            {/* Outer glow ring */}
            <div
              className="glow"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(139,92,246,0.15))",
                border: "1px solid rgba(79,142,247,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Inner avatar */}
              <div
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a2744, #0d1224)",
                  border: "3px solid rgba(79,142,247,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                  {/* Body */}
                  <circle
                    cx="110"
                    cy="85"
                    r="45"
                    fill="rgba(79,142,247,0.15)"
                    stroke="rgba(79,142,247,0.4)"
                    strokeWidth="2"
                  />
                  {/* Head */}
                  <circle cx="110" cy="80" r="32" fill="#1e3a5f" />
                  {/* Face */}
                  <circle cx="110" cy="78" r="25" fill="#2a4a7f" />
                  {/* Eyes */}
                  <circle cx="102" cy="74" r="3.5" fill="#4f8ef7" />
                  <circle cx="118" cy="74" r="3.5" fill="#4f8ef7" />
                  <circle cx="103" cy="73" r="1.2" fill="white" />
                  <circle cx="119" cy="73" r="1.2" fill="white" />
                  {/* Smile */}
                  <path
                    d="M103 84 Q110 91 117 84"
                    stroke="#4f8ef7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Shoulders / torso */}
                  <path
                    d="M65 160 Q70 130 110 125 Q150 130 155 160 L155 220 L65 220 Z"
                    fill="#1a3060"
                  />
                  {/* Laptop */}
                  <rect
                    x="80"
                    y="148"
                    width="60"
                    height="38"
                    rx="4"
                    fill="#0d1224"
                    stroke="rgba(79,142,247,0.5)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="84"
                    y="152"
                    width="52"
                    height="28"
                    rx="2"
                    fill="#111827"
                  />
                  {/* Code lines on screen */}
                  <rect
                    x="87"
                    y="156"
                    width="20"
                    height="2.5"
                    rx="1"
                    fill="#4f8ef7"
                    opacity="0.8"
                  />
                  <rect
                    x="87"
                    y="161"
                    width="30"
                    height="2.5"
                    rx="1"
                    fill="#8b5cf6"
                    opacity="0.8"
                  />
                  <rect
                    x="87"
                    y="166"
                    width="24"
                    height="2.5"
                    rx="1"
                    fill="#22d3ee"
                    opacity="0.8"
                  />
                  <rect
                    x="87"
                    y="171"
                    width="18"
                    height="2.5"
                    rx="1"
                    fill="#4f8ef7"
                    opacity="0.6"
                  />
                  {/* React logo floating */}
                  <circle
                    cx="170"
                    cy="55"
                    r="16"
                    fill="rgba(34,211,238,0.1)"
                    stroke="rgba(34,211,238,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="170"
                    y="60"
                    textAnchor="middle"
                    fill="#22d3ee"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    ⚛
                  </text>
                  {/* JS badge floating */}
                  <rect
                    x="38"
                    y="100"
                    width="28"
                    height="28"
                    rx="5"
                    fill="rgba(247,223,77,0.1)"
                    stroke="rgba(247,223,77,0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="52"
                    y="120"
                    textAnchor="middle"
                    fill="#f7df4d"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    JS
                  </text>
                </svg>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { label: "⚛ React.js", x: "-30px", y: "30px", delay: 0 },
              {
                label: "🎨 Tailwind",
                x: "calc(100% - 60px)",
                y: "10px",
                delay: 0.3,
              },
              {
                label: "🐍 Python",
                x: "-20px",
                y: "calc(100% - 60px)",
                delay: 0.6,
              },
            ].map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + b.delay, type: "spring" }}
                style={{
                  position: "absolute",
                  left: b.x,
                  top: b.y,
                  background: "rgba(13,18,36,0.9)",
                  border: "1px solid rgba(79,142,247,0.3)",
                  borderRadius: "10px",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  backdropFilter: "blur(10px)",
                  whiteSpace: "nowrap",
                }}
              >
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
