'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  month: string;
  status: 'completed' | 'in-progress' | 'planned';
  url?: string;
  icon?: string;
}

const projects: Project[] = [
  {
    title: 'North For Nomad',
    description: 'Digital prints marketplace',
    month: 'Month 1',
    status: 'completed',
    url: 'northfornomad.com',
    icon: '🖼️'
  },
  {
    title: 'TURAS BV',
    description: 'Corporate website',
    month: 'Month 2',
    status: 'completed',
    url: 'turas.be',
    icon: '🏢'
  },
  {
    title: 'Klaarify',
    description: 'AI guided goals and tasks',
    month: 'Month 3',
    status: 'in-progress',
    url: 'klaarify.com',
    icon: '🎯'
  },
  {
    title: 'Immoptie',
    description: 'Sell real estate easy',
    month: 'Month 4',
    status: 'planned',
    url: 'immoptie.com',
    icon: '🏠'
  },
  {
    title: 'Calar.ie',
    description: 'AI guided calorie tracking',
    month: 'Month 5',
    status: 'planned',
    url: 'calar.ie',
    icon: '🥗'
  },
  {
    title: 'HH Coffee',
    description: 'Best coffee in Europe',
    month: 'Month 6',
    status: 'planned',
    url: 'hhcoffee.eu',
    icon: '☕'
  },
  {
    title: 'Zenf.it',
    description: '3rd party tested supplements',
    month: 'Month 7',
    status: 'planned',
    url: 'zenf.it',
    icon: '💪'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Month 8',
    status: 'planned',
    icon: '🚀'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Month 9',
    status: 'planned',
    icon: '🚀'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Month 10',
    status: 'planned',
    icon: '🚀'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Month 11',
    status: 'planned',
    icon: '🚀'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Month 12',
    status: 'planned',
    icon: '🚀'
  }
];

export default function ProjectTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-x-auto bg-gray-900 text-white py-20 scrollbar-hide">
      <div className="min-w-[2400px] px-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full top-1/2 transform -translate-y-1/2"></div>
          
          {/* Projects */}
          <div className="relative flex space-x-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div 
                    className={`w-4 h-4 rounded-full ${
                      project.status === 'completed' ? 'bg-green-500' : 
                      project.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-500'
                    } ${hoveredIndex === index ? 'animate-pulse' : ''}`}
                  />
                  {hoveredIndex === index && (
                    <div 
                      className={`absolute w-6 h-6 -top-1 -left-1 rounded-full ${
                        project.status === 'completed' ? 'bg-green-500' : 
                        project.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-500'
                      } opacity-30 animate-ping`}
                    />
                  )}
                </div>
                
                {/* Month label */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-400">
                  {project.month}
                </div>
                
                {/* Project card */}
                <div 
                  className={`mt-20 w-48 bg-gray-800 border ${
                    project.status === 'completed' ? 'border-green-500' : 
                    project.status === 'in-progress' ? 'border-blue-500' : 'border-gray-700'
                  } rounded-lg p-4 transform transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-105 -translate-y-2' : ''
                  }`}
                >
                  <div className="text-3xl mb-3 text-center filter drop-shadow-lg">
                    {project.icon}
                  </div>
                  <div className={`text-xs font-medium mb-2 ${
                    project.status === 'completed' ? 'text-green-400' : 
                    project.status === 'in-progress' ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {project.description}
                  </p>
                  {project.url && (
                    <a 
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {project.url} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 