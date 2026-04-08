import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';
import ntuLogoImg from '../assets/logo_ntu.png';

const CmuIcon = () => (
  <svg viewBox="0 0 50 20" width="55" height="22" fill="#C41230" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="16" fontFamily="Georgia, serif" fontSize="18" fontWeight="800" letterSpacing="0.5">CMU</text>
  </svg>
);

const NtuIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={ntuLogoImg} alt="NTU Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Education</span></h2>

        <div className="timeline">
          {/* Education - CMU */}
          <div className="timeline-item">
            <div className="timeline-icon"><GraduationCap size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <h3 style={{ margin: 0 }}>Carnegie Mellon University</h3>
                  <CmuIcon />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span className="timeline-date"><MapPin size={16} /> Pittsburgh, PA</span>
                  <span className="timeline-date"><Calendar size={16} /> Aug 2021 - Dec 2022</span>
                </div>
              </div>
              <div className="company-org-group">
                <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Master of Software Engineering</h4>
                <div className="group-separator"></div>
                <h5 className="timeline-team">
                  School of Computer Science
                </h5>
              </div>
              <p className="timeline-text text-secondary">
                Focused on software architecture, scalable systems, and engineering management.
              </p>
              <div className="skills-wrap">
                <span className="badge">Machine Learning</span>
                <span className="badge">Computer Vision</span>
                <span className="badge">Architecture Design</span>
              </div>
            </div>
          </div>

          {isExpanded && (
            <>
              {/* Education - NTU */}
              <div className="timeline-item">
                <div className="timeline-icon"><GraduationCap size={24} /></div>
                <div className="glass-panel timeline-content">
                  <div className="timeline-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <h3 style={{ margin: 0 }}>National Taiwan University</h3>
                      <NtuIcon />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span className="timeline-date"><MapPin size={16} /> Taipei, Taiwan</span>
                      <span className="timeline-date"><Calendar size={16} /> Sep 2008 - Jun 2010</span>
                    </div>
                  </div>
                  <div className="company-org-group">
                    <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Master of Science</h4>
                    <div className="group-separator"></div>
                    <h5 className="timeline-team">
                      College of Electrical Engineering & Computer Science
                    </h5>
                  </div>
                  <p className="timeline-text text-secondary">
                    Specialized in image and vision processing; graduated ranked 3rd in the cohort.
                  </p>
                  <div className="skills-wrap">
                    <span className="badge">Image Processing</span>
                    <span className="badge">Pattern Recognition</span>
                    <span className="badge">Digital Visual Effect</span>
                    <span className="badge">Computer Graphics</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            className="toggle-expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View Past Education <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
