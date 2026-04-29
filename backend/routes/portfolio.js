const express = require('express');
const router = express.Router();

// GET /api/portfolio — portfolio ka saara data yahan se aata hai
router.get('/', (req, res) => {
  res.json({
    personal: {
      name: 'Anushka Garg',
      role: 'Full Stack Developer',
      tagline: 'I build things for the web — from pixel to server.',
      about: `Hi! I'm Anushka Garg, a passionate Full Stack Developer with a love for crafting seamless digital experiences. I bridge the gap between elegant frontends and robust backends, turning ideas into fully functional web applications. When I'm not coding, I'm exploring new technologies and contributing to open source.`,
      email: 'anushkagarg@gmail.com',
      github: 'https://github.com/anushkagarg',
      linkedin: 'https://linkedin.com/in/anushkagarg',
      location: 'India',
      available: true,
    },
    skills: [
      { name: 'React.js',     level: 90, category: 'Frontend', icon: '⚛️' },
      { name: 'JavaScript',   level: 92, category: 'Frontend', icon: '🟨' },
      { name: 'HTML & CSS',   level: 95, category: 'Frontend', icon: '🎨' },
      { name: 'Node.js',      level: 85, category: 'Backend',  icon: '🟢' },
      { name: 'PHP',          level: 75, category: 'Backend',  icon: '🐘' },
      { name: 'MongoDB',      level: 80, category: 'Database', icon: '🍃' },
      { name: 'SQL',          level: 78, category: 'Database', icon: '🗄️' },
      { name: 'REST APIs',    level: 88, category: 'Backend',  icon: '🔌' },
    ],
    projects: [
      {
        id: 1,
        title: 'Aarogya — AI Symptom Checker',
        description: 'Rural health app with Claude AI integration for symptom triage. Offline-capable, multilingual, with clinic finder.',
        tech: ['React', 'Node.js', 'Claude AI', 'MongoDB'],
        github: 'https://github.com/anushkagarg/aarogya',
        live: '#',
        color: '#10b981',
        icon: '🩺',
        featured: true,
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full stack shopping platform with cart, payment gateway, admin dashboard, and real-time inventory tracking.',
        tech: ['React', 'Node.js', 'MongoDB', 'SQL'],
        github: 'https://github.com/anushkagarg/ecommerce',
        live: '#',
        color: '#f59e0b',
        icon: '🛍️',
        featured: true,
      },
      {
        id: 3,
        title: 'Task Management App',
        description: 'Trello-like Kanban board with drag-and-drop, real-time updates, team collaboration and deadline tracking.',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/anushkagarg/taskboard',
        live: '#',
        color: '#8b5cf6',
        icon: '📋',
        featured: false,
      },
      {
        id: 4,
        title: 'Student Result Portal',
        description: 'PHP + SQL portal for school/college result management. Admin can upload marks, students can view with roll number.',
        tech: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/anushkagarg/result-portal',
        live: '#',
        color: '#ef4444',
        icon: '🎓',
        featured: false,
      },
      {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Real-time weather app with 7-day forecast, location search, animated weather icons and dark/light mode.',
        tech: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/anushkagarg/weather',
        live: '#',
        color: '#06b6d4',
        icon: '🌤️',
        featured: false,
      },
      {
        id: 6,
        title: 'Blog CMS',
        description: 'Content management system with rich text editor, image upload, tags, comments and SEO optimization.',
        tech: ['Node.js', 'MongoDB', 'React', 'HTML', 'CSS'],
        github: 'https://github.com/anushkagarg/blog-cms',
        live: '#',
        color: '#f97316',
        icon: '✍️',
        featured: false,
      },
    ],
    education: [
      {
        year: '2024 – Present',
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Bennett University',
        desc: 'Pursuing MCA with focus on full-stack development, MERN stack, and real-world project building.',
      },
      {
        year: '2023 – 2024',
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'SD College of Management Studies',
        desc: 'Completed BCA with strong foundation in programming, databases, and software development.',
      },
      
    ],
    stats: [
      { label: 'Projects Built', value: '8+' },
      { label: 'Technologies', value: '10+' },
      // { label: 'GitHub Commits', value: '500+' },
      // { label: 'Happy Clients', value: '10+' },
    ],
  });
});

module.exports = router;
