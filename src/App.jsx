import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievement from './components/Achievement';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X } from 'lucide-react';
import { personalInfo } from './data/portfolio';
import './App.css';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  // Gracefully handles resume opening/download when resume.pdf has not yet been placed
  const handleResumeRequest = async (e) => {
    try {
      const response = await fetch(personalInfo.resumePath, { method: 'HEAD' });
      if (!response.ok) {
        e.preventDefault();
        setToastMessage(
          'Resume PDF will be available here soon. Place resume.pdf in the public/ folder to enable direct viewing and downloads.'
        );
        setTimeout(() => setToastMessage(null), 5000);
      }
    } catch {
      e.preventDefault();
      setToastMessage(
        'Resume PDF will be available here soon. Place resume.pdf in the public/ folder to enable direct viewing and downloads.'
      );
      setTimeout(() => setToastMessage(null), 5000);
    }
  };

  return (
    <div className="app">
      <Navbar onResumeRequest={handleResumeRequest} />
      <main id="main-content">
        <Hero onResumeRequest={handleResumeRequest} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievement />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      {/* Graceful Toast Alert */}
      {toastMessage && (
        <aside className="toast-notice" role="status" aria-live="polite">
          <span>{toastMessage}</span>
          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setToastMessage(null)}
            aria-label="Dismiss message"
          >
            <X size={16} />
          </button>
        </aside>
      )}
    </div>
  );
}
