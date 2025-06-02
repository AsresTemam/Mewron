import React from 'react';
import petSocialNetwork from '../assets/petSocialNetwork.png';
import healthTracking from '../assets/healthTracking.png';
import growthRecord from '../assets/growthRecord.png';
import petAvatarGeneration from '../assets/petAvatarGeneration.png';
import prescriptionScanner from '../assets/prescriptionScanner.png';
import multiLanguage from '../assets/multiLanguage.png';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Pet Social Network',
      description: 'Connect with fellow pet parents in our vibrant community platform...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      ),
      image: petSocialNetwork
    },
    {
      title: 'Health Tracking',
      description: 'Never miss an important health event with our comprehensive health tracking system...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      ),
      image: healthTracking
    },
    {
      title: 'Growth Recording',
      description: 'Watch your pet\'s development unfold with our interactive growth tracking tools...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      image: growthRecord
    },
    {
      title: 'AI Pet Avatars',
      description: 'Transform your pet into a digital work of art with our innovative AI avatar technology...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      image: petAvatarGeneration
    },
    {
      title: 'Prescription Scanner',
      description: 'Simplify medication management with our advanced prescription scanning technology...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      ),
      image: prescriptionScanner
    },
    {
      title: 'Multi-language Support',
      description: 'Connect with pet lovers around the world through our comprehensive language support...',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      ),
      image: multiLanguage
    }
  ];

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">App Features</h2>
          <p className="text-lg max-w-3xl mx-auto">Our comprehensive suite of features designed to enhance your pet parenting experience and create lasting memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="mt-6 h-48 rounded-lg overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
