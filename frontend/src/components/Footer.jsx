import React from 'react';

const Footer = ({ name }) => (
  <footer style={{
    background: 'var(--bg2)', borderTop: '1px solid var(--border)',
    padding: '32px', textAlign: 'center', position: 'relative', zIndex: 2,
  }}>
    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
      <span className="violet-text">AG</span>
    </div>
    <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 16 }}>
      {name} — Full Stack Developer
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
      {[
        { label: 'GitHub', href: 'https://github.com/anushka11043' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anushka-garg-68353927a/' },
        { label: 'Email', href: 'mailto:anushkagarg@gmail.com' },
      ].map(link => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
          style={{ fontSize: 13, color: 'var(--text2)', textDecoration: 'none', transition: 'color .2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--violet)'}
          onMouseLeave={e => e.target.style.color = 'var(--text2)'}
        >{link.label}</a>
      ))}
    </div>
    <div style={{ fontSize: 12, color: 'var(--text3)' }}>
      © {new Date().getFullYear()} All rights reserved
    </div>
  </footer>
);

export default Footer;
