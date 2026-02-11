import Image from 'next/image';
import Navigation from '../components/Navigation';

const products = [
  {
    title: 'Clarifiid',
    description: 'AI-powered goal setting and tracking. Helps users break down ambitions into actionable steps with intelligent check-ins.',
    image: '/images/clarifiid.jpg',
    url: 'https://clarifiid.com',
    githubUrl: 'https://github.com/CK2O/clarifiid-checkin',
    tech: ['Next.js', 'AI', 'Supabase'],
  },
  {
    title: 'Dibs',
    description: 'Platform connecting wellness instructors with students. Streamlines class bookings, payments, and community building.',
    image: '/images/dibs-preview.png',
    url: 'https://mydibs.io',
    tech: ['Next.js', 'React', 'Stripe'],
  },
  {
    title: 'North For Nomad',
    description: 'Premium digital prints marketplace featuring stoic philosophy. Full e-commerce with payment integration.',
    image: '/images/northfornomad-preview.png',
    url: 'https://northfornomad.com',
    tech: ['Next.js', 'E-commerce', 'Stripe'],
  },
  {
    title: 'TollayTrade',
    description: 'Premium Cambodian products with full transparency. Ethical sourcing and direct farmer contributions.',
    image: '/images/tollay-trade-preview.png',
    url: 'https://tollaytrade.com',
    tech: ['Next.js', 'React'],
  },
  {
    title: 'TURAS BV',
    description: 'Corporate website for TURAS BV, showcasing the product portfolio and development work.',
    image: '/images/turas-preview.png',
    url: 'https://turas.be',
    githubUrl: 'https://github.com/CK2O/Turas',
    tech: ['Next.js', 'Tailwind'],
  },
  {
    title: 'Moov-ing',
    description: 'Real estate platform for property listings and management.',
    image: '/images/coming-soon.png',
    url: 'https://moov-ing.com',
    githubUrl: 'https://github.com/CK2O/moov-ing',
    tech: ['Next.js', 'React'],
  },
];

const consulting = [
  {
    title: 'Launch of amfori SustainaPass',
    description: 'Digital platform facilitating sustainable trade best practices.',
    detail: 'Consulted on a new platform development from concept to successful launch.',
    image: '/images/sustainapass.webp',
    url: 'https://www.amfori.org/en/solutions/governance/amfori-sustainapass',
  },
  {
    title: 'Launch of amfori ESG Risk Compass',
    description: 'ESG risk identification for global supply chains.',
    detail: 'Consulted on dashboard enhancement including building AI data ingestion pipelines.',
    image: '/images/amfori ESG Risk Compass map.gif',
    url: 'https://www.amfori.org/en/solutions/governance/amfori-esg-risk-compass',
  },
  {
    title: 'Successful Product Launch',
    description: 'Launch of multi-year project of high precision vacuum solutions for Scientific and R&D applications.',
    detail: 'Product Manager that led the successful market introduction.',
    image: '/images/TMP.jpg',
    url: 'https://www.ibericavacuum.com/blogs/news/edwards-expands-its-range-of-next-turbomolecular-pumps',
  },
  {
    title: 'E-Air VSD - Award Winning Launch',
    description: 'Launched award winning products for sustainable construction and heavy-duty applications.',
    detail: 'Led product launch and go to market strategy.',
    image: '/images/e air vsd.jpg',
    url: 'https://www.atlascopco.com/en-ee/construction-equipment/news/e-air-wins-hria-award',
  },
  {
    title: 'Led \u20AC100M+ Product Portfolios',
    description: 'Led product direction for the portable compressor line\u2014balancing market needs, engineering tradeoffs, and commercial impact.',
    detail: 'Strategic Product Manager defining the 5 year roadmap.',
    image: '/images/pm atlas copco.webp',
    url: 'https://www.atlascopco.com/en-uk/construction-equipment/news/small-air-compressors-stage-v-compliant',
  },
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Projects</h1>
            <a
              href="https://github.com/CK2O"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Profile
            </a>
          </div>

          {/* Products I've Built */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold border-b border-white pb-2 mb-8">Products I&apos;ve Built</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.title} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-48 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      {product.url.replace('https://', '')} &rarr;
                    </a>
                    {product.githubUrl && (
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Consulting & Product Management */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold border-b border-white pb-2">Consulting & Product Management</h2>
              <a
                href="https://www.linkedin.com/in/cormac-kerins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile &rarr;
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consulting.map((item) => (
                <div key={item.title} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex flex-col h-full">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-48 mb-6 bg-white/5 rounded-lg overflow-hidden transition-transform hover:scale-105"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <p className="text-gray-400 mt-auto italic">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
