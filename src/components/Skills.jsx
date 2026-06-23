import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaPython
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiSupabase } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 92, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 88, color: '#1572b6' },
      { name: 'JavaScript', icon: <FaJs />, level: 82, color: '#f7df1e' },
      { name: 'React.js', icon: <FaReact />, level: 85, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#38bdf8' },
      { name: 'Python', icon: <FaPython />, level: 80, color: '#3b82f6' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 78, color: '#f05032' },
      { name: 'GitHub', icon: <FaGithub />, level: 80, color: '#fff' },
      { name: 'VS Code', icon: <VscCode />, level: 90, color: '#007acc' },
      
    ],
  },
  
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass"
      style={{ borderRadius: '14px', padding: '1.25rem 1.5rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
        <span style={{ fontSize: '1.6rem', color: skill.color }}>{skill.icon}</span>
        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{skill.name}</span>
        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: skill.color }}>{skill.level}%</span>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '100px', height: '5px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', borderRadius: '100px', background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>My expertise</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
            A curated set of technologies I work with to bring ideas to life — from pixel-perfect UI to database integration.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>0{gi + 1}</span>
                {group.category}
                <span style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
              </motion.h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                {group.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
