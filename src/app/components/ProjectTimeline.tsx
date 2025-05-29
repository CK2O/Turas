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
    description: 'Digital prints marketplace showcasing unique travel photography',
    month: 'Jan 2025',
    status: 'completed',
    url: 'northfornomad.com',
    previewImage: '/images/northfornomad-preview.png'
  },
  {
    title: 'TURAS BV',
    description: 'Corporate website showcasing services and project portfolio',
    month: 'Feb 2025',
    status: 'completed',
    url: 'turas.be',
    previewImage: '/images/turas-preview.png'
  },
  {
    title: 'TollayTrade',
    description: 'Premium Cambodian products with complete transparency',
    month: 'Mar 2025',
    status: 'completed',
    url: 'cam-a185dob25-cormacs-projects-4ad5b4bc.vercel.app',
    previewImage: '/images/tollaytrade-preview.png'
  },
  {
    title: 'Dibs',
    description: 'Making connections easy, one class at a time',
    month: 'Apr 2025',
    status: 'completed',
    url: 'dibs-ntlmos7pu-cormacs-projects-4ad5b4bc.vercel.app',
    previewImage: '/images/dibs-preview.png'
  },
  {
    title: 'Klaarify',
    description: 'AI guided goals and tasks',
    month: 'May 2025',
    status: 'in-progress',
    url: 'klaarify.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Immoptie',
    description: 'Sell real estate easy',
    month: 'Jun 2025',
    status: 'planned',
    url: 'immoptie.com',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Calar.ie',
    description: 'AI guided calorie tracking',
    month: 'Jul 2025',
    status: 'planned',
    url: 'calar.ie',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'HH Coffee',
    description: 'Best coffee in Europe',
    month: 'Aug 2025',
    status: 'planned',
    url: 'hhcoffee.eu',
    previewImage: '/images/coming-soon.png'
  },
  {
    title: 'Zenf.it',
    description: '3rd party tested supplements',
    month: 'Sep 2025',
    status: 'planned',
    url: 'zenf.it',
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
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'in-progress': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
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
    <div className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">2025 Product Roadmap</h2>
          <p className="text-xl text-gray-400 mb-6">Building 12 innovative products in 12 months</p>
          
          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">January</span>
              <span className="text-sm text-gray-400">December</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 via-blue-500 to-gray-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(projects.filter(p => p.status === 'completed').length / 12) * 100}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-green-400">{projects.filter(p => p.status === 'completed').length} Completed</span>
              <span className="text-blue-400">{projects.filter(p => p.status === 'in-progress').length} In Progress</span>
              <span className="text-gray-400">{projects.filter(p => p.status === 'planned').length} Planned</span>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedProject === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className={`bg-gray-800 rounded-lg border transition-all duration-300 ${
                selectedProject === index 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {/* Header */}
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400">{project.month}</span>
                    <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)} {project.status === 'in-progress' ? 'Building' : project.status === 'completed' ? 'Live' : 'Planned'}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                </div>

                {/* Preview */}
                <div className="relative h-32 bg-gray-700">
                  <Image
                    src={project.previewImage || '/images/coming-soon.png'}
                    alt={project.title}
                    fill
                    className="object-cover rounded-b-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />
                  
                  {/* Overlay for completed projects */}
                  {project.url && project.status === 'completed' && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg flex items-center justify-center">
                      <a 
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Site →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our journey of rapid innovation. Whether you need a marketplace, SaaS platform, or custom solution, 
              we bring the same speed and quality to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/projects"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 