import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiCode, FiAward, FiCalendar } from 'react-icons/fi';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: <FiCode size={24} />, value: 12, suffix: '+', label: 'Projects Completed' },
  { icon: <FiAward size={24} />, value: 15, suffix: '+', label: 'Technologies Learned' },
  { icon: <FiCalendar size={24} />, value: 2, suffix: '+', label: 'Years of Learning' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">

          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: 'relative' }}>
              {/* Main card */}
              <div className="glass gradient-border" style={{ borderRadius: '20px', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                  👨‍💻
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Udofot Emmanuel</h3>
                <p className="mono" style={{ fontSize: '0.82rem', color: 'var(--accent-blue)' }}>Frontend Web Developer</p>

                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                  {[
                    { label: 'Location', value: 'Nigeria' },
                    { label: 'Degree', value: 'B.Tech Computer Science' },
                    { label: 'School', value: 'FUTO' },
                    { label: 'Class', value: 'Second Class Upper' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{item.label}</span>
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience dot */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)',
                  borderRadius: '14px', padding: '0.75rem 1.2rem',
                  fontSize: '0.82rem', fontWeight: 700, color: 'white',
                  boxShadow: '0 8px 30px rgba(79,142,247,0.35)',
                }}
              >
                2+ Years<br />
                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>of experience</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Who I am</p>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              I am a Computer Science graduate with a strong passion for frontend development and creating exceptional digital experiences. I specialize in building responsive, interactive, and visually appealing web applications using React.js, JavaScript, and modern frontend tools.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '1.02rem' }}>
              I enjoy transforming ideas into functional products that deliver great user experiences. My goal is to write clean, efficient code that not only works well but also looks great on every screen size and device.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass"
                  style={{ borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}
                >
                  <div style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700 }} className="gradient-text">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '0.77rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
