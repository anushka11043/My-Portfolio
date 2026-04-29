import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useScrollReveal } from './hooks/useAnimations';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

const Loader = () => (
  <div style={{
    position: 'fixed', inset: 0, background: 'var(--bg)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999,
  }}>
    <div style={{
      fontFamily: 'Syne', fontSize: 52, fontWeight: 800,
      background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      animation: 'pulse 1.2s ease-in-out infinite',
      marginBottom: 16,
    }}>AG</div>

    <div style={{ display: 'flex', gap: 6 }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--violet)',
          animation: `bounce 0.8s ease ${i * 0.15}s infinite alternate`,
        }} />
      ))}
    </div>

    <style>{`
      @keyframes bounce { to { transform: translateY(-12px); opacity: .4; } }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
    `}</style>
  </div>
);

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useScrollReveal(); 

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .reveal.anim-fade-left { transform: translateX(-28px); }
      .reveal.anim-fade-right { transform: translateX(28px); }
      .reveal.revealed { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);

    axios.get('/api/portfolio')
      .then(res => setData(res.data))
      .catch(() => {
        setData({
          personal: {
            name: 'Anushka Garg',
            role: 'Full Stack Developer',
            tagline: 'I build things for the web — from pixel to server.',
            about: "Hi! I'm Anushka Garg, a passionate Full Stack Developer who bridges elegant frontends with robust backends.",
            email: 'anushkagarg@gmail.com',
            github: 'https://github.com/anushka11043',
            linkedin: 'https://www.linkedin.com/in/anushka-garg-68353927a/',
            location: 'India',
            available: true,
          },

          skills: [
            { name:'React.js', level:90, category:'Frontend', icon:'⚛️' },
            { name:'JavaScript', level:92, category:'Frontend', icon:'🟨' },
            { name:'HTML & CSS', level:95, category:'Frontend', icon:'🎨' },
            { name:'Node.js', level:85, category:'Backend', icon:'🟢' },
            { name:'MongoDB', level:80, category:'Database', icon:'🍃' },
            { name:'SQL', level:78, category:'Database', icon:'🗄️' },
          ],

          projects: [
            { id:1, title:'EduElevate', description:'MERN-based course platform.', tech:['React','Node','MongoDB'], github:'#', live:'#' },
            { id:2, title:'Luxe Nails Website', description:'Frontend booking site.', tech:['React','Tailwind'], github:'#', live:'#' },
            { id:3, title:'Real-Time Chat App', description:'Socket.io chat system.', tech:['MERN','Socket.io'], github:'#', live:'#' },
          ],

          education: [
            {
              year:'2024–Present',
              degree:'Master of Computer Applications (MCA)',
              institution:'Bennett University',
              desc:'Focused on MERN stack and real-world projects.'
            },
            {
              year:'2021–2024',
              degree:'Bachelor of Computer Applications (BCA)',
              institution:'SD College of Management Studies',
              desc:'Strong foundation in programming and databases.'
            },
            
          ],
          stats: [
            { label:'Projects Built', value:'8+' },
             { label:'Technologies', value:'10+' },
            
           ],
        });
      })
      .finally(() => setTimeout(() => setLoading(false), 1200));
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      

      <Navbar name={data.personal.name} />
       <Hero data={{ ...data.personal, stats: data.stats }} />
      <About data={data.personal} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />

      
      <Education data={data.education} />

      <Contact data={data.personal} />
      <Footer name={data.personal.name} />
    </>
  );
}

export default App;