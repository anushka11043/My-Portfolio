import { useEffect, useRef } from 'react';

// SCROLL
export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// ── TYPEWRITER ──
export const useTypewriter = (words, speed = 100, pause = 1800) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;
    let wordIdx = 0, charIdx = 0, deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIdx];
      if (!deleting) {
        el.current.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        el.current.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [words, speed, pause]);

  return el;
};