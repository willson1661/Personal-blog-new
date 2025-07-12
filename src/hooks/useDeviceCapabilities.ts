import { useState, useEffect } from 'react';
import { BREAKPOINTS, THREEJS_CONFIG } from '../constants';

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  devicePixelRatio: number;
  particleCount: number;
  prefersReducedMotion: boolean;
  screenWidth: number;
  screenHeight: number;
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    devicePixelRatio: 1,
    particleCount: THREEJS_CONFIG.PARTICLE_COUNT.DESKTOP,
    prefersReducedMotion: false,
    screenWidth: 1920,
    screenHeight: 1080
  });

  useEffect(() => {
    const updateCapabilities = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, THREEJS_CONFIG.PERFORMANCE.PIXEL_RATIO_LIMIT);
      
      const isMobile = screenWidth < BREAKPOINTS.MOBILE;
      const isTablet = screenWidth >= BREAKPOINTS.MOBILE && screenWidth < BREAKPOINTS.DESKTOP;
      const isDesktop = screenWidth >= BREAKPOINTS.DESKTOP;
      
      // Determine particle count based on device capabilities
      let particleCount: number;
      if (isMobile) {
        particleCount = THREEJS_CONFIG.PARTICLE_COUNT.MOBILE;
      } else if (devicePixelRatio > 1.5 && !isDesktop) {
        particleCount = THREEJS_CONFIG.PARTICLE_COUNT.MOBILE;
      } else if (isDesktop && devicePixelRatio > 1.5) {
        particleCount = THREEJS_CONFIG.PARTICLE_COUNT.HIGH_END;
      } else {
        particleCount = THREEJS_CONFIG.PARTICLE_COUNT.DESKTOP;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setCapabilities({
        isMobile,
        isTablet,
        isDesktop,
        devicePixelRatio,
        particleCount,
        prefersReducedMotion,
        screenWidth,
        screenHeight
      });
    };

    // Initial check
    updateCapabilities();

    // Listen for resize events
    window.addEventListener('resize', updateCapabilities);
    
    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => updateCapabilities();
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateCapabilities);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return capabilities;
};