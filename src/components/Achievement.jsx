import React from 'react';
import { Trophy } from 'lucide-react';
import { achievementData } from '../data/portfolio';

export default function Achievement() {
  const { achievement } = achievementData;

  return (
    <section className="section achievement-section" id="achievement" aria-labelledby="achievement-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{achievementData.sectionLabel}</span>
          <h2 id="achievement-heading" className="section-heading">
            {achievementData.heading}
          </h2>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon-wrapper" aria-hidden="true">
            <Trophy size={26} />
          </div>

          <div className="achievement-info">
            <div className="achievement-badge-row">
              <h3 className="achievement-title">{achievement.title}</h3>
              <span className="achievement-date">{achievement.date}</span>
            </div>
            <p className="achievement-institution">{achievement.institution}</p>
            <p className="achievement-desc">{achievement.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
