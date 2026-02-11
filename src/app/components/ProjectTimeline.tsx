'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  month: string;
  status: 'completed' | 'in-progress' | 'planned';
  url?: string;
  githubUrl?: string;
  previewImage?: string;
}

const allProjects: Project[] = [
  {
    title: 'North For Nomad',
    description: 'Digital prints marketplace',
    month: '',
    status: 'completed',
    url: 'northfornomad.com',
    previewImage: '/images/northfornomad-preview.png'
  },
  {
    title: 'TURAS BV',
    description: 'Corporate portfolio site',
    month: '',
    status: 'completed',
    url: 'turas.be',
    githubUrl: 'https://github.com/CK2O/Turas',
    previewImage: '/images/turas-preview.png'
  },
  {
    title: 'TollayTrade',
    description: 'Cambodian marketplace',
    month: '',
    status: 'completed',
    url: 'tollaytrade.com',
    previewImage: '/images/tollay-trade-preview.png'
  },
  {
    title: 'Dibs',
    description: 'Book real life experiences',
    month: '',
    status: 'completed',
    url: 'mydibs.io',
    previewImage: '/images/dibs-preview.png'
  },
  {
    title: 'Clarifiid',
    description: 'AI guided goals',
    month: '',
    status: 'completed',
    url: 'clarifiid.com',
    githubUrl: 'https://github.com/CK2O/clarifiid-checkin',
    previewImage: '/images/clarifiid.jpg'
  },
  {
    title: 'Moov-ing',
    description: 'Real estate platform',
    month: '',
    status: 'planned',
    url: 'moov-ing.com',
    githubUrl: 'https://github.com/CK2O/moov-ing',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Calar.ie',
    description: 'AI calorie tracking',
    month: '',
    status: 'planned',
    url: 'calar.ie',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'HH Coffee',
    description: 'Premium coffee',
    month: '',
    status: 'planned',
    url: 'hhcoffee.eu',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Zenf.it',
    description: 'Tested supplements',
    month: '',
    status: 'planned',
    url: 'zenf.it',
    previewImage: '/images/coming-soon.png'
  }
];

// Filter out TBD projects
const projects = allProjects.filter(p => p.title !== 'TBD');

export default function ProjectTimeline() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/50';
      case 'in-progress': return 'text-blue-400 bg-blue-500/20 border-blue-500/50';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'in-progress': return '⚡';
      default: return '📅';
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Product Pipeline</h2>
          <p className="text-xl text-gray-400 mb-8">Building the future, one product at a time</p>

          {/* Overall Progress */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-green-400">{projects.filter(p => p.status === 'completed').length} Live</span>
              <span className="text-sm text-blue-400">{projects.filter(p => p.status === 'in-progress').length} Building</span>
              <span className="text-sm text-gray-400">{projects.filter(p => p.status === 'planned').length} Planned</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 via-blue-500 to-gray-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${((projects.filter(p => p.status === 'completed').length + projects.filter(p => p.status === 'in-progress').length * 0.5) / projects.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedProject === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className={`bg-gray-800 rounded-xl border transition-all duration-300 overflow-hidden ${
                selectedProject === index
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {/* Image Section */}
                <div className="relative h-80 bg-gray-700">
                  <Image
                    src={project.previewImage || '/images/coming-soon.png'}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1.5 rounded-lg text-sm border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                    </div>
                  </div>

                  {/* Overlay for Live Projects */}
                  {project.status === 'completed' && (project.url || project.githubUrl) && (
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.url && (
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors transform hover:scale-105"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visit Site →
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors transform hover:scale-105 flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Text Section */}
                <div className="p-4">
                  <h4 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold mb-4">Have an idea for a product?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always looking for interesting projects to build. Get in touch and let's talk about yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
