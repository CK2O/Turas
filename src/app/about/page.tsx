import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-900 text-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutus.jpeg"
            alt="About Us Background"
            fill
            className="object-cover opacity-20"
            priority
            quality={100}
          />
        </div>

        {/* Content with relative positioning to appear above the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">TURAS</h1>
          <div className="text-center mb-12">
            <p className="text-5xl md:text-6xl text-emerald-300 italic font-medium tracking-widest mb-4 drop-shadow-[0_0_0.3rem_#10b981]">&quot;Is turas é an saol, ní ceann scríbe.&quot;</p>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">&quot;Life is a journey, not a destination.&quot;</p>
            <p className="text-gray-400 mt-2 tracking-wide">- Seanfhocal Gaeilge</p>
          </div>
          <div className="text-lg space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
              <p className="text-gray-300">
                <strong className="text-white">Founded in 2024</strong>, Turas is the result of 1000x iterations
                focused on entrepreneurship, business development, and investment. We focus on digital projects, consulting, with long-term, sustainability in mind.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Approach</h2>
              <p className="text-gray-300">
                We aim to build sustianable business. We focus our business and investments  
                around three key principles:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 ml-4 space-y-2">
                <li>Financial sustainability through disciplined decision-making</li>
                <li>Transparency and simplification</li>
                <li>Long-term value creation over short-term gains</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Focus Areas</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="bg-gray-700/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Digital Ventures</h3>
                  <p className="text-gray-300">Building and investing in scalable digital solutions that solve real business challenges.</p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Business Development</h3>
                  <p className="text-gray-300">Strategic growth consulting and market expansion strategies for emerging companies.</p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Innovation Consulting</h3>
                  <p className="text-gray-300">Helping businesses transform ideas into sustainable, market-ready solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}