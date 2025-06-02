import React from 'react';
import { motion } from 'framer-motion';
import qrCodeImage from '../assets/qr-code.svg';

const Download: React.FC = () => {
  return (
    <section id="download" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-bold text-black dark:text-white"
          >
            Download Our App
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mt-4"
          >
            Experience the complete suite of pet care tools designed to enhance your pet parenting journey. Available on iOS and Android devices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="download-info"
          >
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Start Your Pet's Digital Journey Today
            </h3>
            <p className="mb-8">
              Download the Mewron app and join thousands of pet parents who are creating beautiful digital legacies for their beloved companions...
            </p>

            <div className="mb-8">
              <h4 className="font-bold mb-3 text-black dark:text-white">Available On:</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                {['App Store', 'Google Play'].map((store, i) => (
                  <motion.div
                    key={store}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="download-button bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="..." />
                    </svg>
                    <div>
                      <div className="text-xs">{i === 0 ? 'Download on the' : 'GET IT ON'}</div>
                      <div className="text-xl font-semibold">{store}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="system-requirements">
              <h4 className="font-bold mb-3 text-black dark:text-white">System Requirements:</h4>
              <p className="mb-2">iOS: Requires iOS 13.0 or later. Compatible with iPhone, iPad, and iPod touch.</p>
              <p>Android: Requires Android 8.0 or later.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="qr-code-container flex justify-center"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={qrCodeImage}
                alt="Download QR Code"
                className="w-64 h-64 mx-auto mb-6"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Scan this QR code with your mobile device to download the app directly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
