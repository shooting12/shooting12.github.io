import React, { useEffect, useState } from 'react';
import './SideNav.css';

const sections = [
  { id: 'hero', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'media', label: 'Media' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' }
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`side-nav-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Scroll to ${section.label}`}
        >
          <span className="side-nav-dot"></span>
          <span className="side-nav-label text-secondary">{section.label}</span>
        </button>
      ))}
    </div>
  );
}
