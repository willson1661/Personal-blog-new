import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7ynMK6Q6TZW%2FUEvURNNMpA%3D%3D',
    },

    { icon: Mail, name: 'Email', url: 'mailto:officialwillson05@gmail.com' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`relative ${
        darkMode ? 'bg-gray-900' : 'bg-gray-900'
      } text-white`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Willson Raj Manda
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Front-end Developer & Web-Designer passionate about creating
              beautiful, functional, and user-centered digital experiences.
              Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 
                    hover:scale-110 group"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 
                      hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:officialwillson05@gmail.com"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                officialwillson05@gmail.com
              </a>
              <a
                href=""
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                9052820829
              </a>
              <p className="text-gray-300">
                39-2-26, hyderabad, Telangana-500058, India.
              </p>
            </div>

            {/* Availability Status */}
          </div>
        </div>

        {/* Newsletter Signup */}

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>by Willson Raj Manda</span>
          </div>

          <div className="text-gray-300 text-center md:text-right">
            <p>&copy; {currentYear} Willson Raj Manda. All rights reserved.</p>
            <p className="text-sm mt-1">Built with React, Javascript & Css</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 
          text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 
          transition-all duration-300 z-50 group"
        title="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
