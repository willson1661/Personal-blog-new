import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeHeroProps {
  darkMode: boolean;
}

const ThreeHero: React.FC<ThreeHeroProps> = ({ darkMode }) => {
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
    camera.position.z = 3;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create animated DNA helix
    const helixGroup = new THREE.Group();
    const helixRadius = 1;
    const helixHeight = 4;
    const helixTurns = 3;
    const particlesPerTurn = 20;

    for (let i = 0; i < helixTurns * particlesPerTurn; i++) {
      const angle = (i / particlesPerTurn) * Math.PI * 2;
      const y = (i / (helixTurns * particlesPerTurn)) * helixHeight - helixHeight / 2;

      // First helix strand
      const sphere1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 8, 8),
        new THREE.MeshBasicMaterial({ 
          color: darkMode ? '#3b82f6' : '#1e40af',
          transparent: true,
          opacity: 0.8
        })
      );
      sphere1.position.set(
        Math.cos(angle) * helixRadius,
        y,
        Math.sin(angle) * helixRadius
      );
      helixGroup.add(sphere1);

      // Second helix strand (opposite)
      const sphere2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 8, 8),
        new THREE.MeshBasicMaterial({ 
          color: darkMode ? '#8b5cf6' : '#7c3aed',
          transparent: true,
          opacity: 0.8
        })
      );
      sphere2.position.set(
        Math.cos(angle + Math.PI) * helixRadius,
        y,
        Math.sin(angle + Math.PI) * helixRadius
      );
      helixGroup.add(sphere2);

      // Connecting lines
      if (i % 4 === 0) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          sphere1.position,
          sphere2.position
        ]);
        const line = new THREE.Line(
          lineGeometry,
          new THREE.LineBasicMaterial({ 
            color: darkMode ? '#4f46e5' : '#6366f1',
            transparent: true,
            opacity: 0.4
          })
        );
        helixGroup.add(line);
      }
    }

    scene.add(helixGroup);

    // Floating code symbols
    const codeSymbols = ['</', '{}', '()', '[]', '=>', '&&', '||'];
    const symbolMeshes: THREE.Mesh[] = [];

    codeSymbols.forEach((symbol, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 128;
      canvas.height = 128;
      
      context.fillStyle = darkMode ? '#3b82f6' : '#1e40af';
      context.font = 'bold 48px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(symbol, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.6
      });
      
      const geometry = new THREE.PlaneGeometry(0.5, 0.5);
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      );
      
      symbolMeshes.push(mesh);
      scene.add(mesh);
    });

    // Mouse interaction
    const mouse = new THREE.Vector2();
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

      // Rotate helix
      helixGroup.rotation.y += 0.01;
      helixGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;

      // Animate code symbols
      symbolMeshes.forEach((mesh, index) => {
        mesh.rotation.z += 0.02 + index * 0.005;
        mesh.position.y += Math.sin(Date.now() * 0.002 + index) * 0.002;
        mesh.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      // Mouse interaction
      helixGroup.rotation.x += (mouse.y * 0.2 - helixGroup.rotation.x) * 0.05;
      helixGroup.rotation.y += (mouse.x * 0.2 - helixGroup.rotation.y) * 0.05;

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

export default ThreeHero;