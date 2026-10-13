import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all var(--transition-smooth)',
      background: scrolled ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#experience" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Experience</a>
          <a href="#education" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Education</a>
          <a href="#projects" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Projects</a>
          <a href="#resume" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
