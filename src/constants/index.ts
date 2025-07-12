// Animation constants
export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.8,
  SLOW: 1.5,
  VERY_SLOW: 2.0
} as const;

export const ANIMATION_DELAYS = {
  NONE: 0,
  SHORT: 0.2,
  MEDIUM: 0.5,
  LONG: 1.0,
  VERY_SLOW: 2.0
} as const;

export const ANIMATION_EASING = {
  SMOOTH: [0.25, 0.46, 0.45, 0.94],
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
  EASE_IN_OUT: [0.4, 0, 0.2, 1]
} as const;

// Three.js constants
export const THREEJS_CONFIG = {
  PARTICLE_COUNT: {
    MOBILE: 300,
    DESKTOP: 800,
    HIGH_END: 1200
  },
  CAMERA: {
    POSITION: [0, 0, 10] as [number, number, number],
    FOV: 60
  },
  PERFORMANCE: {
    PIXEL_RATIO_LIMIT: 2
  }
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
} as const;

// Z-index layers
export const Z_INDEX = {
  BACKGROUND: 1,
  THREE_BACKGROUND: 2,
  FLOATING_ELEMENTS: 3,
  CONTENT: 10,
  HEADER: 20,
  MODAL: 30,
  TOOLTIP: 40
} as const;

// External URLs
export const EXTERNAL_URLS = {
  RESUME: 'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/Willson%20Raj%20Manda%20Resume.pdf?alt=media&token=52103178-1501-4598-a0ce-fe3d95a3b1b8',
  PROFILE_IMAGE: 'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/WhatsApp%20Image%202025-04-21%20at%2011.09.01_c18a96a3%20(1).png?alt=media&token=4df8c10b-85d6-4aa2-af15-bcb9895067da'
} as const;

// Theme colors
export const THEME_COLORS = {
  LIGHT: {
    PRIMARY: '#3b82f6',
    SECONDARY: '#6366f1',
    ACCENT: '#8b5cf6',
    TEXT: '#1f2937',
    BACKGROUND: '#ffffff'
  },
  DARK: {
    PRIMARY: '#60a5fa',
    SECONDARY: '#8b5cf6',
    ACCENT: '#a855f7',
    TEXT: '#f9fafb',
    BACKGROUND: '#111827'
  }
} as const;