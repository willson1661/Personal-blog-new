import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
  darkMode: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count, darkMode }) => {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp.set([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ], i * 3);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Mouse interaction
      mesh.current.rotation.x += mouse.y * 0.1;
      mesh.current.rotation.y += mouse.x * 0.1;
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={darkMode ? '#60a5fa' : '#3b82f6'}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

interface FloatingGeometryProps {
  position: [number, number, number];
  darkMode: boolean;
  geometry: 'box' | 'sphere' | 'torus';
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({ position, darkMode, geometry }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={darkMode ? '#8b5cf6' : '#6366f1'}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

interface ThreeBackgroundProps {
  darkMode: boolean;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ParticleSystem count={1000} darkMode={darkMode} />
        
        <FloatingGeometry position={[-5, 2, -5]} darkMode={darkMode} geometry="box" />
        <FloatingGeometry position={[5, -2, -3]} darkMode={darkMode} geometry="sphere" />
        <FloatingGeometry position={[-3, -3, -7]} darkMode={darkMode} geometry="torus" />
        <FloatingGeometry position={[4, 3, -6]} darkMode={darkMode} geometry="box" />
        <FloatingGeometry position={[-6, -1, -4]} darkMode={darkMode} geometry="sphere" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;