import React from 'react';
import compPhoto from '../assets/companyPhoto.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">About Mewron Inc.</h2>
          <p className="text-lg max-w-3xl mx-auto">Dedicated to helping pet parents provide the best care through innovative technology solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-image">
            <img src={compPhoto} alt="Team Member 2" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="about-content">
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Philosophy</h3>
            <p className="mb-6">Embracing intuition, supported by intellect. Gently connecting coexistence with living beings through technology.</p>

            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Vision</h3>
            <p className="mb-6">Creating a world where humans and animals can better understand and be closer to one another.</p>

            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Our Mission</h3>
            <p className="mb-6">Combining the sensitivity to life (“Mew”) with a scientific approach (“Neuron”) to deliver gentle, caring products for both pet owners and animals. Lowering the barriers to veterinary care and building a society where everyone can live with animals in peace.</p>

            <div className="team-grid grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {/* Team members are currently commented out */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
