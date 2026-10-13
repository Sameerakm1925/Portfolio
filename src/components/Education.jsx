import React, { useEffect, useRef } from 'react';

const Education = () => {
  const educationList = [
    {
      institution: "California State University, Fullerton",
      location: "Fullerton, CA",
      degree: "Master of Science, Computer Science",
      gpa: "GPA: 3.8/4",
      period: "Aug 2024 – May 2026"
    },
    {
      institution: "Sir M Visvesvaraya Institute Of Technology",
      location: "Bangalore, India",
      degree: "Bachelor of Engineering, Information Science and Engineering",
      gpa: "GPA: 8.2/10",
      period: "Aug 2020 – July 2024"
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

    const cards = sectionRef.current.querySelectorAll('.edu-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Education
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
        {educationList.map((edu, index) => (
          <div key={index} className="glass-panel edu-card" style={{ 
            padding: '2.5rem', 
            position: 'relative',
            borderLeft: '4px solid var(--accent-secondary)',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: `${index * 0.2}s`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{edu.institution}</h3>
                <p className="font-mono" style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>{edu.degree}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{edu.gpa}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{edu.period}</p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{edu.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
