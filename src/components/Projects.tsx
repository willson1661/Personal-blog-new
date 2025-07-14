import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Sales Admin Panel',
      description:
        'A comprehensive sales administration panel built with React, providing dashboard functionality for managing sales data, analytics, and administrative tasks.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fsale%20admin%20panel.png?alt=media&token=1b61850f-0685-45cd-b95a-b6be8c512ec3',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://delicate-flan-051188.netlify.app/',
    },
    {
      id: 2,
      title: 'Job AI Insight Tracker',
      description:
        'An AI-powered job application management system that helps users track their job applications, analyze application insights, and manage their job search process efficiently.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fai%20job%20tracjer.png?alt=media&token=4932ad80-64ff-4cd4-8899-ab96b4d360d2',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://chic-custard-7ccaa6.netlify.app/',
    },
    {
      id: 3,
      title: 'Zap Weather App',
      description:
        'A modern weather application built with Vite, React, and TypeScript that provides real-time weather information and forecasts with a clean, responsive interface.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fweather.png?alt=media&token=d3bb02a8-a7e3-4347-a0c5-8477eabf2ae1',
      technologies: ['React', 'TypeScript', 'Weather API'],
      demo: 'https://melodic-puffpuff-d15e43.netlify.app/',
    },
    {
      id: 4,
      title: 'Crave Food Kart',
      description:
        'A food discovery and ordering platform that allows users to browse different food categories, explore restaurants, and place orders for their favorite meals.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2FCrave%20Food%20Kart.png?alt=media&token=700e0239-420a-40bd-9c93-b38f0c956bda',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://imaginative-semolina-527153.netlify.app/',
    },
    {
      id: 5,
      title: 'EatoHub Blog',
      description:
        'A modern blog platform focused on food and culinary experiences, featuring responsive design and engaging content presentation.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Featohub%20blog.png?alt=media&token=dddad4cc-125f-43e4-a84e-3b25f6c5dada',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://68724db615a725e0ced0d889--vocal-bubblegum-282481.netlify.app/',
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description:
        'An AI-powered customer support chatbot system that provides automated customer service solutions with intelligent conversation handling and support ticket management.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fai%20chat.png?alt=media&token=6b1d18bc-d018-4466-b833-1b510a600d67',
      technologies: ['React', 'TypeScript', 'AI Integration'],
      demo: 'https://6872515af0a864e08b68c470--roaring-cranachan-2271ff.netlify.app/',
    },
    {
      id: 7,
      title: 'Modern Ice Cream Billing Application',
      description:
        'A sleek, modern web application designed for ice cream shops to manage billing and transactions. Features a clean, user-friendly interface optimized for point-of-sale operations in ice cream parlors and frozen dessert businesses.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Flickees.png?alt=media&token=4ab99829-f478-4316-a4f8-669c3d380f9f',
      technologies: ['React', 'TypeScript', 'AI Integration'],
      demo: 'https://magical-quokka-499031.netlify.app/',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 right-10 w-96 h-96 ${
            darkMode ? 'bg-purple-600/5' : 'bg-purple-200/20'
          } rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl ${
                darkMode ? 'bg-gray-900/50' : 'bg-white'
              } shadow-lg backdrop-blur-sm border ${
                darkMode ? 'border-gray-700/50' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={24} />
                  </motion.a>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-gray-800/80 text-gray-200'
                        : 'bg-white/80 text-gray-800'
                    } backdrop-blur-sm`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-4 line-clamp-3 leading-relaxed`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Link */}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-medium ${
                    darkMode
                      ? 'text-orange-400 hover:text-orange-300'
                      : 'text-orange-600 hover:text-orange-700'
                  } transition-colors duration-200`}
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Projects;
