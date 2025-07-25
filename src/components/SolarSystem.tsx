import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
  .solar-container {
      font-size: calc(8px + 0.5vw); /* scales with viewport width */
      width: 30vw;
      max-width: 600px;
      max-height: 600px;
      aspect-ratio: 1 / 1;
      position: relative;
      margin: 0 auto;
    }

  .sun {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40%;
      height: 40%;
      background-color: ${darkMode ? "#2e2e2c" : "#000000"};
      border-radius: 50%;
      box-shadow: 0 0 2em ${darkMode ? "white" : "#000000"};
      transform: translate(-50%, -50%);
  }

  .earth, .moon {
    position: absolute;
    border-style: solid;
    border-color: ${darkMode ? "white transparent transparent transparent" : "#000000 transparent transparent transparent"};
    border-width: 0.15em 0.15em 0 0;
    border-radius: 50%;
  }

  .earth {
      top: 15%;
      left: 15%;
      width: 60%;
      height: 60%;
      animation: orbit 36.5s linear infinite;
      transform-origin: 50% 50%;
  }

  .moon {
      top: 65%;
      right: 15%;
      width: 15%;
      height: 15%;
      animation: orbit 2.7s linear infinite;
      transform-origin: 50% 50%;
  }

  .earth::before,
  .moon::before {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  .earth::before {
      top: 18%;
      right: 12%;
      width: 10%;
      height: 10%;
      background-color: ${darkMode ? "#fffdfd" : "#000000"};
      box-shadow: 0 0 3em ${darkMode ? "#e7e7e7" : "#000000"};
  }

  .moon::before {
      top: 6%;
      right: 25%;
      width: 4%;
      height: 4%;
      background-color: ${darkMode ? "silver" : "#000000"};
      box-shadow: 0 0 3em ${darkMode ? "#e7e7e7" : "#000000"};
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }

  /* Hide solar animation completely below 600px width */
  @media (max-width: 600px) {
    .solar-container {
      display: none;
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
