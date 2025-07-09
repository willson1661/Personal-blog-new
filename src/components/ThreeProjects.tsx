import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeProjectsProps {
  darkMode: boolean;
}

const ThreeProjects: React.FC<ThreeProjectsProps> = ({ darkMode }) => {
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
    camera.position.z = 6;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create floating project cards
    const projectCards: THREE.Group[] = [];
    const cardCount = 6;

    for (let i = 0; i < cardCount; i++) {
      const cardGroup = new THREE.Group();
      
      // Card base
      const cardGeometry = new THREE.BoxGeometry(1.5, 1, 0.1);
      const cardMaterial = new THREE.MeshBasicMaterial({ 
        color: darkMode ? '#374151' : '#f9fafb',
        transparent: true,
        opacity: 0.8
      });
      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      cardGroup.add(card);

      // Card border
      const borderGeometry = new THREE.EdgesGeometry(cardGeometry);
      const borderMaterial = new THREE.LineBasicMaterial({ 
        color: darkMode ? '#3b82f6' : '#1e40af',
        transparent: true,
        opacity: 0.6
      });
      const border = new THREE.LineSegments(borderGeometry, borderMaterial);
      cardGroup.add(border);

      // Position cards in a circle
      const angle = (i / cardCount) * Math.PI * 2;
      const radius = 3;
      cardGroup.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        Math.sin(angle) * 0.5
      );
      
      cardGroup.rotation.z = angle;
      
      projectCards.push(cardGroup);
      scene.add(cardGroup);
    }

    // Create floating geometric elements
    const geometricElements: THREE.Mesh[] = [];
    const elementCount = 20;

    for (let i = 0; i < elementCount; i++) {
      const geometries = [
        new THREE.TetrahedronGeometry(0.1),
        new THREE.OctahedronGeometry(0.1),
        new THREE.IcosahedronGeometry(0.1),
        new THREE.DodecahedronGeometry(0.1),
      ];

      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: darkMode ? '#8b5cf6' : '#7c3aed',
        transparent: true,
        opacity: 0.4,
        wireframe: true
      });

      const element = new THREE.Mesh(geometry, material);
      element.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );

      geometricElements.push(element);
      scene.add(element);
    }

    // Create data flow lines
    const dataLines: THREE.Line[] = [];
    const lineCount = 8;

    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const segmentCount = 20;
      
      for (let j = 0; j < segmentCount; j++) {
        const t = j / (segmentCount - 1);
        const x = (t - 0.5) * 8;
        const y = Math.sin(t * Math.PI * 2 + i) * 2;
        const z = Math.cos(t * Math.PI * 2 + i) * 1;
        points.push(new THREE.Vector3(x, y, z));
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: darkMode ? '#3b82f6' : '#1e40af',
        transparent: true,
        opacity: 0.3
      });

      const line = new THREE.Line(lineGeometry, lineMaterial);
      dataLines.push(line);
      scene.add(line);
    }

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

      const time = Date.now() * 0.001;

      // Animate project cards
      projectCards.forEach((card, index) => {
        card.rotation.x = Math.sin(time + index) * 0.1;
        card.rotation.y += 0.005;
        card.position.y += Math.sin(time * 2 + index) * 0.002;
      });

      // Animate geometric elements
      geometricElements.forEach((element, index) => {
        element.rotation.x += 0.01 + index * 0.001;
        element.rotation.y += 0.015 + index * 0.001;
        element.position.y += Math.sin(time * 3 + index) * 0.001;
        element.position.x += Math.cos(time * 2 + index) * 0.0005;
      });

      // Animate data flow lines
      dataLines.forEach((line, index) => {
        line.rotation.z += 0.002 + index * 0.0005;
        line.position.x = Math.sin(time + index) * 0.5;
      });

      // Mouse interaction
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        projectCards.map(group => group.children[0])
      );

      projectCards.forEach((cardGroup, index) => {
        const card = cardGroup.children[0] as THREE.Mesh;
        const material = card.material as THREE.MeshBasicMaterial;
        
        if (intersects.length > 0 && intersects[0].object === card) {
          cardGroup.scale.setScalar(1.1);
          material.opacity = 1;
        } else {
          cardGroup.scale.setScalar(1);
          material.opacity = 0.8;
        }
      });

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

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
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeProjects;