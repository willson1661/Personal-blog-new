import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';

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
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            PROJECTS
          </h2>
        </div>

        {/* Filters and Search */}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              ⭐ Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div>
            <h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              All Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
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
    </section>
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
    <div
      className={`group relative overflow-hidden rounded-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } 
      shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 
      ${
        featured ? 'ring-2 ring-gradient-to-r from-blue-600 to-purple-600' : ''
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div
          className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 
          text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"
        ></div>

        {/* Overlay Links */}
        <div
          className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 
               transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 
               transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </a>
        </div>
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
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium ${
              darkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            } 
               transition-colors duration-200`}
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-sm font-medium ${
              darkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-700'
            } 
               transition-colors duration-200`}
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
