import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeProfileImageProps {
  darkMode: boolean;
  imageUrl: string;
}

const ThreeProfileImage: React.FC<ThreeProfileImageProps> = ({ darkMode, imageUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();
  const profileMeshRef = useRef<THREE.Mesh>();
  const glowMeshRef = useRef<THREE.Mesh>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      1, // Square aspect ratio
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(320, 320); // Fixed size for circular container
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Load profile image texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageUrl, (texture) => {
      // Create circular geometry for profile image
      const geometry = new THREE.CircleGeometry(1, 64);
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        opacity: 1
      });
      
      const profileMesh = new THREE.Mesh(geometry, material);
      profileMeshRef.current = profileMesh;
      scene.add(profileMesh);

      // Create glow effect
      const glowGeometry = new THREE.CircleGeometry(1.2, 64);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: darkMode ? '#3b82f6' : '#1e40af',
        transparent: true,
        opacity: 0.3
      });
      
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.z = -0.1;
      glowMeshRef.current = glowMesh;
      scene.add(glowMesh);

      // Create floating particles around the image
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 50;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.5 + Math.random() * 0.5;
        posArray[i] = Math.cos(angle) * radius;
        posArray[i + 1] = Math.sin(angle) * radius;
        posArray[i + 2] = (Math.random() - 0.5) * 0.5;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: darkMode ? '#8b5cf6' : '#7c3aed',
        transparent: true,
        opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Create orbiting rings
      const ringGroup = new THREE.Group();
      
      for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.RingGeometry(1.3 + i * 0.2, 1.35 + i * 0.2, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: darkMode ? '#3b82f6' : '#1e40af',
          transparent: true,
          opacity: 0.2 - i * 0.05,
          side: THREE.DoubleSide
        });
        
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.rotation.z = i * Math.PI / 3;
        ringGroup.add(ring);
      }
      
      scene.add(ringGroup);

      // Mouse interaction
      const mouse = new THREE.Vector2();
      const targetRotation = new THREE.Vector2();
      const currentRotation = new THREE.Vector2();

      const handleMouseMove = (event: MouseEvent) => {
        const rect = mountRef.current?.getBoundingClientRect();
        if (rect) {
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
          
          // Calculate target rotation based on mouse position
          targetRotation.x = mouse.y * 0.3;
          targetRotation.y = mouse.x * 0.3;
        }
      };

      const handleMouseLeave = () => {
        targetRotation.set(0, 0);
      };

      mountRef.current?.addEventListener('mousemove', handleMouseMove);
      mountRef.current?.addEventListener('mouseleave', handleMouseLeave);

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        // Smooth rotation interpolation
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

        // Apply rotation to profile image
        if (profileMeshRef.current) {
          profileMeshRef.current.rotation.x = currentRotation.x;
          profileMeshRef.current.rotation.y = currentRotation.y;
          
          // Add subtle floating animation
          profileMeshRef.current.position.y = Math.sin(time * 2) * 0.02;
          profileMeshRef.current.position.x = Math.cos(time * 1.5) * 0.01;
        }

        // Animate glow
        if (glowMeshRef.current) {
          glowMeshRef.current.rotation.x = currentRotation.x * 0.5;
          glowMeshRef.current.rotation.y = currentRotation.y * 0.5;
          glowMeshRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
        }

        // Animate particles
        particlesMesh.rotation.z += 0.005;
        const positions = particlesMesh.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 2] += Math.sin(time * 2 + i) * 0.001;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;

        // Animate rings
        ringGroup.rotation.x += 0.002;
        ringGroup.rotation.y += 0.003;
        ringGroup.rotation.z += 0.001;

        // Add depth effect based on mouse position
        camera.position.x = mouse.x * 0.1;
        camera.position.y = mouse.y * 0.1;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup mouse listeners
      return () => {
        mountRef.current?.removeEventListener('mousemove', handleMouseMove);
        mountRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [darkMode, imageUrl]);

  return (
    <div 
      ref={mountRef} 
      className="w-80 h-80 rounded-full overflow-hidden cursor-pointer"
      style={{ 
        background: darkMode 
          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
          : 'linear-gradient(135deg, #1e40af, #7c3aed)',
        padding: '4px'
      }}
    />
  );
};

export default ThreeProfileImage;