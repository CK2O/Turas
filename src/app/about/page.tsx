'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Image from 'next/image';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not initialized');
      }

      // Get reCAPTCHA token
      const captchaToken = await executeRecaptcha('contact_form');
      if (!captchaToken) {
        throw new Error('Failed to execute reCAPTCHA');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300
          ${status === 'loading' 
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-400">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-400">
          {errorMessage}
        </div>
      )}
    </form>
  );
}

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">About TURAS</h1>
            <p className="text-xl text-gray-400">We build products that help you grow your business.</p>
          </div>

          {/* TURAS Company Section */}
          <section className="mb-12">
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
                <p className="text-lg">
                  <span className="text-white font-semibold">TURAS</span> is the Irish word for <span className="text-blue-400 font-semibold">"journey"</span> — 
                  and thats how we approach every project.
                </p>
                <p className="text-lg">
                  Founded in <span className="text-white font-semibold">2024</span>, our mission is 
                  to help people build their dream products and companies. Every great business starts as an idea, 
                  and we're here to go through that journey with you from concept to reality.
                </p>
                <p className="text-lg">
                  Whether you're an entrepreneur with a vision, a business looking to innovate, 
                  or someone ready to bring their idea to life — we're here to make that journey happen.
                </p>
              </div>
            </div>
          </section>

          {/* Personal About Section */}
          <section className="mb-12">
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/about me Cormac.jpg"
                    alt="Cormac Kerins"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-64 h-64 md:w-80 md:h-80"
                    priority
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">Meet Cormac</h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Founder at TURAS BV
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      With extensive experience in product management across multiple industries, Cormac has led 
                      development of €100M+ product portfolios and delivered successful product launches at scale.
                    </p>
                    <p>
                      From launching award-winning industrial equipment at Atlas Copco to building digital platforms 
                      platforms at amfori, he bridges strategy and execution to every project.
                    </p>
                    <p>
                      As a developer and entrepreneur, Cormac has built and launched multiple digital 
                      products including wellness platforms, e-commerce marketplaces, and business analytics tools.
                    </p>
                    <p>
                      Beyond technology, he's an active real estate investor, managing a diverse portfolio 
                      from acquisition through renovation to successful exit.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.linkedin.com/in/cormac-kerins/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Company Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-2">TURAS BV</p>
                  <p className="text-gray-300 mb-2">BTW/VAT: BE 1012.512.130</p>
                  <p className="text-gray-300 mb-2">Antwerp, Belgium</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a 
                      href="https://www.linkedin.com/company/turas-bv" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.instagram.com/turasbv" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                scriptProps={{
                  async: false,
                  defer: false,
                  appendTo: 'head',
                  nonce: undefined,
                }}
              >
                <ContactForm />
              </GoogleReCaptchaProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}