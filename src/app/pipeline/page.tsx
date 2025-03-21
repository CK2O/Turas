import Navigation from '../components/Navigation';
import ProjectTimeline from '../components/ProjectTimeline';

export default function Pipeline() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-8">Pipeline of Products</h1>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <ProjectTimeline />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Interested in adding your project here?</h2>
            <a
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 