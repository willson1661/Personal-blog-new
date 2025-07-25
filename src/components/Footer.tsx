import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection'; // Assuming this is correctly imported
import InteractiveCard from './InteractiveCard'; // Assuming this is correctly imported

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  // Log the darkMode value to the console for debugging
  console.log('Footer: darkMode prop value:', darkMode);

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
      url: 'https://www.linkedin.com/in/willsonrajmanda',
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
        darkMode
          ? 'bg-gradient-to-br from-black via-black to-black text-white'
          : 'bg-gray-50 text-black'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
              className="mb-6 max-w-md leading-relaxed"
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
                      className="p-4 min-w-12 min-h-12 bg-gray-800 rounded-xl flex items-center justify-center"
                      title={social.name}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <social.icon className="w-5 h-5 text-white" />
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
              className="text-lg font-semibold mb-4"
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
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="inline-block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.6}>
            <motion.h4
              className="text-lg font-semibold mb-4"
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
                className="block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                officialwillson05@gmail.com
              </motion.a>
              <motion.a
                href="tel:9052820829"
                className="block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                9052820829
              </motion.a>
              <motion.p
                className=""
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
          className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p>&copy; {currentYear} Willson Raj Manda. All rights reserved.</p>
            <p className="text-sm mt-1">Built with React, JavaScript &amp; CSS</p>
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
