import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Experience />
        <Education />
        <Projects />
        <ResumeSection />
      </main>
      <footer style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Sameera KM. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
