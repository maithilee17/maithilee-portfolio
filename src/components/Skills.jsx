import React from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Sparkles,
  Wrench,
  Cpu,
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

const iconMap = {
  Code,
  Layout,
  Server,
  Database,
  Sparkles,
  Wrench,
  Cpu,
};

export default function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{skillsData.sectionLabel}</span>
          <h2 id="skills-heading" className="section-heading">
            {skillsData.heading}
          </h2>
          <p className="section-supporting">{skillsData.supportingText}</p>
        </div>

        <div className="skills-grid">
          {skillsData.categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <div key={category.id} className="skill-category-card">
                <div className="category-header">
                  <IconComponent size={20} className="category-icon" aria-hidden="true" />
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-tags-container">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
