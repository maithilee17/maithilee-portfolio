import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{educationData.sectionLabel}</span>
          <h2 id="education-heading" className="section-heading">
            {educationData.heading}
          </h2>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-brand">
              <div className="education-icon-wrapper" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              <div className="education-meta">
                <h3>{educationData.institution}</h3>
                <p className="education-sub">
                  {educationData.university} • {educationData.degree}
                </p>
              </div>
            </div>
            <span className="education-dates">{educationData.duration}</span>
          </div>

          {/* Distinguish Minor & CGPA pills */}
          <div className="education-details">
            <span className="detail-pill detail-pill-minor">
              Minor: {educationData.minor}
            </span>
            <span className="detail-pill detail-pill-cgpa">
              CGPA: {educationData.cgpa}
            </span>
          </div>

          {/* Relevant Coursework */}
          <div className="coursework-section">
            <h4 className="coursework-title">Relevant Coursework</h4>
            <div className="coursework-tags">
              {educationData.coursework.map((course) => (
                <span key={course} className="tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
