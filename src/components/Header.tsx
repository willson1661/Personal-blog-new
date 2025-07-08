import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },

    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${
              darkMode ? 'bg-gray-900/95' : 'bg-white/95'
            } backdrop-blur-md shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              WM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-blue-600'
                } 
                  transition-colors duration-200 font-medium`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7ynMK6Q6TZW%2FUEvURNNMpA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-blue-600'
              } transition-colors`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:officialwillson05@gmail.com"
              className={`${
                darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-blue-600'
              } transition-colors`}
            >
              <Mail size={20} />
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              } 
                hover:scale-110 transition-all duration-200`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium 
                    ${
                      darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    } 
                    transition-colors duration-200`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className={`${
                    darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
