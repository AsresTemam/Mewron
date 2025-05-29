import React from 'react';
import blog1 from '../assets/puppyVaccine.jpg';
import blog2 from '../assets/appUpdate.png';
import blog3 from '../assets/catStory.jpg';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">Blog & Resources</h2>
          <p className="text-lg max-w-3xl mx-auto">Explore our collection of articles, guides, and stories to enhance your pet parenting journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="blog-card bg-white dark:bg-gray-800 overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={blog1} alt="Essential Vaccinations" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Pet Health</p>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Essential Vaccinations for Your New Puppy</h3>
              <p className="mb-4">Understanding the vaccination schedule for your new puppy is crucial...</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More →</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-card bg-white dark:bg-gray-800 overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={blog2} alt="App Update" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">App Updates</p>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">New Features in Our Latest Release</h3>
              <p className="mb-4">We're excited to announce several powerful new features in our latest app update...</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More →</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-card bg-white dark:bg-gray-800 overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={blog3} alt="Cat Story" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">User Stories</p>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">How Digital Records Saved My Cat's Life</h3>
              <p className="mb-4">In this touching user spotlight, we share the story of Max and his owner Sarah...</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More →</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
