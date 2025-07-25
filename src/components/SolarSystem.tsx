import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
  .solar-container {
      font-size: calc(6px + 0.5vw); /* dynamic font sizing */
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1 / 1;
      position: relative;
      margin: 0 auto;
  }

  .sun {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30%;
      height: 30%;
      background-color: ${darkMode ? "#2e2e2c" : "#000000"};
      border-radius: 50%;
      box-shadow: 0 0 1.5em ${darkMode ? "white" : "#000000"};
      transform: translate(-50%, -50%);
  }

  .earth, .moon {
    position: absolute;
    border-style: solid;
    border-color: ${
      darkMode
        ? "white transparent transparent transparent"
        : "#000000 transparent transparent transparent"
    };
    border-width: 0.1em 0.1em 0 0;
    border-radius: 50%;
  }

  .earth {
      top: 15%;
      left: 15%;
      width: 50%;
      height: 50%;
      animation: orbit 36.5s linear infinite;
      transform-origin: 50% 50%;
  }

  .moon {
      top: 60%;
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
      top: 14%;
      right: 10%;
      width: 8%;
      height: 8%;
      background-color: ${darkMode ? "#fffdfd" : "#000000"};
      box-shadow: 0 0 1.5em ${darkMode ? "#e7e7e7" : "#000000"};
  }

  .moon::before {
      top: 3%;
      right: 25%;
      width: 3%;
      height: 3%;
      background-color: ${darkMode ? "silver" : "#000000"};
      box-shadow: 0 0 1.5em ${darkMode ? "#e7e7e7" : "#000000"};
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }

  /* Smaller screen adjustments */
  @media (max-width: 480px) {
    .solar-container {
      max-width: 280px;
      font-size: calc(5px + 1vw);
    }

    .earth {
      top: 20%;
      left: 20%;
      width: 55%;
      height: 55%;
    }

    .moon {
      top: 65%;
      right: 12%;
      width: 18%;
      height: 18%;
    }

    .earth::before {
      top: 16%;
      right: 12%;
      width: 10%;
      height: 10%;
    }

    .moon::before {
      top: 5%;
      right: 28%;
      width: 4%;
      height: 4%;
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
