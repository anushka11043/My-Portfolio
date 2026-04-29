import React from 'react';

const About = ({ data }) => {
  if (!data) return null;

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

         {/* left text */}
          <div className="reveal anim-fade-left" style={{ position: 'relative' }}>
            <div style={{
              width: '100%', maxWidth: 380, aspectRatio: '1',
              background: 'var(--surface)', borderRadius: 32,
              border: '1px solid var(--border)', overflow: 'hidden',
              position: 'relative', margin: '0 auto',
            }}>
              
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(34,211,238,0.15) 100%)',
              }} />

             
              <div style={{
                position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 16,
              }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet2), var(--cyan))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 52, fontFamily: 'Syne', fontWeight: 800, color: '#fff',
                  boxShadow: '0 0 40px rgba(124,58,237,0.5)',
                }}>A</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 18 }}>{data.name}</div>
                <div style={{ fontSize: 13, color: 'var(--violet)', fontWeight: 500 }}>{data.role}</div>
              </div>

             
              <div style={{ position: 'absolute', top: 20, right: 20, width: 60, height: 60, border: '2px solid rgba(167,139,250,0.3)', borderRadius: 12, transform: 'rotate(15deg)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, width: 40, height: 40, background: 'rgba(34,211,238,0.1)', borderRadius: 8 }} />
            </div>

            
            <div style={{
              position: 'absolute', bottom: -16, right: 0,
              background: 'var(--surface)', border: '1px solid var(--border2)',
              borderRadius: 12, padding: '10px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              animation: 'floatOrb 4s ease-in-out infinite',
            }}>
              <span style={{ fontSize: 20 }}>📍</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{data.location}</div>
                <div style={{ fontSize: 10, color: 'var(--text3)' }}>Based in India</div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="reveal anim-fade-right">
            <div style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--violet)', fontWeight: 600, marginBottom: 12 }}>
              About Me
            </div>
            <h2 className="section-heading" style={{ marginBottom: 20 }}>
              Crafting digital<br /><span className="violet-text">experiences</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 28 }}>
              {data.about}
            </p>

            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {[
                { label: 'Email', value: data.email, icon: '📧' },
                { label: 'Location', value: data.location, icon: '📍' },
                { label: 'Status', value: data.available ? 'Open to work' : 'Unavailable', icon: '✅' },
                { label: 'Role', value: data.role, icon: '💼' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '12px 14px',
                }}>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4 }}>{item.icon} {item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub ↗</a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about .container > div { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
};

export default About;
