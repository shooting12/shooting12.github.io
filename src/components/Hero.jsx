import React from 'react';
import { Code, User, Mail, MapPin, FileText, GraduationCap } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="bg-gradient-glow" style={{ top: '10%', left: '20%' }}></div>
      <div className="bg-gradient-glow" style={{ top: '40%', right: '10%', animationDelay: '1s' }}></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name text-gradient">Shooting Chuang</h1>
          <h3 className="title" style={{ marginBottom: '0.5rem' }}>Senior Software Engineer at Meta</h3>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', textAlign: 'left' }}>
            <GraduationCap size={20} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
            <span style={{ fontSize: '1rem', fontWeight: 500, lineHeight: '1.4' }}>
              M.S. in School of Computer Science, <span className="text-gradient">Carnegie Mellon University</span>
            </span>
          </div>

          <p className="description text-secondary">
            Specializing in Horizon OS platform development. Passionate about building robust, scalable
            systems and elegant user interfaces for the next generation of computing.
          </p>

          <div className="location">
            <MapPin size={18} />
            <span>San Francisco Bay Area</span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/suting-chuang/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="LinkedIn">
              <User size={24} />
            </a>
            <a href="mailto:shooting729@gmail.com" className="social-icon" data-tooltip="Email">
              <Mail size={24} />
            </a>
            <a href="https://github.com/shooting12" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="GitHub">
              <Code size={24} />
            </a>
            <a href="https://drive.google.com/file/d/1vydwiupIZbbnBua608r5BS6ElIn_EKOT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="Resume">
              <FileText size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-float">
          <div className="glass-panel image-panel">
            <img src={profileImg} alt="Shooting Chuang" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
