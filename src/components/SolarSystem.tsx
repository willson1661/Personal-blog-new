import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
    .solar-container {
      position: relative;
      width: 100%;
      max-width: 500px;
      aspect-ratio: 1 / 1;
      margin: 0 auto;
      font-size: 1vw; /* Scale animations with viewport width */
    }

    .sun {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16em;
      height: 16em;
      background-color: ${darkMode ? "#2e2e2c" : "#000"};
      border-radius: 50%;
      box-shadow: 0 0 2em ${darkMode ? "white" : "#000"};
      transform: translate(-50%, -50%);
    }

    .earth,
    .moon {
      position: absolute;
      border-style: solid;
      border-color: ${darkMode ? "white transparent transparent transparent" : "#000 transparent transparent transparent"};
      border-width: 0.1em 0.1em 0 0;
      border-radius: 50%;
    }

    .earth {
      top: 50%;
      left: 50%;
      width: 24em;
      height: 24em;
      animation: orbit 36.5s linear infinite;
      transform: translate(-50%, -50%);
    }

    .moon {
      top: 50%;
      left: 50%;
      width: 4em;
      height: 4em;
      animation: orbit 2.7s linear infinite;
      transform: translate(-50%, -50%);
    }

    .earth::before,
    .moon::before {
      content: '';
      position: absolute;
      border-radius: 50%;
    }

    .earth::before {
      top: 50%;
      left: 0;
      width: 2em;
      height: 2em;
      background-color: ${darkMode ? "#fffdfd" : "#000"};
      box-shadow: 0 0 2em ${darkMode ? "#e7e7e7" : "#000"};
      transform: translateY(-50%);
    }

    .moon::before {
      top: 50%;
      left: 0;
      width: 0.8em;
      height: 0.8em;
      background-color: ${darkMode ? "silver" : "#000"};
      box-shadow: 0 0 2em ${darkMode ? "#e7e7e7" : "#000"};
      transform: translateY(-50%);
    }

    @keyframes orbit {
      to {
        transform: rotate(360deg) translate(-50%, -50%);
      }
    }

    @media (max-width: 480px) {
      .solar-container {
        font-size: 2.5vw;
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
