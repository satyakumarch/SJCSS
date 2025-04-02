import React, { useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from "lucide-react";

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(err => {
        console.error("Error playing video:", err);
      });
    }
  };

  const handleVideoPause = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering parent div's events
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            About Our School
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building tomorrow's leaders through innovative education and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-semibold text-primary">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600">
              We are committed to providing a nurturing environment where students can discover
              their potential and develop into well-rounded individuals. Our innovative
              teaching methods and state-of-the-art facilities ensure that every student
              receives the best possible education.
            </p>
            <div 
              className="relative group cursor-pointer" 
              onMouseEnter={handleVideoPlay}
              onMouseLeave={handleVideoPause}
            >
              <video
                ref={videoRef}
                className="w-full rounded-lg"
                controls
                muted={isMuted}
                preload="metadata"
              >
                <source src="/janchetana.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {/* <Play className="w-16 h-16 text-white" /> */}
              </div>
              
              {/* Custom mute/unmute button */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-3 right-16 bg-black/70 p-2 rounded-full text-white z-10"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Students collaborating"
              className="rounded-lg shadow-lg w-full animate-fade-up"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Striving for academic and personal excellence in everything we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Embracing new ideas and methods in education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;