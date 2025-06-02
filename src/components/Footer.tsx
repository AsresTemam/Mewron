import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0066ff] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-3">Mewron Inc.</h3>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Connect, Track, and Share Your Pet's Journey</p>
            <p className="text-blue-100 dark:text-gray-300 mb-6">
              Helping pet parents provide the best care through technology. Join thousands of pet lovers building digital legacies for their beloved companions.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="hover:text-white text-blue-100 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["features", "download", "about", "testimonials", "faq", "blog", "support"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-blue-100 dark:text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {id.replace(/^\w/, (c) => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Download App</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Get the Mewron app to start tracking your pet’s journey today.</p>
            <div className="flex flex-col space-y-3">
              {[{ label: 'App Store', icon: 'FaApple' }, { label: 'Google Play', icon: 'FaGooglePlay' }].map((store, i) => (
                <motion.a
                  key={store.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white text-[#0066ff] dark:bg-gray-800 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition"
                >
                  {store.label === 'App Store' ? <FaApple size={20} /> : <FaGooglePlay size={20} />}
                  <span>{store.label === 'App Store' ? 'Download on the App Store' : 'Get it on Google Play'}</span>
                </motion.a>
              ))}
            </div>
          </div>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-blue-400 dark:border-gray-700 mt-12 pt-8 text-sm text-blue-100 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center"
        >
          <p>&copy; 2025 Mewron Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
