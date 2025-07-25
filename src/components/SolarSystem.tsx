import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
  .solar-container {
      font-size: clamp(6px, 1.5vw, 12px);
      width: clamp(200px, 50vw, 400px);
      height: clamp(200px, 50vw, 400px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .sun {
      position: absolute;
      width: clamp(80px, 20vw, 160px);
      height: clamp(80px, 20vw, 160px);
      background-color: ${darkMode ? "#2e2e2c" : "#000000"};
      border-radius: 50%;
      box-shadow: 0 0 clamp(10px, 2vw, 30px) ${darkMode ? "white" : "#000000"};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
  }
  
  .earth, .moon {
    position: absolute;
    border-style: solid;
    border-color: ${darkMode ? "white transparent transparent transparent" : "#000000 transparent transparent transparent"};
    border-width: 0.1em 0.1em 0 0;
    border-radius: 50%;
  }
  
  .earth {
      top: 50%;
      left: 50%;
      width: clamp(150px, 35vw, 300px);
      height: clamp(150px, 35vw, 300px);
      transform: translate(-50%, -50%);
      animation: orbit 36.5s linear infinite;
  }
  
  .moon {
      top: clamp(15px, 3vw, 30px);
      right: clamp(8px, 1.5vw, 15px);
      width: clamp(25px, 6vw, 50px);
      height: clamp(25px, 6vw, 50px);
      animation: orbit 2.7s linear infinite;
  }
  
  .earth::before,
  .moon::before {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  
  .earth::before {
      top: 50%;
      right: clamp(8px, 2vw, 15px);
      width: clamp(8px, 2vw, 15px);
      height: clamp(8px, 2vw, 15px);
      background-color: ${darkMode ? "#fffdfd" : "#000000"};
      box-shadow: 0 0 clamp(5px, 1vw, 15px) ${darkMode ? "#e7e7e7" : "#000000"};
      transform: translateY(-50%);
  }
  
  .moon::before {
      top: 50%;
      right: 50%;
      width: clamp(4px, 1vw, 8px);
      height: clamp(4px, 1vw, 8px);
      background-color: ${darkMode ? "silver" : "#000000"};
      box-shadow: 0 0 clamp(3px, 0.5vw, 8px) ${darkMode ? "#e7e7e7" : "#000000"};
      transform: translate(50%, -50%);
  }
  
  @keyframes orbit {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  /* Mobile specific adjustments */
  @media (max-width: 640px) {
    .solar-container {
      font-size: clamp(4px, 2vw, 8px);
      width: clamp(150px, 60vw, 250px);
      height: clamp(150px, 60vw, 250px);
    }
    
    .sun {
      width: clamp(50px, 15vw, 80px);
      height: clamp(50px, 15vw, 80px);
    }
    
    .earth {
      width: clamp(100px, 30vw, 150px);
      height: clamp(100px, 30vw, 150px);
    }
    
    .moon {
      width: clamp(20px, 5vw, 35px);
      height: clamp(20px, 5vw, 35px);
      top: clamp(10px, 2vw, 20px);
      right: clamp(5px, 1vw, 10px);
    }
  }
  
  /* Tablet specific adjustments */
  @media (min-width: 641px) and (max-width: 1024px) {
    .solar-container {
      font-size: clamp(8px, 1.2vw, 10px);
      width: clamp(250px, 45vw, 350px);
      height: clamp(250px, 45vw, 350px);
    }
  }
  
  /* Large screen adjustments */
  @media (min-width: 1025px) {
    .solar-container {
      font-size: clamp(10px, 1vw, 14px);
      width: clamp(300px, 40vw, 500px);
      height: clamp(300px, 40vw, 500px);
    }
  }
  
  /* Ultra-wide screen adjustments */
  @media (min-width: 1920px) {
    .solar-container {
      width: clamp(400px, 35vw, 600px);
      height: clamp(400px, 35vw, 600px);
    }
  }
  `;

  return (
    <>
      <style>{solarSystemStyles}</style>
      <div className="solar-container" aria-hidden="true">
        <div className="sun"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
