import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'officialwillson05@gmail.com',
      link: 'mailto:officialwillson05@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9052830829',
      link: '',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, Telangana',
      link: '',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },

    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com',
      color: 'hover:text-indigo-600',
    },
  ];

  return (
    <motion.section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gradient-to-br from-black via-black to-black' : 'bg-white'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <motion.h2
            className={`text-4xl text-center font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
          </motion.h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-1 gap-16 w-full max-w-md mx-auto px-4">
          {/* Contact Information */}
          <AnimatedSection delay={0.3}>
            <motion.h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let's Connect
            </motion.h3>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <InteractiveCard hoverScale={1.05}>
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        info.link.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`flex items-center p-4 rounded-lg ${
                        darkMode
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-gray-50 hover:bg-gray-100'
                      } transition-all duration-300 group`}
                    >
                      <motion.div
                        className={`p-3 rounded-lg ${
                          darkMode ? 'bg-blue-600' : 'bg-blue-100'
                        } mr-4`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon
                          className={`w-6 h-6 ${
                            darkMode ? 'text-white' : 'text-blue-600'
                          }`}
                        />
                      </motion.div>
                      <div>
                        <h4
                          className={`font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {info.title}
                        </h4>
                        <p
                          className={`${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
        </div>

        {/* Call to Action */}
      </div>
    </motion.section>
  );
};

export default Contact;
