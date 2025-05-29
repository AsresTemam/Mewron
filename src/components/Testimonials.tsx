import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">What Pet Parents Say</h2>
          <p className="text-lg max-w-3xl mx-auto">Hear from our community of pet parents who have transformed their pet care experience with our app.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            name: "Sarah Johnson", role: "Dog Parent", text: "The health tracking feature has been a game-changer...",
          }, {
            name: "Michael Chen", role: "Cat Parent", text: "I've tried several pet apps before, but none compare...",
          }, {
            name: "Emma Rodriguez", role: "Multi-pet Household", text: "Managing care for multiple pets used to be overwhelming...",
          }].map((testimonial, i) => (
            <div key={i} className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Photo</p>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4">{testimonial.text}</p>
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
          ))}
        </div>
        
        <div className="statistics mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "98%", label: "User satisfaction rate" },
            { value: "50,000+", label: "Active pet profiles" },
            { value: "4.8/5", label: "Average app store rating" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
