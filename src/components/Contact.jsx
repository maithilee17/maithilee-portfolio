import React, { useState } from 'react';
import { Mail, ArrowUpRight, Code2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { contactData, personalInfo } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { socialLinks } = personalInfo;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-box">
          <span className="section-label">{contactData.sectionLabel}</span>
          <h2 id="contact-heading" className="section-heading">
            {contactData.heading}
          </h2>
          <p className="section-supporting">{contactData.description}</p>

          <div className="contact-actions">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              aria-label={`Send an email to ${personalInfo.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              <span>{contactData.ctaText}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-email-link"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="social-link"
                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? <Check size={14} color="#16A34A" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="contact-socials" aria-label="Connect on Social Media">
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
          </div>
        </div>
      </div>
    </section>
  );
}
