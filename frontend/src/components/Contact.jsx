import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ data }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); 

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '13px 16px', fontFamily: 'DM Sans',
    fontSize: 14, color: 'var(--text)', outline: 'none', marginBottom: 14,
    transition: 'border-color .2s',
  };

  const onFocus = e => e.target.style.borderColor = 'var(--violet)';
  const onBlur  = e => e.target.style.borderColor = 'var(--border)';

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal anim-fade-up">
          <div style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--violet)', fontWeight: 600, marginBottom: 12 }}>
            Get In Touch
          </div>
          <h2 className="section-heading">Let's <span className="violet-text">Connect</span></h2>
          <p className="section-sub">Have a project in mind? Let's build something amazing together.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40, alignItems: 'start' }}>

          {/* Left Info */}
          <div className="reveal anim-fade-left">
            <h3 style={{ fontFamily: 'Syne', fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>
              Always open to new opportunities
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.75, marginBottom: 32 }}>
              Whether it's a freelance project, full-time role, or just a chat about tech — my inbox is always open. I'll try to get back within 24 hours!
            </p>

            {[
              { icon: '📧', label: 'Email', value: data?.email || 'anushka1104.ag@gmail.com' },
              { icon: '📍', label: 'Location', value: data?.location || 'India' },
              { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/anushkagarg' },
              { icon: '🐙', label: 'GitHub',   value: 'github.com/anushkagarg' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'rgba(167,139,250,0.1)',
                  border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 18, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Form */}
          <div className="reveal anim-fade-right card" style={{ padding: 32 }}>
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 14px' }}>
                <div>
                  <label style={{ fontSize: 12, color: 'var(--text3)', display: 'block', marginBottom: 6 }}>Your Name</label>
                  <input name="name" value={form.name} onChange={handle} required
                    placeholder="Anushka Garg" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: 'var(--text3)', display: 'block', marginBottom: 6 }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required
                    placeholder="hello@email.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              <label style={{ fontSize: 12, color: 'var(--text3)', display: 'block', marginBottom: 6 }}>Subject</label>
              <input name="subject" value={form.subject} onChange={handle}
                placeholder="Project collaboration" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />

              <label style={{ fontSize: 12, color: 'var(--text3)', display: 'block', marginBottom: 6 }}>Message</label>
              <textarea name="message" value={form.message} onChange={handle} required rows={5}
                placeholder="Hi Anushka, I have an exciting project..."
                style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }}
                onFocus={onFocus} onBlur={onBlur} />

              {status === 'success' && (
                <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: '#10b981', marginBottom: 16 }}>
                  ✅ Message sent successfully! I'll reply soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: '#ef4444', marginBottom: 16 }}>
                  ❌ Failed to send. Please email me directly.
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                disabled={status === 'sending'}>
                {status === 'sending' ? '⏳ Sending...' : 'Send Message ✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact .container > div:last-child { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
