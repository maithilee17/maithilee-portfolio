import React from 'react';
import { FileBadge, ArrowUpRight } from 'lucide-react';
import { certificationsData } from '../data/portfolio';

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications" aria-labelledby="certifications-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{certificationsData.sectionLabel}</span>
          <h2 id="certifications-heading" className="section-heading">
            {certificationsData.heading}
          </h2>
        </div>

        <div className="certifications-grid">
          {certificationsData.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-top">
                <FileBadge size={22} className="cert-icon" aria-hidden="true" />
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-org">{cert.organization}</p>
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-view-link"
                  aria-label={`View certificate for ${cert.title} (opens in new tab)`}
                >
                  View certificate
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
