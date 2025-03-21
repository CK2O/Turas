import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="pt-16 min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy & Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            {/* Privacy Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Privacy Policy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                  <p className="mb-4">
                    TURAS BV ("we"),  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h3>
                  <p className="mb-4">We collect information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Contact us through our website</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Email Communications:</strong> When you contact us, we collect your email address and any other information you provide in your message. We store this information securely and use it only for the purpose of responding to your inquiry and maintaining a record of our communication.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Data Retention</h3>
                  <p className="mb-4">We retain your personal data according to these principles:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Email communications are retained for 24 months from the last interaction</li>
                  </ul>
                  <p className="mb-4">
                    After this period, your data will be securely deleted unless we are required to retain it for legal or regulatory purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. How We Use Your Information</h3>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Respond to your inquiries</li>
                    <li>Provide you with requested information about our services</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Email Processing:</strong> Your email address will only be used for the specific purpose you provided it for, unless you explicitly consent to additional uses. You can withdraw this consent at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Your Rights Under GDPR</h3>
                  <p className="mb-4">Under the GDPR, you have the following rights:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate personal data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to object to processing</li>
                  </ul>
                  <p className="mb-4">
                    You can exercise these rights at any time by contacting us. We will respond to your request within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Terms of Service Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Terms of Service</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                  <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Use License</h3>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on TURAS BV's website for personal, non-commercial transitory viewing only.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h3>
                  <p className="mb-4">
                    The materials on TURAS BV's website are provided on an 'as is' basis. TURAS BV makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie Policy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. What Are Cookies</h3>
                  <p className="mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Cookies</h3>
                  <p className="mb-4">We use cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Essential cookies: Required for the website to function properly</li>
                    <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                    <li>Functional cookies: Enable enhanced functionality and personalization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Managing Cookies</h3>
                  <p className="mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                For any questions about our Privacy Policy, Terms of Service, or Cookie Policy, please visit our <Link href="/about" className="text-blue-400 hover:text-blue-300">About page</Link> to get in touch with us.
              </p>
            </section>

            {/* Updates Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to These Policies</h2>
              <p className="mb-4">
                We may update these policies from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
} 