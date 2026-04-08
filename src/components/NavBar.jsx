import React from 'react';
import './NavBar.css';

export default function NavBar() {
  const links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Media', href: '#media' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' }
  ];

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar glass-panel" style={{ transform: 'translateZ(0)' }}>
        {links.map((link) => (
          <a key={link.label} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
