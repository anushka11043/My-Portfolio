import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

const Navbar = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 32px',
      background: scrolled ? 'rgba(7,7,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
     
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer', fontFamily: 'Syne', fontWeight: 800, fontSize: 20 }}>
        <span className="violet-text">AG</span>
        <span style={{ color: 'var(--text3)', fontSize: 12, marginLeft: 8, fontFamily: 'DM Sans' }}>
         
        </span>
      </div>

      
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}
        className="desktop-nav">
        {NAV_LINKS.map(link => (
          <button key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans', fontSize: 14, fontWeight: 500,
              color: active === link ? 'var(--violet)' : 'var(--text2)',
              padding: '8px 16px', borderRadius: 20,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--violet)'}
            onMouseLeave={e => e.target.style.color = active === link ? 'var(--violet)' : 'var(--text2)'}
          >{link}</button>
        ))}
        <a href="mailto:anushkagarg@gmail.com" className="btn btn-primary" style={{ marginLeft: 8 }}>
          Hire Me
        </a>
      </div>

      
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--text)', fontSize: 22,
          padding: 4,
        }}
        className="hamburger">
        {menuOpen ? '✕' : '☰'}
      </button>

      
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(7,7,16,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Syne', fontSize: 16, fontWeight: 600,
                color: 'var(--text2)', padding: '12px 0', textAlign: 'left',
                borderBottom: '1px solid var(--border)', transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--violet)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >{link}</button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none!important;}
          .hamburger{display:flex!important;}
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
