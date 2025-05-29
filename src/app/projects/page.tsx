import Image from 'next/image';
import Navigation from '../components/Navigation';
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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold border-b border-white pb-2">Business Analytics</h2>
              <a 
                href="https://www.linkedin.com/in/cormac-kerins/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <a 
                  href="https://www.amfori.org/en/solutions/governance/amfori-sustainapass"
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
                <h3 className="text-2xl font-bold mb-4">amfori SustainaPass</h3>
                <p className="text-gray-300 mb-4">Digital platform facilitating sustainable trade best practices.</p>
                <p className="text-gray-400 mb-4 italic">Supported product team from concept to launch. Coordinated with suppliers and developers.</p>
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
                <p className="text-gray-400 mb-4 italic">Supported product team from concept to launch. Coordinated with suppliers and developers.</p>
              </div>
            </div>
          </section>

          {/* Indie Products and Sites Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold border-b border-white pb-2">Indie Sites and Products</h2>
              <Link 
                href="/pipeline" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project Pipeline →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                <a 
                  href="https://cam-a185dob25-cormacs-projects-4ad5b4bc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/tollaytrade-preview.png"
                    alt="TollayTrade"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">TollayTrade</h3>
                <p className="text-gray-300 mb-4">Premium Cambodian products with complete transparency. Trading with balance.</p>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-gray-400 italic">Developed the marketplace platform.</p>
                  <a 
                    href="https://cam-a185dob25-cormacs-projects-4ad5b4bc.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                <a 
                  href="https://dibs-ntlmos7pu-cormacs-projects-4ad5b4bc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/dibs-preview.png"
                    alt="Dibs"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
                <h3 className="text-2xl font-bold mb-4">Dibs</h3>
                <p className="text-gray-300 mb-4">Making connections easy, one class at a time. Connect with students and build your community.</p>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-gray-400 italic">Developed the connection platform.</p>
                  <a 
                    href="https://dibs-ntlmos7pu-cormacs-projects-4ad5b4bc.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Legacy Projects */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-400">Previous Projects</h3>
              <div className="grid md:grid-cols-2 gap-8 opacity-75">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                  <a 
                    href="https://northfornomad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/northfornomad-preview.png"
                      alt="North For Nomad"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-4">North For Nomad</h3>
                  <p className="text-gray-300 mb-4">Digital prints marketplace showcasing unique travel photography and art prints.</p>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-gray-400 italic">Developed the digital marketplace.</p>
                    <a 
                      href="https://northfornomad.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      northfornomad.com →
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                  <a 
                    href="https://turas.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-64 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/turas-preview.png"
                      alt="TURAS BV"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-4">TURAS BV</h3>
                  <p className="text-gray-300 mb-4">Corporate website showcasing our services and project portfolio.</p>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-gray-400 italic">Developed the corporate website.</p>
                    <a 
                      href="https://turas.be"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      turas.be →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Management Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold border-b border-white pb-2">Product Management</h2>
              <a 
                href="https://www.linkedin.com/in/cormac-kerins/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
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
                <p className="text-gray-300 mb-4">Launch of multi-year project of high precision vacuum solutions for Scientific and R&D applications.</p>
                <p className="text-gray-400 mt-auto italic">Product Manager leading development and market introduction.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
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
                <p className="text-gray-300 mb-4">Launched award winning products for sustainable construction and heavy-duty applications.</p>
                <p className="text-gray-400 mt-auto italic">Product Manager responsible for product development and launch strategy.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
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
                <p className="text-gray-300 mb-4">Product development and management of a product portfolio at Atlas Copco.</p>
                <p className="text-gray-400 mt-auto italic">Strategic Product Manager for the portable compressor range.</p>
              </div>
            </div>
          </section>

          {/* Real Estate Investment Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold border-b border-white pb-2">Real Estate Investment</h2>
              <Link 
                href="https://www.instagram.com/turasbv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Projects →
              </Link>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1 flex flex-col">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/CrvDNX9N3fg/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/CrvDNX9N3fg/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Real Estate Development</h3>
                <p className="text-gray-300 mb-4">Property development and management.</p>
                <p className="text-gray-400 mt-auto italic">Owner, helping hand in painting and renovations.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1 flex flex-col">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/COWF26OBi6r/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/COWF26OBi6r/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Renovation Projects</h3>
                <p className="text-gray-300 mb-4">High-quality renovations and property improvements.</p>
                <p className="text-gray-400 mt-auto italic">Owner, helping hand in painting and renovations.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1 flex flex-col">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/p/B6KjK_znwKN/"
                  data-instgrm-version="14"
                >
                  <a href="https://www.instagram.com/p/B6KjK_znwKN/">View on Instagram</a>
                </blockquote>
                <h3 className="text-2xl font-bold mt-6 mb-4">Rental Properties</h3>
                <p className="text-gray-300 mb-4">Long term rental properties.</p>
                <p className="text-gray-400 mt-auto italic"></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 