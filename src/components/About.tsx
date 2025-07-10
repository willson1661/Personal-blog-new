import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                I'm a dedicated developer who believes in the power of clean code and 
                thoughtful design. With years of experience in modern web technologies, 
                I specialize in creating applications that not only look great but 
                perform exceptionally.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a constant desire 
                to learn. I enjoy tackling complex problems and turning ideas into 
                reality through code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Focused</h4>
                    <p className="text-sm text-gray-600">Goal-oriented approach</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-sm text-gray-600">Quality-driven work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Developer Profile</h3>
                  <p className="text-gray-600">Full-stack expertise</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Frontend Development</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Backend Development</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">UI/UX Design</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Passionate about creating amazing user experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;