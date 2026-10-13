import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeSection = () => {
  return (
    <section id="resume" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Resume
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
      </div>
      
      <div className="glass-panel" style={{ 
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        <div style={{ width: '100%', height: '80vh', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
          <iframe 
            src="/resume.pdf" 
            title="Resume"
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        </div>

        <a href="/resume.pdf" download="Sameera_KM_Resume.pdf" style={{
          background: 'var(--text-primary)',
          color: 'var(--bg-secondary)',
          padding: '1rem 2rem',
          borderRadius: '999px',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: 'var(--shadow-sm)',
          transition: 'transform var(--transition-fast)'
        }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
           onMouseOut={e => e.currentTarget.style.transform = 'none'}>
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
