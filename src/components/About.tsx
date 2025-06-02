import React from 'react';
import { motion } from 'framer-motion';
import compPhoto from '../assets/companyPhoto.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-bold text-black dark:text-white"
          >
            About Mewron Inc.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mt-4"
          >
            Dedicated to helping pet parents provide the best care through innovative technology solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="about-image"
          >
            <img
              src={compPhoto}
              alt="Company Team"
              className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="about-content"
          >
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Philosophy</h3>
            <p className="mb-6">Embracing intuition, supported by intellect. Gently connecting coexistence with living beings through technology.</p>

            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Vision</h3>
            <p className="mb-6">Creating a world where humans and animals can better understand and be closer to one another.</p>

            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Mission</h3>
            <p className="mb-6">Combining the sensitivity to life (“Mew”) with a scientific approach (“Neuron”) to deliver gentle, caring products for both pet owners and animals. Lowering the barriers to veterinary care and building a society where everyone can live with animals in peace.</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="team-grid grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
            >
              {/* Future team members or illustrations can go here */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
