import React, { useRef, useMemo, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
  darkMode: boolean;
}

const ParticleSystem = memo<ParticleSystemProps>(({ count, darkMode }) => {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp.set(
        [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        i * 3
      );
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Reduce animation frequency for better performance
      const time = state.clock.elapsedTime;
      mesh.current.rotation.x = time * 0.05; // Reduced from 0.1
      mesh.current.rotation.y = time * 0.075; // Reduced from 0.15

      // Reduce mouse interaction intensity
      mesh.current.rotation.x += mouse.y * 0.05; // Reduced from 0.1
      mesh.current.rotation.y += mouse.x * 0.05; // Reduced from 0.1
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color={darkMode ? '#60a5fa' : '#3b82f6'}
        size={0.04} // Reduced from 0.05
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5} // Reduced from 0.6
      />
    </Points>
  );
});

interface FloatingGeometryProps {
  position: [number, number, number];
  darkMode: boolean;
  geometry: 'box' | 'sphere' | 'torus';
}

const FloatingGeometry = memo<FloatingGeometryProps>(({
  position,
  darkMode,
  geometry,
}) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.elapsedTime;
      // Reduce animation complexity
      mesh.current.rotation.x = time * 0.3; // Reduced from 0.5
      mesh.current.rotation.y = time * 0.2; // Reduced from 0.3
      mesh.current.position.y = position[1] + Math.sin(time) * 0.3; // Reduced from 0.5
    }
  });

  const renderGeometry = useMemo(() => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />; // Reduced size
      case 'sphere':
        return <sphereGeometry args={[0.4, 16, 16]} />; // Reduced detail
      case 'torus':
        return <torusGeometry args={[0.4, 0.15, 8, 50]} />; // Reduced detail
      default:
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
    }
  }, [geometry]);

  return (
    <mesh ref={mesh} position={position}>
      {renderGeometry}
      <meshStandardMaterial
        color={darkMode ? '#8b5cf6' : '#6366f1'}
        transparent
        opacity={0.25} // Reduced from 0.3
        wireframe
      />
    </mesh>
  );
});

interface ThreeBackgroundProps {
  darkMode: boolean;
}

const ThreeBackground = memo<ThreeBackgroundProps>(({ darkMode }) => {
  return (
    <div className="fixed inset-0 z-[12]" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
        performance={{ min: 0.8 }} // Reduce quality if performance drops
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />

        {/* Reduced particle count from 1000 to 500 */}
        <ParticleSystem count={500} darkMode={darkMode} />

        {/* Reduced number of floating geometries */}
      
     
      </Canvas>
    </div>
  );
});

export default ThreeBackground;
