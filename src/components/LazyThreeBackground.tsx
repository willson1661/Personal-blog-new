import React, { Suspense, lazy } from 'react';

const ThreeBackground = lazy(() => import('./ThreeBackground'));

interface LazyThreeBackgroundProps {
  darkMode: boolean;
}

const LazyThreeBackground: React.FC<LazyThreeBackgroundProps> = ({
  darkMode,
}) => {
  return (
    <Suspense fallback={null}>
      <ThreeBackground darkMode={darkMode} />
    </Suspense>
  );
};

export default LazyThreeBackground;
