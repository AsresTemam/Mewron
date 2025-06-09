import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0066ff] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo and About */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Mewron Inc.</h3>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Connect, Track, and Share Your Pet's Journey</p>
            <p className="text-blue-100 dark:text-gray-300 mb-6">
              Helping pet parents provide the best care through technology. Join thousands of pet lovers building digital legacies for their beloved companions.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Mewron_official" aria-label="Twitter" className="hover:text-white text-blue-100 transition-colors"><FaXTwitter size={20} /></a>
              <a href="https://facebook.com/mewron" aria-label="Facebook" className="hover:text-white text-blue-100 transition-colors"><FaFacebookF size={20} /></a>
              <a href="https://instagram.com/mewron" aria-label="Instagram" className="hover:text-white text-blue-100 transition-colors"><FaInstagram size={20} /></a>
              <a href="https://instagram.com/mewron" aria-label="Instagram" className="hover:text-white text-blue-100 transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://youtube.com/mewron" aria-label="YouTube" className="hover:text-white text-blue-100 transition-colors"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["features", "download", "about", "testimonials", "faq", "blog", "support"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-blue-100 dark:text-gray-300 hover:text-white transition-colors capitalize">
                    {id.replace(/^\w/, c => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Download App */}
          <div>
            <h4 className="text-xl font-bold mb-4">Download App</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Get the Mewron app to start tracking your pet’s journey today.</p>
            <div className="flex flex-col space-y-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-white text-[#0066ff] dark:bg-gray-800 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 dark:hover:bg-blue-700 transition"
              >
                <FaApple size={20} />
                <span>Download on the App Store</span>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-white text-[#0066ff] dark:bg-gray-800 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 dark:hover:bg-blue-700 transition"
              >
                <FaGooglePlay size={20} />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Subscribe for updates, pet care tips, and exclusive offers.</p>
            <form className="flex flex-col space-y-4">
              <div className="flex rounded overflow-hidden border border-gray-300 dark:border-gray-600">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-[#0066ff] font-semibold px-4 py-2 hover:bg-gray-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 dark:text-gray-300">By subscribing, you agree to our Privacy Policy.</p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-400 dark:border-gray-700 mt-12 pt-8 text-sm text-blue-100 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Mewron Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
