import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useAnimations';

const ROLES = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI Crafter',
  'Problem Solver',
];

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width  = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animId;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(167,139,250,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
};

const Hero = ({ data }) => {
  const typeRef = useTypewriter(ROLES, 80, 2000);

  if (!data) return null;

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }} className="grid-bg">
      <ParticleCanvas />

      
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.12)', top: '-10%', right: '-5%' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(34,211,238,0.08)', bottom: '10%', left: '-5%', animationDelay: '3s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 100 }}>
        <div style={{ maxWidth: 720 }}>

          
          <div className="anim-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 40, padding: '6px 16px', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'block', animation: 'blink 1.5s infinite' }} />
            <span style={{ fontSize: 12, color: '#10b981', fontWeight: 500 }}>Available for work</span>
          </div>

         
          <h1 className="anim-fade-up delay-1" style={{
            fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800,
            letterSpacing: '-2px', lineHeight: 1.05, marginBottom: 16,
          }}>
            Hi, I'm <br />
            <span className="violet-text">{data.name}</span>
          </h1>

          
          <div className="anim-fade-up delay-2" style={{ fontSize: 'clamp(18px, 3vw, 26px)', marginBottom: 24, height: 40, color: 'var(--text2)' }}>
            <span ref={typeRef} style={{ color: 'var(--cyan)', fontWeight: 500 }} />
            <span style={{ animation: 'blink 1s infinite', color: 'var(--violet)' }}>|</span>
          </div>

          
          <p className="anim-fade-up delay-3" style={{
            fontSize: 17, color: 'var(--text2)', lineHeight: 1.7,
            maxWidth: 520, marginBottom: 40,
          }}>{data.tagline}</p>

          
          <div className="anim-fade-up delay-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 64 }}>
            <button className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work →
            </button>
            <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub ↗
            </a>
            <a href={`mailto:${data.email}`} className="btn btn-outline">
              Let's Talk 💬
            </a>
          </div>

          
          <div className="anim-fade-up delay-5" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, auto)',
            gap: '0 40px', borderTop: '1px solid var(--border)',
            paddingTop: 32, width: 'fit-content',
          }}>
            {(data.stats || []).map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, fontFamily: 'Syne', background: 'linear-gradient(135deg, var(--violet), var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
