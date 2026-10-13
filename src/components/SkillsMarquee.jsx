import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaGithub, FaTerminal } from 'react-icons/fa';

const SkillsMarquee = () => {
  const skills = [
    { name: "Java", icon: <FaJava color="#5382a1" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "TypeScript", icon: <FaTerminal color="#3178c6" /> },
    { name: "React.js", icon: <FaReact color="#61dafb" /> },
    { name: "Next.js", icon: <FaReact color="#000000" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Docker", icon: <FaDocker color="#2496ed" /> },
    { name: "Kubernetes", icon: <FaDatabase color="#326ce5" /> },
    { name: "PostgreSQL", icon: <FaDatabase color="#336791" /> },
    { name: "MongoDB", icon: <FaDatabase color="#47A248" /> },
    { name: "Git", icon: <FaGithub color="#f34f29" /> }
  ];

  return (
    <div className="marquee-container" style={{ margin: '2rem 0 6rem 0' }}>
      <div className="marquee-content">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            opacity: 0.8,
            transition: 'opacity var(--transition-fast)'
          }}
          onMouseOver={e => e.currentTarget.style.opacity = 1}
          onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
            <span style={{ fontSize: '1.75rem', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
