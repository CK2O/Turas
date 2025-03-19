import Navigation from '../components/Navigation';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Navigation />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-12">Our Projects</h1>

          {/* Business Analytics Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 border-b border-white pb-2">Business Analytics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.amfori.org/en/solutions/tools/amfori-sustainability-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/sustainapass.webp"
                    alt="Sustainapass Platform"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">amfori Sustainapass</h3>
                <p className="text-gray-300 mb-4">Digital platform facilitating sustainable trade best practices.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.amfori.org/en/solutions/governance/amfori-esg-risk-compass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                   <Image
                    src="/images/amfori ESG Risk Compass map.gif"
                    alt="ESG Risk Compass"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">amfori ESG Risk Compass</h3>
                <p className="text-gray-300 mb-4">ESG risk identification for global supply chains.</p>
              </div>
            </div>
          </section>

          {/* Product Management Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 border-b border-white pb-2">Product Management</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.ibericavacuum.com/blogs/news/edwards-expands-its-range-of-next-turbomolecular-pumps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-48 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/TMP.jpg"
                    alt="Turbomolecular Pumps"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">High-Vacuum Systems</h3>
                <p className="text-gray-300 mb-4">Launched high precision vacuum solutions for scientific and R&D applications.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.atlascopco.com/en-ee/construction-equipment/news/e-air-wins-hria-award"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-48 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/e air vsd.jpg"
                    alt="E-Air VSD Compressor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">E-Air VSD - Award winning product launch</h3>
                <p className="text-gray-300 mb-4">Launched award winning product for sustainable construction and heavy-duty applications.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.atlascopco.com/en-uk/construction-equipment/news/small-air-compressors-stage-v-compliant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-48 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/pm atlas copco.webp"
                    alt="Atlas Copco Product Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">Product Management</h3>
                <p className="text-gray-300 mb-4">Strategic product development and management at Atlas Copco.</p>
              </div>
            </div>
          </section>

          {/* Real Estate Investment Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 border-b border-white pb-2">Real Estate Investment</h2>
            <div className="flex flex-wrap gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/CrvDNX9N3fg/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/CrvDNX9N3fg/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Real Estate Development</h3>
                <p className="text-gray-300">Strategic property development and investment projects.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/COWF26OBi6r/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/COWF26OBi6r/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Renovation Projects</h3>
                <p className="text-gray-300">High-quality renovations and property improvements.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/B6KjK_znwKN/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/B6KjK_znwKN/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Rental Properties</h3>
                <p className="text-gray-300">Premium rental properties in prime locations.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 