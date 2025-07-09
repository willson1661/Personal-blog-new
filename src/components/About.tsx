import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const skills = [
    {
      name: 'Frontend',
      icon: Code,
      items: ['React', 'JavaScript', 'Css', 'Html'],
    },
    {
      name: ' AI & Prompt Engineering',
      icon: Zap,
      items: [
        'ChatGPT (prompt design & automation)',
        'Bolt AI (AI writing & task assistance)',
        'Lovable AI (design & content ideation)',
        'Google Gemini (multi-modal querying & research)',
      ],
    },
    {
      name: 'Design',
      icon: Palette,
      items: ['Figma', 'Adobe Photoshop', 'Adobe Dreamweaver'],
    },
    { name: 'Tools', icon: Coffee, items: ['Github', 'Vercel'] },
  ];

  return (
    <motion.section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={`text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate developer with a keen eye for design and a love for
            creating exceptional digital experiences that make a difference.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection delay={0.3}>
            <div className="mb-8">
              <motion.h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                My Journey
              </motion.h3>
              <motion.p
                className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I've evolved into a front-end developer who bridges the gap
                between technical excellence and user experience. My approach
                combines analytical thinking with creative problem-solving.
              </motion.p>
              <motion.p
                className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through technical writing and mentoring.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={0.5}>
            <motion.h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Skills & Expertise
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <InteractiveCard
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-md`}
                  hoverScale={1.08}
                  rotateOnHover={true}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon
                          className={`w-6 h-6 mr-3 ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        />
                      </motion.div>
                      <h4
                        className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {skill.name}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              darkMode ? 'bg-blue-400' : 'bg-blue-600'
                            }`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          ></motion.div>
                          <span
                            className={`text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </InteractiveCard>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Experience Timeline */}
        <AnimatedSection className="mt-20" delay={0.7}>
          <motion.h3
            className={`text-2xl font-bold mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WORK EXPERIENCE
          </motion.h3>
          <div className="relative">
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
              ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            ></motion.div>

            {[
              {
                year: 'Nov 2022 – Jan 2024',
                title: 'Front-end Developer',
                company: 'Tech Mahindra Co.',
              },
              {
                year: 'Nov 2021 – Oct 2022',
                title: 'Web-Designer',
                company: 'Tech Mahindra Co.',
              },
              {
                year: 'Nov 2020 – Oct 2021',
                title: 'Freelance Web Designer',
                company: 'Self-employed',
              },
              {
                year: 'Nov 2018 – Oct 2019',
                title: 'BPO Executive',
                company: 'Private BPO Firm',
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-8 
                ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <InteractiveCard
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } shadow-md`}
                    hoverScale={1.05}
                  >
                    <div
                      className={`text-sm font-medium mb-1 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {exp.year}
                    </div>
                    <h4
                      className={`font-semibold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {exp.company}
                    </p>
                  </InteractiveCard>
                </div>
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
                  ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} border-4 ${
                    darkMode ? 'border-gray-800' : 'border-gray-50'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </motion.section>
  );
};

export default About;
