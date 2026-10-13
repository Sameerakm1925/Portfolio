import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

const LinksSection = () => {
  const links = [
    {
      title: "GitHub",
      description: "Check out my open-source projects and code.",
      icon: <FaGithub size={32} className="text-gradient" />,
      url: "https://github.com/Sameerakm1925"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and view my career history.",
      icon: <FaLinkedin size={32} className="text-gradient" />,
      url: "https://www.linkedin.com/in/sameera-km-576135286/"
    },
    {
      title: "Resume",
      description: "Download my resume to see my full background.",
      icon: <FaFileAlt size={32} className="text-gradient" />,
      url: "#" // Added placeholder as per request context
    }
  ];

  return (
    <section className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {links.map((link, index) => (
          <a key={index} href={link.url} target={link.url !== '#' ? "_blank" : undefined} rel="noopener noreferrer" 
             className="glass-panel"
             style={{ 
               padding: '2rem', 
               display: 'flex', 
               flexDirection: 'column', 
               gap: '1rem',
               position: 'relative',
               overflow: 'hidden',
               transition: 'transform var(--transition-smooth), border-color var(--transition-fast)'
             }}
             onMouseOver={e => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.3)';
             }}
             onMouseOut={e => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
             }}>
            <div style={{
              position: 'absolute',
              top: 0, right: 0,
              padding: '1rem',
              opacity: 0.3
            }}>
              <FaExternalLinkAlt size={20} />
            </div>
            {link.icon}
            <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{link.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{link.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
