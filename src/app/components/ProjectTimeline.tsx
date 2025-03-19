'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  quarter: string;
  status: 'planned' | 'in-progress';
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Coming Soon',
    quarter: 'Q2 2024',
    status: 'planned'
  },
  {
    title: 'Project 2',
    description: 'Coming Soon',
    quarter: 'Q3 2024',
    status: 'planned'
  },
  {
    title: 'Project 3',
    description: 'Coming Soon',
    quarter: 'Q3 2024',
    status: 'planned'
  },
  {
    title: 'Project 4',
    description: 'Coming Soon',
    quarter: 'Q4 2024',
    status: 'planned'
  },
  {
    title: 'Project 5',
    description: 'Coming Soon',
    quarter: 'Q4 2024',
    status: 'planned'
  },
  {
    title: 'Project 6',
    description: 'Coming Soon',
    quarter: 'Q1 2025',
    status: 'planned'
  },
  {
    title: 'Project 7',
    description: 'Coming Soon',
    quarter: 'Q1 2025',
    status: 'planned'
  },
  {
    title: 'Project 8',
    description: 'Coming Soon',
    quarter: 'Q2 2025',
    status: 'planned'
  },
  {
    title: 'Project 9',
    description: 'Coming Soon',
    quarter: 'Q2 2025',
    status: 'planned'
  }
];

export default function ProjectTimeline() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px] p-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute h-1 bg-black w-full top-1/2 transform -translate-y-1/2"></div>
          
          {/* Projects */}
          <div className="relative grid grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative pt-20"
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                
                {/* Quarter label */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm font-bold text-black">
                  {project.quarter}
                </div>
                
                {/* Project card */}
                <div className="bg-white border-2 border-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  {project.image && (
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    {project.status === 'planned' ? 'Planned' : 'In Progress'}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 