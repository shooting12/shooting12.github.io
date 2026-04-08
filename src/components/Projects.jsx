import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const allProjects = [
    {
      title: "Weakly Supervised Object Localization System",
      description: "Implemented a weakly supervised convolutional neural network (CNN) for object detection and classification, specifically building a deep detection network that localizes objects within images without requiring traditional bounding box annotations.",
      tags: ["Computer Vision", "Machine Learning", "PyTorch"],
      link: "#"
    },
    {
      title: "NASA Moon Ranger Project",
      description: "Develop the mission control software for the MoonRanger lunar rover whenever it is on the moon for a future private lunar NASA mission. Gathered requirements, designed the software architecture, and devised executed the quality plan.",
      tags: ["React"],
      link: "#"
    },
    {
      title: "Caching Proxy",
      description: "Built an HTTP proxy with POSIX threads and an LRU cache, reducing latency by 30% and developed a cache simulator.",
      tags: ["C", "POSIX", "LRU Cache"],
      link: "#"
    },
    {
      title: "Handwriting Recognition System",
      description: "Built a neural network in Python for handwriting recognition (75% accuracy) and later optimized it with a CNN using PyTorch (95% accuracy).",
      tags: ["Neural Networks", "PyTorch"],
      link: "#"
    },
    {
      title: "Augment Reality in Videos",
      description: "Implemented a real-time AR system that renders video onto moving targets using feature detection, matching, and warping, boosting FPS by 50% with multi-feature algorithms.",
      tags: ["AR", "Computer Vision", "Real-time", "Feature Detection"],
      link: "#"
    }
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const gridRef = useRef(null);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (gridRef.current) {
        const containerWidth = gridRef.current.clientWidth;
        const cardWidth = 350; // Match CSS base width
        const gap = 32; // 2rem = 32px
        // Calculate how many cards fit in one row
        const columns = Math.floor((containerWidth + gap) / (cardWidth + gap)) || 1;
        setItemsPerRow(columns);
      }
    };

    updateItemsPerRow();
    const observer = new ResizeObserver(updateItemsPerRow);
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Show only 1 row of projects (dynamic calculation) when collapsed
  const visibleProjects = isExpanded ? allProjects : allProjects.slice(0, itemsPerRow);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Selected Projects</span></h2>

        <div className="projects-grid" ref={gridRef}>
          {visibleProjects.map((project, idx) => (
            <div key={idx} className="glass-panel project-card animate-reveal">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"><Code size={20} /></a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="project-desc text-secondary">{project.description}</p>
              <div className="skills-wrap">
                {project.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > itemsPerRow && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              className="toggle-expand-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>View All Projects <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
