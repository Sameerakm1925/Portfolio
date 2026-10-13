import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Rapt.AI",
      location: "Santa Clara, CA",
      role: "Software Engineering Intern",
      period: "May 2025 – Sep 2025",
      bullets: [
        "Engineered scalable frontend Observer Tool, reducing navigation time by 40%.",
        "Integrated REST APIs to visualize real-time GPU metrics for high-fidelity observability.",
        "Optimized state-management logic, slashing load failures by 60%."
      ]
    },
    {
      company: "Xenovex Technologies",
      location: "Chennai, India",
      role: "Backend Developer Intern",
      period: "March 2023 – May 2023",
      bullets: [
        "Deployed 8+ RESTful APIs scaling state election portal to 20,000+ concurrent users.",
        "Optimized PostgreSQL queries, cutting execution time by 40%.",
        "Strengthened backend security and error-handling, ensuring 99.9% reliability."
      ]
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.exp-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Experience
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel exp-card" style={{ 
            padding: '2.5rem', 
            position: 'relative',
            borderLeft: '4px solid var(--accent-primary)',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: `${index * 0.2}s`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{exp.company}</h3>
                <p className="font-mono" style={{ color: 'var(--accent-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>{exp.role}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{exp.period}</p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{exp.location}</p>
              </div>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={{ 
                  position: 'relative', 
                  paddingLeft: '1.5rem', 
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: '0.6rem', 
                    width: '6px', 
                    height: '6px', 
                    background: 'var(--accent-primary)', 
                    borderRadius: '50%' 
                  }}></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
