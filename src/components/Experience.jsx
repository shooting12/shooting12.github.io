import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';
import auroraLogoImg from '../assets/logo_aurora.png';
import mtkLogoImg from '../assets/logo_mtk.svg';
import metaLogoImg from '../assets/logo_meta.svg';
import ntuLogoImg from '../assets/logo_ntu.png';

const MetaIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={metaLogoImg} alt="Meta Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

const AuroraIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={auroraLogoImg} alt="Aurora Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

const MtkIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '22px' }}>
    <img src={mtkLogoImg} alt="MediaTek Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

const NtuIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>
    <img src={ntuLogoImg} alt="NTU Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
  </div>
);

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Experience</span></h2>

        <div className="timeline">
          {/* Work Experience - Meta */}
          <div className="timeline-item">
            <div className="timeline-icon"><Briefcase size={24} /></div>
            <div className="glass-panel timeline-content">
              <div className="timeline-header">
                <h3>Senior Software Engineer</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span className="timeline-date"><MapPin size={16} /> Burlingame, CA</span>
                  <span className="timeline-date"><Calendar size={16} /> Nov 2023 - Present</span>
                </div>
              </div>
              <div className="company-org-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Meta</h4>
                  <MetaIcon />
                </div>
                <div className="group-separator"></div>
                <h5 className="timeline-team">
                  Reality Labs — Spatial Extensions
                </h5>
              </div>
              <p className="timeline-text text-secondary">
                Specializing in Horizon OS platform development. Leading technical initiatives to improve platform
                performance and building robust systems for the next generation of computing.
              </p>
              <div className="skills-wrap">
                <span className="badge">VR / AR</span>
                <span className="badge">Horizon OS</span>
                <span className="badge">Platform Engineering</span>
                <span className="badge">Android</span>
                <span className="badge">C++</span>
                <span className="badge">Java</span>
              </div>
            </div>
          </div>

          {isExpanded && (
            <>
              {/* Work Experience - Aurora */}
              <div className="timeline-item">
                <div className="timeline-icon"><Briefcase size={24} /></div>
                <div className="glass-panel timeline-content">
                  <div className="timeline-header">
                    <h3>Software Engineer</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span className="timeline-date"><MapPin size={16} /> Mountain View, CA</span>
                      <span className="timeline-date"><Calendar size={16} /> Mar 2023 - Oct 2023</span>
                    </div>
                  </div>
                  <div className="company-org-group">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>Aurora</h4>
                      <AuroraIcon />
                    </div>
                    <div className="group-separator"></div>
                    <h5 className="timeline-team">
                      Perception Simulation
                    </h5>
                  </div>
                  <p className="timeline-text text-secondary" style={{ marginBottom: "1rem" }}>
                    Optimized perception simulation by developing outlier detection for vehicle trajectories, significantly
                    boosting path prediction robustness. Also engineered 3D scene projection pipelines from simulated LiDAR/Radar data, enabling high-fidelity environmental modeling to validate safety-critical autonomous routing.
                  </p>
                  <div className="skills-wrap">
                    <span className="badge">Perception</span>
                    <span className="badge">Simulation</span>
                    <span className="badge">Python</span>
                    <span className="badge">LiDAR / Radar</span>
                  </div>
                </div>
              </div>

              {/* Work Experience - MediaTek */}
              <div className="timeline-item">
                <div className="timeline-icon"><Briefcase size={24} /></div>
                <div className="glass-panel timeline-content">
                  <div className="timeline-header">
                    <h3>Software Engineer</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span className="timeline-date"><MapPin size={16} /> Taipei, Taiwan</span>
                      <span className="timeline-date"><Calendar size={16} /> Jan 2012 - Mar 2021</span>
                    </div>
                  </div>
                  <div className="company-org-group">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>MediaTek</h4>
                      <MtkIcon />
                    </div>
                    <div className="group-separator"></div>
                    <h5 className="timeline-team">
                      Android Framework
                    </h5>
                  </div>
                  <p className="timeline-text text-secondary" style={{ marginBottom: "1rem" }}>
                    Specializing in Android frameworks and system architecture. Led 20+ member cross-functional teams to deliver complex solutions like Wi-Fi Display and Camera Middleware for global manufacturers. Expertise lies in resolving critical bottlenecks: reduced peak memory usage by 50%, increased FPS by 10%, and earned an Innovative Patent Award for an OpenGL/C++ caching service that boosted UI rendering by 75%.
                  </p>
                  <div className="skills-wrap">
                    <span className="badge">C / C++</span>
                    <span className="badge">Java</span>
                    <span className="badge">Android</span>
                    <span className="badge">UI rendering</span>
                    <span className="badge">Camera Middleware</span>
                    <span className="badge">Embedded Systems</span>
                  </div>
                </div>
              </div>

              {/* Work Experience - NTU Research Assistant */}
              <div className="timeline-item">
                <div className="timeline-icon"><Briefcase size={24} /></div>
                <div className="glass-panel timeline-content">
                  <div className="timeline-header">
                    <h3>Research Assistant</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span className="timeline-date"><MapPin size={16} /> Taipei, Taiwan</span>
                      <span className="timeline-date"><Calendar size={16} /> Sep 2008 - Jun 2010</span>
                    </div>
                  </div>
                  <div className="company-org-group">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h4 className="timeline-subtitle text-gradient" style={{ margin: 0 }}>National Taiwan University</h4>
                      <NtuIcon />
                    </div>
                    <div className="group-separator"></div>
                    <h5 className="timeline-team">
                      Image and Vision Lab
                    </h5>
                  </div>
                  <p className="timeline-text text-secondary" style={{ marginBottom: "1rem" }}>
                    Dedicated to image processing and computer vision, securing 1st place in the Utechzone Machine Vision Prize. Expertise spans algorithm development and practical implementation, with core research in multi-touch finger detection, tangible widget recognition, and non-photorealistic facial rendering. These technical contributions were published in prominent conferences. Proven ability to translate advanced vision algorithms into real-world interactive applications, successfully delivering large-scale visual systems for the National Palace Museum's Virtual Museum Exhibition and the NTU Azalea Festival.
                  </p>
                  <div className="skills-wrap">
                    <span className="badge">Image Processing</span>
                    <span className="badge">Object Detection</span>
                    <span className="badge">Computer Vision</span>
                    <span className="badge">Algorithm Design</span>
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
              <>View Past Experience <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
