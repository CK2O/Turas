import Navigation from '../components/Navigation';

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div>
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              <p className="text-lg mb-8">
                Get in touch with us to discuss your business needs or potential collaborations.
              </p>

              <form 
                id="contact-form"
                className="space-y-6"
                action="/api/contact"
                method="POST"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white shadow-sm focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white shadow-sm focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white shadow-sm focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="lg:pl-12 lg:border-l border-white/20">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office Location</h3>
                    <p className="text-gray-300">Amsterdam, Netherlands</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:contact@turas.com" className="text-gray-300 hover:text-white">
                      contact@turas.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/company/turas-bv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 5:00 PM CET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 