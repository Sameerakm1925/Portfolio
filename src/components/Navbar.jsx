import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      transition: 'all var(--transition-smooth)',
      background: scrolled || menuOpen ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Empty div for spacing balance */}
        <div />

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: '5px',
          }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 2rem 1.5rem',
          gap: '1.25rem',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
