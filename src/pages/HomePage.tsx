
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MorningPrayer from "@/components/MorningPrayer";
import SchoolLeadership from "@/components/SchoolLeadership";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const HomePage = () => {
  // Create refs for cleanup functions
  const resizeHandlerRef = useRef<() => void>();
  const scrollHandlerRef = useRef<() => void>();
  
  useEffect(() => {
    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = initAnimation;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      // Clean up event listeners
      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
      }
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current);
      }
      
      // Remove animation container if it exists
      const container = document.getElementById('animation-container');
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, []);

  // Initialize the 3D animation
  const initAnimation = () => {
    if (!window.THREE) {
      console.error("THREE.js not loaded");
      return;
    }
    
    const THREE = window.THREE;
    
    // Create an animation container
    const container = document.createElement('div');
    container.id = 'animation-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material with purple color matching our theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x9b87f5,
      transparent: true,
      opacity: 0.7
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 5;
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Store reference for cleanup
    resizeHandlerRef.current = handleResize;
    
    window.addEventListener('resize', handleResize);
    
    // Handle scroll interaction
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      particlesMesh.rotation.y = scrollPosition * 0.0005;
      particlesMesh.rotation.x = scrollPosition * 0.0002;
    };
    
    // Store reference for cleanup
    scrollHandlerRef.current = handleScroll;
    
    window.addEventListener('scroll', handleScroll);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      
      renderer.render(scene, camera);
    };
    
    animate();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutUs />
      <MorningPrayer />
      <SchoolLeadership />
      <Footer />
    </div>
  );
};

export default HomePage;
