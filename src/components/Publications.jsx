import React from 'react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import fingerDetectionPdf from '../assets/Paper_Finger Detection for Multi-Touch Tabletop Display System.pdf';
import mapTouringPdf from '../assets/Paper_Multi-Display Map Touring with Tangible Widget_ACMMM10.pdf';
import nprFacePdf from '../assets/Paper_NPRface_CVGIP09.pdf';
import './Publications.css';

export default function Publications() {
  const pubs = [
    {
      title: "Finger Detection for Multi-Touch Tabletop Display System",
      venue: "National Taiwan University Thesis",
      year: "2010",
      authors: "Shooting Chuang, et al.",
      link: fingerDetectionPdf
    },
    {
      title: "Multi-Display Map Touring with Tangible Widget",
      venue: "ACM Multimedia",
      year: "2010",
      authors: "Developed the tangible widget recognition and finger detection system",
      link: mapTouringPdf
    },
    {
      title: "Non-Photorealistic Rendering Of Stylish, Distinctive Faces",
      venue: "IPPR Conference on Computer Vision, Graphics, and Image Processing",
      year: "2009",
      authors: "Shooting Chuang, et al.",
      link: nprFacePdf
    }
  ];

  return (
    <section className="section" id="publications">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Publications</span></h2>

        <div className="pub-list">
          {pubs.map((pub, idx) => (
            <div key={idx} className="glass-panel pub-card">
              <div className="pub-icon"><BookOpen size={28} /></div>
              <div className="pub-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.6rem', width: '100%' }}>
                  <h3 style={{ margin: 0 }}>{pub.title}</h3>
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-pdf-link">
                      <FileText size={18} />
                    </a>
                  )}
                </div>
                <p className="pub-authors text-secondary" style={{ marginTop: '0.5rem' }}>{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-venue">{pub.venue}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
