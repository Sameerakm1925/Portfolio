import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const contactRef = useRef(null);
  const fullText = "Master's Graduate in Computer Science";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setShowEmail(false);
        setShowPhone(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: '6rem'
    }}>
      {/* Background gradients for light theme */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--accent-primary-glow) 0%, transparent 60%)',
        filter: 'blur(80px)',
        zIndex: -1,
        opacity: 0.6
      }}></div>
      
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        flexWrap: 'wrap-reverse'
      }}>
        
        {/* Text Content */}
        <div className="animate-slide-up" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text-primary)', margin: 0, paddingBottom: '0.5rem' }}>
            <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0' }}>Hi, I'm</span>
            <span className="text-gradient-red">Sameera KM</span>
          </h1>

          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text-secondary)' }}>
            I build <span className="text-gradient">scalable</span> systems &amp; AI-driven platforms.
          </h2>

          <div style={{ minHeight: '32px' }}>
            <span className="font-mono" style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
              &gt; {text}<span style={{ animation: 'blink-caret .75s step-end infinite', borderRight: '2px solid var(--accent-primary)' }}></span>
            </span>
          </div>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '560px',
            lineHeight: 1.7
          }}>
            I recently graduated with a Master's in Computer Science. I specialize in developing robust software architectures, real-time data pipelines, and intelligent AI applications that perform in high-traffic environments. 
          </p>

          <div style={{ marginTop: '0.5rem', background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>OPEN TO ROLES:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Software Engineer", "Full Stack Developer", "Backend Engineer", "Data Engineer", "AI/ML Engineer"].map(role => (
                <span key={role} style={{ background: 'rgba(0,166,153,0.1)', color: 'var(--accent-secondary)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600 }}>
                  {role}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Photo & Socials Container */}
        <div className="animate-slide-up delay-200" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          <div style={{
            position: 'relative',
            width: 'clamp(280px, 30vw, 380px)',
            aspectRatio: '1/1',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '8px solid var(--bg-secondary)'
          }}>
            <img 
              src="/avatar.jpg" 
              alt="Sameera KM" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transform: 'scale(2.2) translate(-4%, -2%)' // Centered and adjusted up slightly
              }} 
            />
          </div>

          <div ref={contactRef} style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Sameerakm1925" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.2s' }} onMouseOver={e => {e.currentTarget.style.color = '#333'; e.currentTarget.style.transform = 'translateY(-2px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
              <FaGithub size={24} />
            </a>

            <div style={{ position: 'relative' }}>
              <button onClick={() => { setShowEmail(!showEmail); setShowPhone(false); }} className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.2s', border: 'none', background: 'var(--bg-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
                <FaEnvelope size={24} />
              </button>
              {showEmail && (
                <div className="glass-panel animate-slide-up" style={{ position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', padding: '0.75rem 1rem', borderRadius: '8px', zIndex: 10, whiteSpace: 'nowrap', boxShadow: 'var(--shadow-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', userSelect: 'all' }}>sameerakm02@gmail.com</span>
                  <div style={{ width: '1px', height: '14px', background: 'rgba(0,0,0,0.1)' }}></div>
                  <a href="mailto:sameerakm02@gmail.com" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'none' }}>Send Email</a>
                </div>
              )}
            </div>
            
            <div style={{ position: 'relative' }}>
              <button onClick={() => { setShowPhone(!showPhone); setShowEmail(false); }} className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.2s', border: 'none', background: 'var(--bg-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-secondary)'; e.currentTarget.style.transform = 'translateY(-2px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'}}>
                <FaPhone size={24} />
              </button>
              {showPhone && (
                <div className="glass-panel animate-slide-up" style={{ position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', padding: '0.75rem 1rem', borderRadius: '8px', zIndex: 10, whiteSpace: 'nowrap', boxShadow: 'var(--shadow-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', userSelect: 'all' }}>(714) 519-7526</span>
                  <div style={{ width: '1px', height: '14px', background: 'rgba(0,0,0,0.1)' }}></div>
                  <a href="tel:+17145197526" style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 600, textDecoration: 'none' }}>Call</a>
                </div>
              )}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
