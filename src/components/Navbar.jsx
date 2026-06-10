import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'services', label: 'Services' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(8,11,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="hero" smooth duration={500} style={{ cursor: 'pointer' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.35rem', fontWeight: 700 }}>
            <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>
            <span style={{ color: 'var(--text-primary)' }}>UE</span>
            <span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              spy
              activeClass="nav-active"
              style={{
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} style={{ background: 'none', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.45rem', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}>
            {theme === 'dark' ? <MdOutlineLightMode size={18} /> : <MdOutlineDarkMode size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div style={{ display: 'none', gap: '0.75rem', alignItems: 'center' }} className="mobile-nav">
          <button onClick={toggleTheme} style={{ background: 'none', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.45rem', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex' }}>
            {theme === 'dark' ? <MdOutlineLightMode size={18} /> : <MdOutlineDarkMode size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex' }}>
            {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(8,11,20,0.97)',
              borderTop: '1px solid var(--glass-border)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  style={{ cursor: 'pointer', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
