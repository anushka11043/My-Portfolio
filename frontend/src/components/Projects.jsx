import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => (
  <div className="card" style={{
    padding: 0, overflow: 'hidden', cursor: 'pointer',
    animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
    position: 'relative',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = project.color + '66';
      e.currentTarget.style.boxShadow = `0 0 30px ${project.color}22`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Top color bar */}
    <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />

    <div style={{ padding: 24 }}>
      {/* Icon + Featured badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: project.color + '22', border: `1px solid ${project.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
        }}>{project.icon}</div>
        {project.featured && (
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
            background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)',
            color: 'var(--violet)', padding: '3px 10px', borderRadius: 20,
          }}>Featured</span>
        )}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 18 }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: 11, fontWeight: 500,
            background: 'var(--bg3)', border: '1px solid var(--border)',
            color: 'var(--text2)', padding: '3px 10px', borderRadius: 20,
          }}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 10 }}>
        <a href={project.github} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            flex: 1, padding: '8px', borderRadius: 8, textDecoration: 'none',
            border: '1px solid var(--border)', color: 'var(--text2)',
            fontSize: 12, fontWeight: 600, textAlign: 'center',
            background: 'transparent', transition: 'all .2s', display: 'flex',
            alignItems: 'center', justifyContent: 'center', gap: 4,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--violet)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
        >⭐ GitHub</a>
        <a href={project.live} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            flex: 1, padding: '8px', borderRadius: 8, textDecoration: 'none',
            background: `${project.color}22`, border: `1px solid ${project.color}44`,
            color: project.color, fontSize: 12, fontWeight: 600, textAlign: 'center',
            transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
          }}></a>
      </div>
    </div>
  </div>
);

const Projects = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? data : data.slice(0, 4);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal anim-fade-up">
         
          <h2 className="section-heading">My <span className="violet-text">Projects</span></h2>
          <p className="section-sub">Things I've built — from idea to deployment</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 40 }}>
          {shown.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {data.length > 4 && (
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less ↑' : `View All ${data.length} Projects ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
