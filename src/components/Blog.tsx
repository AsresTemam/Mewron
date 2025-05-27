import React from 'react';
import blog1 from '../assets/puppyVaccine.jpg';
import blog2 from '../assets/appUpdate.png';
import blog3 from '../assets/catStory.jpg';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Blog & Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our collection of articles, guides, and stories to enhance your pet parenting journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
            <div className="blog-card bg-white overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
              <img src={blog1} alt="Essential Vaccinations" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
              <p className="text-sm text-blue-600 mb-2">Pet Health</p>
              <h3 className="text-xl font-bold mb-3">Essential Vaccinations for Your New Puppy</h3>
              <p className="text-gray-600 mb-4">Understanding the vaccination schedule for your new puppy is crucial for their long-term health and wellbeing. This comprehensive guide walks you through the core vaccines, timing considerations, and how to track them effectively using digital tools. We consulted with leading veterinarians to provide the most up-to-date recommendations for keeping your puppy protected against common but preventable diseases.</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More →</a>
            </div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="blog-card bg-white overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={blog2} alt="Essential Vaccinations" className="w-full h-full object-cover" />
              </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 mb-2">App Updates</p>
              <h3 className="text-xl font-bold mb-3">New Features in Our Latest Release</h3>
              <p className="text-gray-600 mb-4">We're excited to announce several powerful new features in our latest app update. Based on user feedback, we've enhanced the medication tracking system, added customizable reminder options, and improved the social sharing experience. This article details all the new capabilities and how they can streamline your pet care routine. We also provide step-by-step instructions for making the most of these new tools.</p>
              <a href="#" className="text-primary font-semibold hover:underline">Read More →</a>
            </div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="blog-card bg-white overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={blog3} alt="Essential Vaccinations" className="w-full h-full object-cover" />
              </div>
            <div className="p-6">
              <p className="text-sm text-blue-600 mb-2">User Stories</p>
              <h3 className="text-xl font-bold mb-3">How Digital Records Saved My Cat's Life</h3>
              <p className="text-gray-600 mb-4">In this touching user spotlight, we share the story of Max and his owner Sarah, whose quick access to complete medical records during an emergency veterinary visit made a critical difference in treatment decisions. Sarah's meticulous tracking of Max's previous reactions to medications helped the emergency vet avoid potential complications and quickly administer appropriate treatment, demonstrating the real-world impact of digital pet health management.</p>
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
