'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  month: string;
  status: 'completed' | 'in-progress' | 'planned';
  url?: string;
  previewImage?: string;
}

const projects: Project[] = [
  {
    title: 'North For Nomad',
    description: 'Digital prints marketplace',
    month: 'Jan 2025',
    status: 'completed',
    url: 'northfornomad.com',
    previewImage: '/images/northfornomad-preview.png'
  },
  {
    title: 'TURAS BV',
    description: 'Corporate website',
    month: 'Feb 2025',
    status: 'completed',
    url: 'turas.be',
    previewImage: '/images/turas-preview.png'
  },
  {
    title: 'Klaarify',
    description: 'AI guided goals and tasks',
    month: 'Mar 2025',
    status: 'in-progress',
    url: 'klaarify.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Immoptie',
    description: 'Sell real estate easy',
    month: 'Apr 2025',
    status: 'planned',
    url: 'immoptie.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Calar.ie',
    description: 'AI guided calorie tracking',
    month: 'May 2025',
    status: 'planned',
    url: 'calar.ie',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'HH Coffee',
    description: 'Best coffee in Europe',
    month: 'Jun 2025',
    status: 'planned',
    url: 'hhcoffee.eu',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Zenf.it',
    description: '3rd party tested supplements',
    month: 'Jul 2025',
    status: 'planned',
    url: 'zenf.it',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Aug 2025',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Sep 2025',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Oct 2025',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Nov 2025',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Dec 2025',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  }
];

export default function ProjectTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-x-auto bg-gray-900 text-white py-8 scrollbar-hide">
      <div className="min-w-[4800px] px-8">
        <div className="relative">
          {/* Timeline structure */}
          <div className="flex items-center justify-between w-full mb-8">
            {projects.map((project, index) => (
              <div key={`timeline-${index}`} className="relative flex-1">
                {/* Connecting line */}
                {index < projects.length - 1 && (
                  <div 
                    className={`absolute h-1 w-full top-4 left-1/2 ${
                      project.status === 'completed' ? 'bg-green-500' : 
                      project.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                  />
                )}
                {/* Month button */}
                <div className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full border-4 ${
                      project.status === 'completed' ? 'border-green-500 bg-green-900' : 
                      project.status === 'in-progress' ? 'border-blue-500 bg-blue-900' : 'border-gray-500 bg-gray-900'
                    } ${hoveredIndex === index ? 'scale-125' : ''} transition-transform duration-200`}
                  />
                  <div className="mt-2 text-sm font-medium text-gray-400">
                    {project.month}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Projects */}
          <div className="relative flex space-x-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative w-[96rem]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project card */}
                <div 
                  className={`w-full bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 group ${
                    hoveredIndex === index ? 'scale-105 ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className={`text-sm font-medium mb-4 ${
                      project.status === 'completed' ? 'text-green-400' : 
                      project.status === 'in-progress' ? 'text-blue-400' : 'text-gray-400'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                  </div>
                  <div className="relative w-full h-80">
                    <Image
                      src={project.previewImage || '/images/coming-soon.png'}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 pt-4">
                    <p className="text-lg text-gray-400 mb-4">
                      {project.description}
                    </p>
                    {project.url && (
                      <a 
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {project.url} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 