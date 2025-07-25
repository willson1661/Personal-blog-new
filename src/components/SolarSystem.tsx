import React from "react";

interface SolarSystemProps {
  darkMode: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ darkMode }) => {
  const solarSystemStyles = `
  .solar-container {
    /* Use relative sizing and center the container */
    font-size: calc(4px + 0.6vw);
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    aspect-ratio: 1 / 1; /* Keep square shape */
    position: relative;
    margin: 0 auto;
  }

  .sun {
    position: absolute;
    /* Use % positioning instead of fixed em */
    top: 40%;
    left: 50%;
    width: 25%;
    height: 25%;
    background-color: ${darkMode ? "#2e2e2c" : "#000000"};
    border-radius: 50%;
    box-shadow: 0 0 0.6em ${darkMode ? "white" : "#000000"};
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
    top: 10%;
    left: 10%;
    width: 60%;
    height: 60%;
    animation: orbit 36.5s linear infinite;
    transform-origin: 50% 50%;
  }

  .moon {
    top: 60%;
    right: 5%;
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
    /* Position relative to earth's size */
    top: 18%;
    right: 14%;
    width: 10%;
    height: 10%;
    background-color: ${darkMode ? "#fffdfd" : "#000000"};
    box-shadow: 0 0 0.7em ${darkMode ? "#e7e7e7" : "#000000"};
  }

  .moon::before {
    top: 5%;
    right: 20%;
    width: 5%;
    height: 5%;
    background-color: ${darkMode ? "silver" : "#b7b7b7"};
    box-shadow: 0 0 0.7em ${darkMode ? "#e7e7e7" : "#acacac"};
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }

  /* Media Queries for smaller screens */
  @media (max-width: 640px) {
    .solar-container {
      max-width: 280px;
      max-height: 280px;
    }
  }

  @media (max-width: 400px) {
    .solar-container {
      max-width: 180px;
      max-height: 180px;
      font-size: calc(3px + 1vw);
    }

    .earth {
      width: 70%;
      height: 70%;
      top: 15%;
      left: 15%;
    }

    .moon {
      width: 18%;
      height: 18%;
      top: 65%;
      right: 4%;
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
