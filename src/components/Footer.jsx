import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/', label: 'WhatsApp' },
  { icon: <HiOutlineMail size={18} />, href: 'mailto:udofot@example.com', label: 'Email' },
];

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Education', 'Contact'];

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--glass-border)', padding: '4rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>UE<span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Building modern, responsive, and user-friendly web applications with React.js.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Quick Links</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {navLinks.map(link => (
                <Link key={link} to={link.toLowerCase()} smooth duration={500} offset={-70}
                  style={{ cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Availability</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Open to opportunities</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Available for freelance projects, internships, and full-time frontend roles.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            © 2026 Udofot Emmanuel. All Rights Reserved.
          </p>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)', transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
