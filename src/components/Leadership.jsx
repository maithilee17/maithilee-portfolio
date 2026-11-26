import React from 'react';
import { leadershipData } from '../data/portfolio';

export default function Leadership() {
  return (
    <section className="section leadership-section" id="leadership" aria-labelledby="leadership-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{leadershipData.sectionLabel}</span>
          <h2 id="leadership-heading" className="section-heading">
            {leadershipData.heading}
          </h2>
          <p className="section-supporting">{leadershipData.supportingText}</p>
        </div>

        <div className="timeline">
          {leadershipData.positions.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                  </div>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
