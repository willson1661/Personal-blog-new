import React from 'react';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

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
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}
          >
            Passionate developer with a keen eye for design and a love for
            creating exceptional digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                My Journey
              </h3>
              <p
                className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}
              >
                I've evolved into a front-end developer who bridges the gap
                between technical excellence and user experience. My approach
                combines analytical thinking with creative problem-solving.
              </p>
              <p
                className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through technical writing and mentoring.
              </p>
            </div>

            {/* Achievements */}
          </div>

          {/* Skills */}
          <div>
            <h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } 
                  shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon
                      className={`w-6 h-6 mr-3 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    />
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
                      <div key={itemIndex} className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            darkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}
                        ></div>
                        <span
                          className={`text-sm ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3
            className={`text-2xl font-bold mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            WORK EXPERIENCE
          </h3>
          <div className="relative">
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
              ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
            ></div>

            {[
              {
                year: 'Dec 2022 – Jan 2024',
                title: 'Front-end Developer',
                company: 'Tech Mahindra',
                description:
                  'Developed responsive web applications using ReactJS and modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality user interfaces. Implemented component-based architecture and optimized application performance for better user experience.',
              },
              {
                year: 'Oct 2021 – Nov 2022',
                title: 'Web-Designer',
                company: 'Tech Mahindra',
                description:
                  'Creating web pages that seamlessly adapt to iPad screen dimensions, enhancing user experience. Developing interactive email templates to engage and captivate recipients. Collaborated with designers to craft clean interfaces and intuitive interactions, resulting in enhanced userexperiences. Utilized HTML5, CSS3, and jQuery & JavaScript to seamlessly integrate responsive UI designs into iPad dimensions.',
              },
              {
                year: 'Nov 2020 – Oct 2021',
                title: 'Freelance Web Designer',
                company: 'Self-employed',
                description:
                  'Provided end-to-end web design services for small businesses and startups. Managed client relationships, project timelines, and deliverables. Created custom websites using HTML, CSS, and JavaScript while ensuring responsive design principles.',
              },
              {
                year: 'May 2019 – Oct 2020',
                title: 'BPO Executive',
                company: 'Private BPO Firm',
                description:
                  'Handled customer service operations and technical support for international clients. Maintained high customer satisfaction ratings through effective communication and problem-solving skills. Developed strong attention to detail and multitasking abilities.',
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 
                ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } 
                    shadow-md hover:shadow-lg transition-shadow duration-300`}
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
                      className={`text-sm mb-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-700'
                      } leading-relaxed`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
                  ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} border-4 ${
                    darkMode ? 'border-gray-800' : 'border-gray-50'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
