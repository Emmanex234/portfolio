import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : '';
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'var(--bg-primary)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                border: '3px solid rgba(79,142,247,0.2)',
                borderTop: '3px solid #4f8ef7',
              }}
            />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#4f8ef7' }}>
              Loading portfolio...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Particles />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem',
            width: '46px', height: '46px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)',
            border: 'none', cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem', zIndex: 99,
            boxShadow: '0 8px 25px rgba(79,142,247,0.4)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
