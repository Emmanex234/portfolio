import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiLayers, FiTool } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode size={28} />,
    title: 'Frontend Development',
    description: 'Building fast, accessible, and pixel-perfect frontends with React.js and modern JavaScript. Emphasis on clean component architecture and maintainability.',
    color: '#4f8ef7',
  },
  {
    icon: <FiSmartphone size={28} />,
    title: 'Responsive Web Design',
    description: 'Every layout I build works beautifully across mobile, tablet, and desktop — no media query left behind.',
    color: '#8b5cf6',
  },
  {
    icon: <FiLayers size={28} />,
    title: 'React Application Development',
    description: 'Full React app development with state management, routing, API integration, and authentication flows.',
    color: '#22d3ee',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'UI from Figma',
    description: 'Translating Figma or Adobe XD mockups into production-ready, interactive React components with precision.',
    color: '#f59e0b',
  },
  {
    icon: <FiTool size={28} />,
    title: 'Website Maintenance',
    description: 'Ongoing support, performance optimisation, bug fixes, and feature additions for existing web projects.',
    color: '#10b981',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>What I offer</p>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            End-to-end frontend solutions tailored to your product vision.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass"
              style={{ borderRadius: '18px', padding: '2rem', cursor: 'default', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            >
              {/* Corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', borderRadius: '0 0 0 100%', background: `${svc.color}15` }} />

              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: `${svc.color}18`, border: `1px solid ${svc.color}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: svc.color, marginBottom: '1.25rem',
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{svc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.72 }}>{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
