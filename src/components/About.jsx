import React from 'react';
import { aboutData } from '../data/portfolio';

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{aboutData.sectionLabel}</span>
          <h2 id="about-heading" className="section-heading">
            {aboutData.heading}
          </h2>
        </div>

        <div className="about-content">
          <p className="about-text">{aboutData.description}</p>
          <p className="about-highlight">{aboutData.highlight}</p>
        </div>
      </div>
    </section>
  );
}
