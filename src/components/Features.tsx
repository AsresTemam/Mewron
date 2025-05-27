import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">App Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our comprehensive suite of features designed to enhance your pet parenting experience and create lasting memories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Pet Social Network</h3>
            <p className="text-gray-600">Connect with fellow pet parents in our vibrant community platform. Share your pet's special moments, milestones, and daily adventures with people who truly understand the joy of pet parenthood. Exchange tips, advice, and heartwarming stories with like-minded individuals who share your passion for pets.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Health Tracking</h3>
            <p className="text-gray-600">Never miss an important health event with our comprehensive health tracking system. Keep detailed records of medications, vaccinations, and veterinary visits all in one convenient place. Set reminders for upcoming appointments and medication schedules to ensure your pet receives timely care and stays in optimal health throughout their life.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Growth Recording</h3>
            <p className="text-gray-600">Watch your pet's development unfold with our interactive growth tracking tools. Monitor weight, height, and other key metrics through beautifully designed charts and timelines. Capture and compare photos at different life stages to create a visual record of your pet's journey from playful youngster to dignified senior companion.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Pet Avatars</h3>
            <p className="text-gray-600">Transform your pet into a digital work of art with our innovative AI avatar technology. Create unique, artistic representations of your furry friend in various styles and themes. These personalized avatars can be used as profile pictures, shared on social media, or even printed as physical keepsakes to celebrate your pet's distinctive personality and charm.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Prescription Scanner</h3>
            <p className="text-gray-600">Simplify medication management with our advanced prescription scanning technology. Quickly digitize veterinary prescriptions by taking a photo, and our system will automatically extract key information like medication names, dosages, and schedules. This feature eliminates manual data entry errors and ensures that your pet's medication records are always accurate and up-to-date for optimal care.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="feature-card bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-language Support</h3>
            <p className="text-gray-600">Connect with pet lovers around the world through our comprehensive language support. Currently available in English and Japanese, with more languages coming soon, our app breaks down communication barriers in the global pet community. Navigate the interface, share stories, and access all features in your preferred language for a truly personalized and inclusive experience.</p>
            <div className="mt-6 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Feature Screenshot Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
