import React, { useState } from 'react';
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
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com',
      color: 'hover:text-indigo-600',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className=" mb-16">
          <h2
            className={`text-4xl text-center font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            CONTACT
          </h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 w-[500px] mx-auto">
          {/* Contact Information */}
          <div>
            <h3
              className={`text-2xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Connect
            </h3>

            <p
              className={`text-lg mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed`}
            >
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
              Feel free to reach out through any of the channels below.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    info.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={`flex items-center p-4 rounded-lg ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  } 
                    transition-all duration-300 hover:scale-105 group`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode ? 'bg-blue-600' : 'bg-blue-100'
                    } mr-4 
                    group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon
                      className={`w-6 h-6 ${
                        darkMode ? 'text-white' : 'text-blue-600'
                      }`}
                    />
                  </div>
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
              ))}
            </div>

            {/* Social Links */}
            <div></div>

            {/* Availability Status */}
          </div>

          {/* Contact Form */}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default Contact;
