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
    month: 'Jan',
    status: 'completed',
    url: 'northfornomad.com',
    previewImage: '/images/northfornomad-preview.png'
  },
  {
    title: 'TURAS BV',
    description: 'Corporate portfolio site',
    month: 'Feb',
    status: 'completed',
    url: 'turas.be',
    previewImage: '/images/turas-preview.png'
  },
  {
    title: 'TollayTrade',
    description: 'Cambodian marketplace',
    month: 'Mar',
    status: 'completed',
    url: 'cam-a185dob25-cormacs-projects-4ad5b4bc.vercel.app',
    previewImage: '/images/tollay-trade-preview.png'
  },
  {
    title: 'Dibs',
    description: 'Wellness class booking',
    month: 'Apr',
    status: 'completed',
    url: 'dibs-ntlmos7pu-cormacs-projects-4ad5b4bc.vercel.app',
    previewImage: '/images/dibs-preview.png'
  },
  {
    title: 'Clarifiid',
    description: 'AI guided goals',
    month: 'May',
    status: 'completed',
    url: 'clarifiid.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Immoptie',
    description: 'Real estate platform',
    month: 'Jun',
    status: 'planned',
    url: 'immoptie.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Calar.ie',
    description: 'AI calorie tracking',
    month: 'Jul',
    status: 'planned',
    url: 'calar.ie',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'HH Coffee',
    description: 'Premium coffee',
    month: 'Aug',
    status: 'planned',
    url: 'hhcoffee.eu',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Zenf.it',
    description: 'Tested supplements',
    month: 'Sep',
    status: 'planned',
    url: 'zenf.it',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Oct',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Nov',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'TBD',
    description: 'Coming Soon',
    month: 'Dec',
    status: 'planned',
    previewImage: '/images/coming-soon.png'
  }
];

// Group projects by quarter
const quarters = [
  { name: 'Q1 2025', subtitle: 'Jan - Mar', projects: projects.slice(0, 3) },
  { name: 'Q2 2025', subtitle: 'Apr - Jun', projects: projects.slice(3, 6) },
  { name: 'Q3 2025', subtitle: 'Jul - Sep', projects: projects.slice(6, 9) },
  { name: 'Q4 2025', subtitle: 'Oct - Dec', projects: projects.slice(9, 12) }
];

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
          <h2 className="text-4xl font-bold mb-4">2025 Product Pipeline</h2>
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
                style={{ width: `${((projects.filter(p => p.status === 'completed').length + projects.filter(p => p.status === 'in-progress').length * 0.5) / 12) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quarterly Sections */}
        <div className="space-y-16">
          {quarters.map((quarter, quarterIndex) => (
            <div key={quarter.name} className="relative">
              {/* Quarter Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Q{quarterIndex + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{quarter.name}</h3>
                  <p className="text-gray-400">{quarter.subtitle}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quarter.projects.map((project, projectIndex) => {
                  const globalIndex = quarterIndex * 3 + projectIndex;
                  return (
                    <div
                      key={globalIndex}
                      className={`group cursor-pointer transition-all duration-300 ${
                        selectedProject === globalIndex ? 'scale-105 z-10' : 'hover:scale-102'
                      }`}
                      onClick={() => setSelectedProject(selectedProject === globalIndex ? null : globalIndex)}
                    >
                      <div className={`bg-gray-800 rounded-xl border transition-all duration-300 overflow-hidden ${
                        selectedProject === globalIndex 
                          ? 'border-blue-500 shadow-xl shadow-blue-500/20' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}>
                        {/* Image Section - Much Larger */}
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

                          {/* Month Badge */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                              {project.month}
                            </div>
                          </div>

                          {/* Overlay for Live Projects */}
                          {project.url && project.status === 'completed' && (
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <a 
                                href={`https://${project.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors transform hover:scale-105"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Visit Live Site →
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Minimal Text Section */}
                        <div className="p-3">
                          <h4 className="font-bold text-base text-white mb-0.5 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs text-gray-500">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Vision?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our product pipeline. We're launching one innovative solution every month. 
              Your project could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
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