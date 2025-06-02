import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Support: React.FC = () => {
  return (
    <section id="support" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">Support & Contact</h2>
          <p className="text-lg max-w-3xl mx-auto">Need help or have feedback? Our team is here to assist you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-method space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Customer Support</h4>
              <p>Email us at <a href="mailto:support@mewron.com" className="text-primary hover:underline">support@mewron.com</a></p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Business Inquiries</h4>
              <p>For partnerships and media: <a href="mailto:info@mewron.com" className="text-primary hover:underline">info@mewron.com</a></p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Head Office</h4>
              <p>Mewron Inc., 1234 Pet Lane, Tokyo, Japan</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/mewron" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com/mewron" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://instagram.com/mewron" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com/company/mewron" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="https://youtube.com/mewron" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-red-600 hover:text-red-800 transition-colors">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black dark:text-white">Your Name</label>
                <input type="text" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black dark:text-white">Email Address</label>
                <input type="email" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-black dark:text-white">Message</label>
                <textarea rows={5} className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" required></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
