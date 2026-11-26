import React from 'react';
import { ArrowUp } from 'lucide-react';
import { footerData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-left">
          <p>{footerData.copyright}</p>
        </div>

        <div className="footer-right">
          <p>{footerData.tagline}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll back to top of page"
            title="Scroll to top"
          >
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
