import { useEffect } from 'react';

interface PerformanceMonitorProps {
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const measurePerformance = () => {
      if ('performance' in window && performance.getEntriesByType) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            // Navigation timing
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };

          // Log performance metrics (in production, send to analytics)
          console.group('🚀 Performance Metrics');
          console.log('DOM Content Loaded:', metrics.domContentLoaded.toFixed(2), 'ms');
          console.log('Load Complete:', metrics.loadComplete.toFixed(2), 'ms');
          console.log('Total Load Time:', metrics.totalLoadTime.toFixed(2), 'ms');
          console.groupEnd();
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enabled]);

  return null;
};

export default PerformanceMonitor;