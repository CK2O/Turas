import Navigation from '../components/Navigation';
import ProjectTimeline from '../components/ProjectTimeline';

export default function Pipeline() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-12">Project Pipeline 2024-2025</h1>
          
          <div className="bg-white rounded-lg p-8">
            <ProjectTimeline />
          </div>
        </div>
      </div>
    </>
  );
} 