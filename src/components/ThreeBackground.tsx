import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';
import { THREEJS_CONFIG, Z_INDEX } from '../constants';

interface ParticleSystemProps {
  count: number;
  darkMode: boolean;
  prefersReducedMotion: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count, darkMode, prefersReducedMotion }: ParticleSystemProps) => {
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

  const rotationSpeed = useMemo(() => 
    prefersReducedMotion ? 0.02 : 0.1, 
    [prefersReducedMotion]
  );

  const mouseInteraction = useMemo(() => 
    prefersReducedMotion ? 0.02 : 0.1, 
    [prefersReducedMotion]
  );

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      mesh.current.rotation.y = state.clock.elapsedTime * (rotationSpeed * 1.5);

      // Mouse interaction (reduced if motion is preferred to be reduced)
      if (!prefersReducedMotion) {
        mesh.current.rotation.x += mouse.y * mouseInteraction;
        mesh.current.rotation.y += mouse.x * mouseInteraction;
      }
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
  prefersReducedMotion: boolean;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({
  position,
  darkMode,
  geometry,
  prefersReducedMotion,
}: FloatingGeometryProps) => {
  const mesh = useRef<THREE.Mesh>(null);

  const animationSpeed = useMemo(() => 
    prefersReducedMotion ? 0.1 : 0.5, 
    [prefersReducedMotion]
  );

  const floatSpeed = useMemo(() => 
    prefersReducedMotion ? 0.2 : 1, 
    [prefersReducedMotion]
  );

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * animationSpeed;
      mesh.current.rotation.y = state.clock.elapsedTime * (animationSpeed * 0.6);
      mesh.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * floatSpeed) * 0.5;
    }
  });

  const renderGeometry = useCallback(() => {
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
  }, [geometry]);

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
  const { particleCount, prefersReducedMotion, devicePixelRatio } = useDeviceCapabilities();

  const canvasConfig = useMemo(() => ({
    camera: { 
      position: THREEJS_CONFIG.CAMERA.POSITION, 
      fov: THREEJS_CONFIG.CAMERA.FOV 
    },
    style: { 
      background: 'transparent', 
      pointerEvents: 'none' as const 
    },
    gl: {
      antialias: devicePixelRatio <= 1,
      alpha: true,
      powerPreference: 'high-performance' as const,
      failIfMajorPerformanceCaveat: true
    },
    dpr: devicePixelRatio
  }), [devicePixelRatio]);

  const geometries = useMemo(() => [
    { position: [-5, 2, -5] as [number, number, number], geometry: 'box' as const },
    { position: [5, -2, -3] as [number, number, number], geometry: 'sphere' as const },
    { position: [-3, -3, -7] as [number, number, number], geometry: 'torus' as const },
    { position: [4, 3, -6] as [number, number, number], geometry: 'box' as const },
    { position: [-6, -1, -4] as [number, number, number], geometry: 'sphere' as const },
  ], []);

  return (
    <div 
      className="fixed inset-0" 
      style={{ 
        pointerEvents: 'none',
        zIndex: Z_INDEX.THREE_BACKGROUND
      }}
    >
      <Canvas {...canvasConfig}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <ParticleSystem 
          count={particleCount} 
          darkMode={darkMode} 
          prefersReducedMotion={prefersReducedMotion}
        />

        {geometries.map((geo, index) => (
          <FloatingGeometry
            key={index}
            position={geo.position}
            darkMode={darkMode}
            geometry={geo.geometry}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default React.memo(ThreeBackground);
