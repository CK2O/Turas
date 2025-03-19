import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative h-screen w-full overflow-hidden">
        {/* Hero Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building Smart Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              We build products that help you grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/pipeline"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                See Pipeline
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/80 transition-colors border-2 border-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
