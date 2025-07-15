import React, { useState, memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = memo<ProjectsProps>(({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Sales-admin panel',
      description:
        'A comprehensive sales administration panel built with React, providing dashboard functionality for managing sales data, analytics, and administrative tasks.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fsale%20admin%20panel.png?alt=media&token=1b61850f-0685-45cd-b95a-b6be8c512ec3',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://sales-adminpanel.netlify.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Job AI Insight Tracker',
      description:
        'An AI-powered job application management system that helps users track their job applications, analyze application insights, and manage their job search process efficiently.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fai%20job%20tracjer.png?alt=media&token=4932ad80-64ff-4cd4-8899-ab96b4d360d2',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://jobaiinsighttracker.netlify.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Zap Weather App',
      description:
        'A modern weather application built with Vite, React, and TypeScript that provides real-time weather information and forecasts with a clean, responsive interface.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fweather.png?alt=media&token=d3bb02a8-a7e3-4347-a0c5-8477eabf2ae1',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://zapweatherapp.netlify.app',
      featured: true,
    },
    {
      id: 4,
      title: 'Crave Food Kart',
      description:
        'A food discovery and ordering platform that allows users to browse different food categories, explore restaurants, and place orders for their favorite meals.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2FCrave%20Food%20Kart.png?alt=media&token=700e0239-420a-40bd-9c93-b38f0c956bda',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://cravefoodcart.netlify.app',
      featured: true,
    },
    {
      id: 5,
      title: 'EatoHub Blog',
      description:
        'A modern blog platform for food enthusiasts, featuring content management, user interactions, and responsive design for optimal reading experience.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Featohub%20blog.png?alt=media&token=dddad4cc-125f-43e4-a84e-3b25f6c5dada',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://eatohubblog.netlify.app',
      featured: true,
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description:
        'An AI-powered customer support chatbot system that provides automated customer service solutions with intelligent conversation handling and support ticket management.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Fai%20chat.png?alt=media&token=6b1d18bc-d018-4466-b833-1b510a600d67',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://aichatassistant.netlify.app',
      featured: true,
    },
    {
      id: 7,
      title: 'Modern Ice Cream Billing Application',
      description:
        'A sleek, modern web application designed for ice cream shops to manage billing and transactions. Features a clean, user-friendly interface optimized for point-of-sale operations in ice cream parlors and frozen dessert businesses.',
      image:
        'https://firebasestorage.googleapis.com/v0/b/todoappimagestorage.appspot.com/o/personal%20blog%20projects%20images%2Flickees.png?alt=media&token=4ab99829-f478-4316-a4f8-669c3d380f9f',
          category: 'Frontend',
      technologies: ['React', 'TypeScript', 'AI Integration'],
      demo: 'https://lickees-ice-cream-billing-application.netlify.app',
    },
  ], []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === 'All' || project.category === activeFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeFilter, searchTerm]);

  const { featuredProjects, regularProjects } = useMemo(() => {
    const featured = filteredProjects.filter((project) => project.featured);
    const regular = filteredProjects.filter((project) => !project.featured);
    return { featuredProjects: featured, regularProjects: regular };
  }, [filteredProjects]);

  return (
    <motion.section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
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
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h2>
        </AnimatedSection>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <AnimatedSection className="mb-16" delay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} darkMode={darkMode} featured />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <AnimatedSection delay={0.5}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} darkMode={darkMode} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div
              className={`text-6xl mb-4 ${
                darkMode ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              🔍
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              No projects found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
});

interface ProjectCardProps {
  project: any;
  darkMode: boolean;
  featured?: boolean;
}

const ProjectCard = memo<ProjectCardProps>(({
  project,
  darkMode,
  featured = false,
}) => {
  const handleLinkClick = useCallback(() => {
    window.open(project.demo, '_blank', 'noopener,noreferrer');
  }, [project.demo]);

  return (
    <InteractiveCard
      className={`group relative overflow-hidden rounded-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg ${
        featured ? 'ring-2 ring-gradient-to-r from-blue-600 to-purple-600' : ''
      }`}
      hoverScale={1.02}
      rotateOnHover={false}
    >
      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
        {/* Featured Badge */}
        {featured && (
          <motion.div
            className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 
            text-white px-3 py-1 rounded-full text-sm font-medium"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Featured
          </motion.div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={handleLinkClick}
              className="p-3 bg-white rounded-full text-black shadow-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3
              className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.title}
            </h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium 
              ${
                darkMode
                  ? 'bg-blue-900/50 text-blue-300'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {project.category}
            </span>
          </div>

          <p
            className={`${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } mb-4 line-clamp-3`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium 
                ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <button
              onClick={handleLinkClick}
              className={`flex items-center text-sm font-medium ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              } transition-colors duration-200`}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </button>
          </div>
        </div>
      </motion.div>
    </InteractiveCard>
  );
});

export default Projects;
