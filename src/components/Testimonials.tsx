import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">What Pet Parents Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from our community of pet parents who have transformed their pet care experience with our app.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <p className="text-gray-500 text-xs">Photo</p>
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Dog Parent</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">The health tracking feature has been a game-changer for managing my senior dog's multiple medications. Before using this app, I was constantly worried about missing doses or appointments. Now, I have peace of mind knowing that all his health information is organized in one place, and the reminders ensure he gets exactly what he needs when he needs it. The interface is intuitive and the prescription scanner saved me hours of manual data entry.</p>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <p className="text-gray-500 text-xs">Photo</p>
              </div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-sm text-gray-500">Cat Parent</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">I've tried several pet apps before, but none compare to the comprehensive features offered here. The growth tracking has been particularly valuable as I raise my first kitten. Being able to see her development charted over time gives me confidence that she's growing properly. The community aspect is wonderful too - I've connected with other cat parents who have provided invaluable advice. The AI-generated avatars are adorable and make perfect profile pictures for my cat's social media accounts!</p>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <p className="text-gray-500 text-xs">Photo</p>
              </div>
              <div>
                <h4 className="font-bold">Emma Rodriguez</h4>
                <p className="text-sm text-gray-500">Multi-pet Household</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Managing care for multiple pets used to be overwhelming until I discovered this app. Now I can keep track of different vaccination schedules, dietary needs, and medications all in one place. The ability to share pet profiles with family members ensures everyone is on the same page regarding our pets' care. I especially appreciate the multi-language support as my parents, who sometimes pet-sit, prefer using the app in Spanish. This has truly become an essential tool for our busy household.</p>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="statistics mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="stat-item">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600">User satisfaction rate</p>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
            <p className="text-gray-600">Active pet profiles</p>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-gray-600">Average app store rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
