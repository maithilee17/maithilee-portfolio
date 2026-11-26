import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar({ onResumeRequest }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleResumeClick = (e) => {
    // Check if resume request handler is provided
    if (onResumeRequest) {
      onResumeRequest(e);
    }
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container navbar-container">
        <a href="#" className="nav-brand" aria-label="Maithilee Bhatkar Home">
          Maithilee Bhatkar.<span className="nav-brand-period">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
            className="btn btn-outline-nav"
            aria-label="View Resume PDF (opens in new tab)"
          >
            Resume
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" role="menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                role="menuitem"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                handleResumeClick(e);
                handleLinkClick();
              }}
              className="btn btn-secondary"
              role="menuitem"
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            >
              Resume
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
