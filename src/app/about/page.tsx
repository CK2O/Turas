import Navigation from '../components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">About TURAS BV</h1>

          <div className="text-lg space-y-6">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <p className="text-gray-300">
                <strong className="text-white">Turas BV was founded in July 2024</strong> as the result of years of entrepreneurship, business 
                development, and investment experience. The company is structured as a flexible, independent holding entity, 
                focusing on digital ventures, real estate investments, and operational strategy. Turas is built on a foundation 
                of financial sustainability and structured decision-making, principles refined through experience in global industries, 
                including time at Atlas Copco.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Does "Turas" Mean?</h2>
              <p className="text-gray-300">
                "Turas" is the Irish word for <strong className="text-white">"journey"</strong>. In both Irish (Gaeilge) and Scottish Gaelic (Gàidhlig), 
                "turas" represents travel, growth, and purposeful movement—whether it's an expedition, a professional path, or 
                personal development. The name embodies the philosophy behind the company: building long-term, sustainable 
                ventures with a strategic approach.
              </p>

              <p className="text-gray-300 mt-6">
                At Turas BV, the focus is on structuring businesses that are not just scalable but built to last—whether through 
                digital innovation, strategic property investment, or operational efficiency.
              </p>

              <p className="mb-4">
                At TURAS, we&apos;re not just another consulting firm. We&apos;re your partners in navigating the complex world of sustainable business practices. Our name, &quot;TURAS,&quot; comes from the Irish word for &quot;journey,&quot; reflecting our commitment to guiding businesses through their sustainability transformation.
              </p>
              <p className="mb-4">
                Our &quot;boots on the ground&quot; approach sets us apart. We don&apos;t just provide theoretical frameworks - we work alongside you to implement practical, effective solutions that drive real change.
              </p>
              <p className="mb-4">
                Our &quot;boots on the ground&quot; approach has proven particularly valuable in our work with companies&apos; supply chains across Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}