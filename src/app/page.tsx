import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Subtle gradient accents */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full pt-16">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Product Builder
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  & Consultant
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                I build and launch digital products &mdash; from idea to live product.
                Founder of TURAS BV, based in Antwerp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/about"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
              >
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://github.com/CK2O"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </span>
              </a>
            </div>

            {/* Company Info */}
            <div className="mt-12 animate-fade-in-up delay-400">
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                TURAS BV &mdash; building products since 2024. Based in Antwerp, Belgium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
