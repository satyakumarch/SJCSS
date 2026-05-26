import React, { useRef, useState } from "react";
import { Play, Volume2, VolumeX, CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const values = [
    { title: "Academic Excellence", desc: "Rigorous curriculum designed to challenge and inspire every student." },
    { title: "Holistic Development", desc: "Nurturing mind, body, and character for well-rounded growth." },
    { title: "Community Values", desc: "Rooted in Nepali culture with a vision for a global future." },
    { title: "Inclusive Education", desc: "Every student deserves quality education regardless of background." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">About Our School</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Building tomorrow's leaders through innovative education, strong values,
            and a nurturing community environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Values */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision & Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shree Janchetana Community Secondary School has been a beacon of quality
                education in Kapilvastu since . We are committed to providing a
                nurturing environment where students discover their potential and develop
                into well-rounded individuals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our innovative teaching methods, dedicated faculty, and state-of-the-art
                facilities ensure that every student receives the best possible education
                — preparing them for higher studies and life beyond the classroom.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-xl border border-gray-100
                             hover:border-accent/30 hover:shadow-card transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video + Image */}
          <div className="space-y-6 animate-slide-right">
            {/* Video */}
            <div
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-card-hover"
              onMouseEnter={handleVideoPlay}
              onMouseLeave={handleVideoPause}
            >
              <video
                ref={videoRef}
                className="w-full rounded-2xl"
                controls
                muted={isMuted}
                preload="metadata"
              >
                <source src="/janchetana.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-primary ml-1" />
                  </div>
                </div>
              )}

              {/* Mute button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-14 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full
                           text-white z-10 hover:bg-black/80 transition-colors duration-200"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {/* Teacher image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="teacher.jpg"
                alt="Teachers and students"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold text-sm">Dedicated Faculty</p>
                <p className="text-xs text-white/80">40+ experienced educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
