import React, { useState, useEffect, useRef } from 'react';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database'];

const SkillBar = ({ skill, visible }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{skill.icon}</span>
        <span style={{ fontSize: 14, fontWeight: 500 }}>{skill.name}</span>
      </div>
      <span style={{ fontSize: 13, color: 'var(--violet)', fontWeight: 600 }}>{skill.level}%</span>
    </div>
    <div style={{ height: 6, background: 'var(--bg3)', borderRadius: 6, overflow: 'hidden' }}>
      <div style={{
        height: '100%', borderRadius: 6,
        background: 'linear-gradient(90deg, var(--violet2), var(--cyan))',
        width: visible ? `${skill.level}%` : '0%',
        transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: visible ? '0 0 12px rgba(167,139,250,0.4)' : 'none',
      }} />
    </div>
  </div>
);

const Skills = ({ data }) => {
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === 'All' ? data : data.filter(s => s.category === active);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal anim-fade-up">
          
          <h2 className="section-heading">My <span className="violet-text">Skills</span></h2>
          <p className="section-sub">Technologies I work with daily</p>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  padding: '8px 20px', borderRadius: 40, border: 'none', cursor: 'pointer',
                  fontFamily: 'Syne', fontSize: 13, fontWeight: 600, transition: 'all 0.25s',
                  background: active === cat ? 'linear-gradient(135deg, var(--violet2), var(--violet))' : 'var(--surface)',
                  color: active === cat ? '#fff' : 'var(--text2)',
                  border: `1px solid ${active === cat ? 'transparent' : 'var(--border)'}`,
                  boxShadow: active === cat ? '0 4px 20px rgba(124,58,237,0.35)' : 'none',
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          {/* Skill bars */}
          <div className="reveal anim-fade-left" style={{
            background: 'var(--surface)', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 28,
          }}>
            <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '.1em' }}>
              Proficiency
            </div>
            {filtered.map(skill => (
              <SkillBar key={skill.name} skill={skill} visible={visible} />
            ))}
          </div>

          {/* Skill cards */}
          <div className="reveal anim-fade-right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {filtered.map((skill, i) => (
                <div key={skill.name} className="card" style={{
                  padding: 20, textAlign: 'center', cursor: 'default',
                  animation: `scaleIn 0.4s ease ${i * 0.06}s both`,
                }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{skill.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{skill.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{skill.category}</div>
                  <div style={{
                    marginTop: 10, fontSize: 12, fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #skills .container > div:last-child { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
