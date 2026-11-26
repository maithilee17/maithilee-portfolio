import React from 'react';
import { ArrowUpRight, Download, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, heroData } from '../data/portfolio';

export default function Hero({ onResumeRequest }) {
  const { socialLinks } = personalInfo;

  return (
    <section className="section hero-section" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-content">
          {/* Availability Indicator */}
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true"></span>
            <span>{personalInfo.availabilityText}</span>
          </div>

          {/* Short Greeting */}
          <p className="hero-intro">{heroData.intro}</p>

          {/* Main Hero Headings */}
          <h1 className="hero-title">
            {heroData.headlinePrimary}
            <span className="hero-title-accent">{heroData.headlineAccent}</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-description">{heroData.description}</p>

          {/* Call to Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              onClick={onResumeRequest}
              className="btn btn-secondary"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>

          {/* Minimal Social Icons */}
          <div className="hero-socials" aria-label="Social Profiles">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LeetCode Profile"
            >
              <Code2 size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.email.url}
              className="social-link"
              aria-label="Send Email to Maithilee"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
