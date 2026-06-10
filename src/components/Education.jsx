import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Academic background</p>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))', opacity: 0.3, borderRadius: '2px' }} className="timeline-line" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 'calc(50% + 2rem)', marginBottom: '2rem' }}
            className="edu-card-left"
          >
            <div className="glass gradient-border" style={{ borderRadius: '18px', padding: '2rem', maxWidth: '400px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <FiBook size={18} style={{ color: 'var(--accent-blue)' }} />
                <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent-blue)' }}>University Degree</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Bachelor of Technology (B.Tech)
              </h3>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.95rem' }}>Computer Science</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Federal University of Technology Owerri (FUTO)
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', padding: '0.3rem 0.8rem', borderRadius: '100px', background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.2)', color: 'var(--accent-blue)' }}>
                  <FiAward size={13} /> Second Class Upper
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', padding: '0.3rem 0.8rem', borderRadius: '100px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: 'var(--accent-purple)' }}>
                  <FiCalendar size={13} /> Graduated 2024
                </span>
              </div>
            </div>
          </motion.div>

          {/* Timeline dot */}
          <div style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translateX(-50%)', width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)', boxShadow: '0 0 20px rgba(79,142,247,0.6)', zIndex: 2 }} className="timeline-dot" />

          {/* Self-learning card on the right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 'calc(50% + 2rem)' }}
            className="edu-card-right"
          >
            <div className="glass" style={{ borderRadius: '18px', padding: '2rem', maxWidth: '400px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <FiBook size={18} style={{ color: 'var(--accent-purple)' }} />
                <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent-purple)' }}>Self-Directed</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Frontend Development</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Continuous self-study through online courses, documentation, and real project building. Focused on React ecosystem, modern CSS, and developer tooling.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {['React Docs', 'FreeCodeCamp', 'YouTube', 'Projects'].map(src => (
                  <span key={src} style={{ fontSize: '0.73rem', padding: '0.25rem 0.65rem', borderRadius: '100px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: 'var(--accent-purple)' }}>
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-line, .timeline-dot { display: none; }
          .edu-card-left, .edu-card-right { justify-content: center !important; padding: 0 !important; margin-bottom: 1.5rem; }
          .edu-card-left > div, .edu-card-right > div { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
