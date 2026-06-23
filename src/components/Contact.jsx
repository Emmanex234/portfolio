import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const contactInfo = [
  {
    icon: <HiOutlineMail size={20} />,
    label: "Email",
    value: "emmanueludofot40@gmail.com",
    href: "mailto:emmanueludofot40@gmail.com",
    color: "#4f8ef7",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuel-udofot-5b03b1312",
    href: "https://www.linkedin.com/in/emmanuel-udofot-5b03b1312",
    color: "#0a66c2",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "github.com/udofot",
    href: "https://github.com/",
    color: "#fff",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+234 903 719 5528",
    href: "https://wa.me/+2349037195528",
    color: "#25d366",
  },
];

const inputStyle = {
  width: '100%', padding: '0.85rem 1.1rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--glass-border)',
  borderRadius: '10px',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'Space Grotesk, sans-serif',
};

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" style={{ padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Get in touch</p>
          <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Let&apos;s work together</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
              I&apos;m open to freelance projects, internship opportunities, and full-time roles. Feel free to reach out through the form or any of the channels below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map(info => (
                <a key={info.label} href={info.href} target="_blank" rel="noreferrer"
                  className="glass"
                  style={{ borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = info.color; e.currentTarget.style.transform = 'translateX(5px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${info.color}15`, border: `1px solid ${info.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: info.color, flexShrink: 0 }}>
                    {info.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.1rem' }}>{info.label}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass gradient-border" style={{ borderRadius: '20px', padding: '2.5rem' }}>
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <FiUser size={13} /> Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <FiMail size={13} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'block' }}>Subject</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry / Collaboration..."
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FiMessageSquare size={13} /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : (<><FiSend /> Send Message</>)}
                </button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#10b981', textAlign: 'center', fontSize: '0.9rem' }}>
                    ✅ Message sent! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>
                    ❌ Something went wrong. Please try again or email directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
