import React from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">Support & Contact</h2>
          <p className="text-lg max-w-3xl mx-auto mt-4">Need help or have feedback? Our team is here to assist you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-method space-y-6"
          >
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Customer Support</h4>
              <p>Email us at <a href="mailto:support@mewron.com" className="text-blue-600 hover:underline">support@mewron.com</a></p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Business Inquiries</h4>
              <p>For partnerships and media: <a href="mailto:info@mewron.com" className="text-blue-600 hover:underline">info@mewron.com</a></p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Head Office</h4>
              <p>Mewron Inc., 1234 Pet Lane, Tokyo, Japan</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <form>
              {['Your Name', 'Email Address', 'Message'].map((label, i) => (
                <div className="mb-4" key={i}>
                  <label className="block mb-2 font-medium text-black dark:text-white">{label}</label>
                  {label === 'Message' ? (
                    <textarea
                      rows={5}
                      className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={label === 'Email Address' ? 'email' : 'text'}
                      className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                      required
                    />
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#0066ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
