import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
  .solar-container {
      font-size: 10px;
      width: 40em;
      height: 40em;
      position: relative;
  }
  .sun {
      position: absolute;
      top: 4em;
      left: 48.8em;
      width: 32em;
      height: 32em;
      background-color: ${darkMode ? "#2e2e2c" : "#dddddd"};
      border-radius: 50%;
      box-shadow: 0 0 2em ${darkMode ? "white" : "#bdbdbd"};
  }
  .earth, .moon {
    position: absolute;
    border-style: solid;
    border-color: ${darkMode ? "white transparent transparent transparent" : "#878787 transparent transparent transparent"};
    border-width: 0.1em 0.1em 0 0;
    border-radius: 50%;
  }
  .earth {
      top: -4em;
      left: 42em;
      width: 48em;
      height: 48em;
      animation: orbit 36.5s linear infinite;
  }
  .moon {
      top: 48px;
      right: 23px;
      width: 8em;
      height: 8em;
      animation: orbit 2.7s linear infinite;
  }
  .earth::before,
  .moon::before {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  .earth::before {
      top: 6.8em;
      right: 4.8em;
      width: 3em;
      height: 3em;
      background-color: ${darkMode ? "#fffdfd" : "#a5a5a5"};
      box-shadow: 0 0 3em ${darkMode ? "#e7e7e7" : "#aaaaaa"};
  }
  .moon::before {
      top: 2px;
      right: 10px;
      width: 1.2em;
      height: 1.2em;
      background-color: ${darkMode ? "silver" : "#b7b7b7"};
      box-shadow: 0 0 3em ${darkMode ? "#e7e7e7" : "#acacac"};
  }
  @keyframes orbit {
    to {
      transform: rotate(360deg);
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
