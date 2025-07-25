import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

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
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:officialwillson05@gmail.com',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      className={`relative ${
        darkMode ? 'bg-gradient-to-br from-black via-black to-black' : 'bg-gray-50'
      } text-white`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
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
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Section */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <motion.h3
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Willson Raj Manda
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Front-end Developer & Web-Designer passionate about creating
              beautiful, functional, and user-centered digital experiences.
              Let's build something amazing together.
            </motion.p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <InteractiveCard hoverScale={1.1}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 min-w-12 min-h-12 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group flex items-center justify-center"
                      title={social.name}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </a>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={0.4}>
            <motion.h4
              className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 inline-block"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.6}>
            <motion.h4
              className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:officialwillson05@gmail.com"
              className="block text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                officialwillson05@gmail.com
              </motion.a>
              <motion.a
                href=""
                className="block text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ x: 5 }}
              >
                9052820829
              </motion.a>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                39-2-26, Hyderabad, Telangana - 500058, India.
              </motion.p>
            </div>
          </AnimatedSection>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="flex items-center text-gray-600 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 mx-2 text-red-500" />
            </motion.div>
            <span>by Willson Raj Manda</span>
          </motion.div>

          <motion.div
            className="text-gray-600 text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p>&copy; {currentYear} Willson Raj Manda. All rights reserved.</p>
            <p className="text-sm mt-1">Built with React, JavaScript & CSS</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 
          text-white rounded-full shadow-lg z-50 group"
        title="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{
          scale: 1.1,
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
          <ArrowUp className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
