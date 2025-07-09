import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Blog CMS',
      description:
        'Content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.',
      image:
        'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full-Stack',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description:
        'Secure mobile banking application with biometric authentication, transaction history, and budget tracking.',
      image:
        'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description:
        'Intelligent chat assistant powered by machine learning with natural language processing and context awareness.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile', 'AI/ML'];

  const filteredProjects = projects.filter((project) => {
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

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

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

        {/* Filters and Search */}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <AnimatedSection className="mb-16" delay={0.3}>
            <motion.h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ⭐ Featured Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    darkMode={darkMode}
                    featured
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <AnimatedSection delay={0.5}>
            <motion.h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              All Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    darkMode={darkMode}
                  />
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
};

interface ProjectCardProps {
  project: any;
  darkMode: boolean;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  darkMode,
  featured = false,
}) => {
  return (
    <InteractiveCard
      className={`group relative overflow-hidden rounded-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg ${
        featured ? 'ring-2 ring-gradient-to-r from-blue-600 to-purple-600' : ''
      }`}
      hoverScale={1.05}
      rotateOnHover={true}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Featured Badge */}
        {featured && (
          <motion.div
            className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 
            text-white px-3 py-1 rounded-full text-sm font-medium"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured
          </motion.div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Overlay Links */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 
                 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 
                 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: -360 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <motion.h3
              className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.span
              className={`px-2 py-1 rounded-full text-xs font-medium 
              ${
                darkMode
                  ? 'bg-blue-900/50 text-blue-300'
                  : 'bg-blue-100 text-blue-800'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {project.category}
            </motion.span>
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
              <motion.span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium 
                ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm font-medium ${
                darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              } transition-colors duration-200`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Github size={16} className="mr-2" />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm font-medium ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              } transition-colors duration-200`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </InteractiveCard>
  );
};

export default Projects;
