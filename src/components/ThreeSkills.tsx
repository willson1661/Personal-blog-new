import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSkillsProps {
  darkMode: boolean;
}

const ThreeSkills: React.FC<ThreeSkillsProps> = ({ darkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create skill nodes network
    const skillNodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    
    const skills = [
      { name: 'React', position: [0, 2, 0], color: darkMode ? '#61dafb' : '#0088cc' },
      { name: 'JavaScript', position: [2, 1, 0], color: darkMode ? '#f7df1e' : '#f0db4f' },
      { name: 'CSS', position: [-2, 1, 0], color: darkMode ? '#1572b6' : '#264de4' },
      { name: 'HTML', position: [0, -1, 0], color: darkMode ? '#e34c26' : '#e44d26' },
      { name: 'Figma', position: [1.5, -1.5, 0], color: darkMode ? '#f24e1e' : '#ff7262' },
      { name: 'GitHub', position: [-1.5, -1.5, 0], color: darkMode ? '#ffffff' : '#333333' },
    ];

    // Create nodes
    skills.forEach((skill, index) => {
      const geometry = new THREE.SphereGeometry(0.2, 16, 16);
      const material = new THREE.MeshBasicMaterial({ 
        color: skill.color,
        transparent: true,
        opacity: 0.8
      });
      const node = new THREE.Mesh(geometry, material);
      node.position.set(...skill.position);
      
      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.25, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: skill.color,
        transparent: true,
        opacity: 0.2
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(node.position);
      
      skillNodes.push(node);
      scene.add(node);
      scene.add(glow);

      // Create text label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 256;
      canvas.height = 64;
      
      context.fillStyle = darkMode ? '#ffffff' : '#000000';
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(skill.name, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const labelMaterial = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.8
      });
      
      const labelGeometry = new THREE.PlaneGeometry(1, 0.25);
      const label = new THREE.Mesh(labelGeometry, labelMaterial);
      label.position.set(skill.position[0], skill.position[1] - 0.4, skill.position[2]);
      scene.add(label);
    });

    // Create connections between nodes
    for (let i = 0; i < skillNodes.length; i++) {
      for (let j = i + 1; j < skillNodes.length; j++) {
        const distance = skillNodes[i].position.distanceTo(skillNodes[j].position);
        if (distance < 3) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            skillNodes[i].position,
            skillNodes[j].position
          ]);
          const line = new THREE.Line(
            lineGeometry,
            new THREE.LineBasicMaterial({ 
              color: darkMode ? '#4f46e5' : '#6366f1',
              transparent: true,
              opacity: 0.3
            })
          );
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Floating particles around nodes
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: darkMode ? '#3b82f6' : '#1e40af',
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (rect) {
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate skill nodes
      skillNodes.forEach((node, index) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
        
        // Floating motion
        node.position.y += Math.sin(Date.now() * 0.002 + index) * 0.002;
        node.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      // Animate particles
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.001;

      // Mouse interaction - highlight nearby nodes
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(skillNodes);
      
      skillNodes.forEach((node, index) => {
        const material = node.material as THREE.MeshBasicMaterial;
        if (intersects.length > 0 && intersects[0].object === node) {
          material.opacity = 1;
          node.scale.setScalar(1.2);
        } else {
          material.opacity = 0.8;
          node.scale.setScalar(1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeSkills;