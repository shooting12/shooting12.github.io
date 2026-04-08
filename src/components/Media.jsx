import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import './Media.css';

const videos = [
  {
    id: 'GJLwgeU9Dho',
    title: 'Paintings and Calligraphies Interactive Table',
    description: 'Exhibited at Taiwan National Palace Museum'
  },
  {
    id: 'mok0lmBNsfk',
    title: 'Interactive Multimedia Showcase',
    description: 'Reported by Taiwan CTV News'
  },
  {
    id: 'GgK5vxKdQcA',
    title: 'Multi Display Map Touring with Tangible Widget',
    description: 'Featured System in ACM Multimedia'
  }
];

export default function Media() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isApiReady, setIsApiReady] = useState(!!window.YT);
  const playerRef = useRef(null);
  const playerTargetRef = useRef(null);

  const activeVideo = videos[activeIndex];

  useEffect(() => {
    // Load YouTube IFrame API script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Listener for API ready
      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else {
      setIsApiReady(true);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Initialize player as soon as possible (Pre-mounting)
  useEffect(() => {
    if (isApiReady && playerTargetRef.current && !playerRef.current) {
      playerRef.current = new window.YT.Player(playerTargetRef.current, {
        videoId: activeVideo.id,
        playerVars: {
          autoplay: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 1
        },
        events: {
          onReady: () => {
            // Player is now ready for synchronous playVideo() calls
          }
        }
      });
    }
  }, [isApiReady]);

  const handleVideoSwitch = (index) => {
    setActiveIndex(index);
    setIsPlaying(false);
    
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(videos[index].id);
      playerRef.current.pauseVideo();
    }
  };

  const handlePlay = () => {
    // ESSENTIAL: Synchronous call within the user interaction tick for mobile
    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    } else {
      // Fallback if API or player not ready yet
      setIsPlaying(true);
    }
  };

  return (
    <section className="section" id="media">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Featured Media</span></h2>

        <div className="media-gallery animate-reveal">
          <div className="glass-panel media-card focus-card">
            <div className="video-responsive shadowed-box">
              {/* THE PLAYER CONTAINER IS PERMANENTLY IN THE DOM (Pre-mounted) */}
              <div 
                className={`player-wrapper ${isPlaying ? 'visible' : 'hidden'}`}
                style={{ 
                  visibility: isPlaying ? 'visible' : 'hidden',
                  opacity: isPlaying ? 1 : 0,
                  zIndex: 1
                }}
              >
                <div ref={playerTargetRef}></div>
              </div>

              {/* THE THUMBNAIL OVERLAY COVERS THE PLAYER */}
              {!isPlaying && (
                <div 
                  className="video-thumbnail-container" 
                  onClick={handlePlay}
                  style={{ zIndex: 10 }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                    alt={activeVideo.title}
                    className="video-thumbnail"
                  />
                  <div className="play-button-overlay">
                    <div className="play-button-circle">
                      <Play fill="white" stroke="white" strokeWidth={0} size={28} className="play-icon" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="media-info">
              <h3>{activeVideo.title}</h3>
              <p className="text-secondary">{activeVideo.description}</p>
            </div>
          </div>

          <div className="video-switcher">
            {videos.map((video, index) => (
              <button
                key={video.id}
                className={`switcher-thumb ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleVideoSwitch(index)}
                aria-label={`Switch to ${video.title}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                />
                <div className="thumb-overlay"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
