import React from 'react';
import { ArrowDown, Download, Play, Target } from 'lucide-react';
import ThreeHero from './ThreeHero';
import ThreeProfileImage from './ThreeProfileImage';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/Willson%20Raj%20Manda%20Resume.pdf?alt=media&token=52103178-1501-4598-a0ce-fe3d95a3b1b8';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden
      ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
    >
      <ThreeHero darkMode={darkMode} />
      {/* Background Pattern */}
      <div className="absolute opacity-10">
        <div
          className="absolute"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              darkMode ? '#3b82f6' : '#1e40af'
            } 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
            
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
              ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Willson Raj Manda
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } leading-relaxed`}
            >
              Front-end Developer & Web Designer
            </p>

            <p
              className={`text-lg mb-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-700'
              } max-w-2xl`}
            >
              With over 2.3 years of experience in modern web technologies, I
              build clean, functional, and user-centered digital experiences
              that bring ideas to life through thoughtful design and
              development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                className={`group ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                } 
  px-8 py-4 rounded-lg font-semibold border-2 ${
    darkMode ? 'border-gray-700' : 'border-gray-200'
  } 
  hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center`}
              >
                <Download
                  size={20}
                  className="mr-2 group-hover:translate-y-1 transition-transform"
                />
                Download Resume
              </button>
            </div>

            {/* Stats */}
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <ThreeProfileImage 
                darkMode={darkMode}
                imageUrl="https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/WhatsApp%20Image%202025-04-21%20at%2011.09.01_c18a96a3%20(1).png?alt=media&token=4df8c10b-85d6-4aa2-af15-bcb9895067da"
              />

              {/* Floating Elements */}
              <div
                className={`absolute -top-4 -right-4 w-16 h-16 ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-500'
                } 
                rounded-full flex items-center justify-center text-white text-2xl animate-bounce`}
              >
                ⚡
              </div>
              <div
                className={`absolute -bottom-4 -left-4 w-12 h-12 ${
                  darkMode ? 'bg-purple-600' : 'bg-purple-500'
                } 
                rounded-full flex items-center justify-center text-white text-xl animate-pulse`}
              >
                🚀
              </div>
              
              {/* Interactive hint */}
              <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Move your cursor over me!
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className={`${
              darkMode
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            } 
              transition-colors duration-300 animate-bounce`}
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
