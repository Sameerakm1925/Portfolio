import React, { useEffect, useRef } from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Courtroom Chaos",
      subtitle: "Runner-Up & Judges' Favorite – Google DeepMind Hackathon @ UCLA",
      description: "Live multiplayer courtroom game powered by Gemini Live API where an AI judge listens, interrupts, and delivers real-time scored verdicts.",
      tech: "WebSockets, Speech-to-Text, Gemini Live, Multi-agent LLM inference",
      url: "https://github.com/Sameerakm1925/courtroom-chaos"
    },
    {
      title: "TutorLLM",
      subtitle: "AI-Driven Personalized E-Learning Platform",
      description: "Full-stack AI e-learning platform generating personalized curricula with automated YouTube video synthesis in under 15 seconds.",
      tech: "MERN Stack, Llama 3.1, Groq API, Redis, Clean Architecture",
      url: "https://github.com/Sameerakm1925/TutorLLM"
    },
    {
      title: "Language Translation Tool",
      subtitle: "Real-time Asynchronous NLP System",
      description: "NLP system supporting 100+ languages with automatic detection, STT, and TTS pipelines to improve accessibility.",
      tech: "Python, NLP, Speech-to-Text, Text-to-Speech",
      url: "https://github.com/Sameerakm1925/Language-Translation"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = entry.target.dataset.targetTransform;
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.proj-card');
    cards.forEach((card) => {
      // Store the target transform in a data attribute
      card.dataset.targetTransform = card.style.transform;
      // Reset transform for animation
      card.style.transform = `translateY(60px) ${card.style.transform}`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel magic-tap proj-card"
            style={{ 
              position: 'sticky',
              top: `calc(100px + ${index * 30}px)`,
              zIndex: index + 1,
              display: 'flex', 
              flexDirection: 'column', 
              padding: '3rem',
              textDecoration: 'none',
              transform: `scale(${1 - (projects.length - 1 - index) * 0.02})`, // Stack scaling effect
              opacity: 0,
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.3s ease',
              marginBottom: index === projects.length - 1 ? '0' : '4rem',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              // We don't overwrite transform here to avoid breaking the sticky stack effect, 
              // but we add a subtle glow.
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  background: 'rgba(255, 90, 95, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <FaCode size={28} className="text-gradient-red" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{project.title}</h3>
                  <p className="font-mono" style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{project.subtitle}</p>
                </div>
              </div>
              <div style={{ 
                background: 'var(--bg-primary)', 
                padding: '0.75rem', 
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.05)',
                color: 'var(--text-secondary)',
                transition: 'background 0.3s'
              }} className="github-icon-container">
                <FaGithub size={24} />
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7, maxWidth: '800px' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>TECH:</span>
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem' }}>{project.tech}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
