import React from 'react';
import blog1 from '../assets/puppyVaccine.jpg';
import blog2 from '../assets/appUpdate.png';
import blog3 from '../assets/catStory.jpg';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white">Blog & Resources</h2>
          <p className="text-lg max-w-3xl mx-auto mt-4">Explore our collection of articles, guides, and stories to enhance your pet parenting journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            img: blog1,
            category: "Pet Health",
            title: "Essential Vaccinations for Your New Puppy",
            excerpt: "Understanding the vaccination schedule for your new puppy is crucial...",
            link: "#"
          }, {
            img: blog2,
            category: "App Updates",
            title: "New Features in Our Latest Release",
            excerpt: "We're excited to announce several powerful new features in our latest app update...",
            link: "#"
          }, {
            img: blog3,
            category: "User Stories",
            title: "How Digital Records Saved My Cat's Life",
            excerpt: "In this touching user spotlight, we share the story of Max and his owner Sarah...",
            link: "#"
          }].map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{post.category}</p>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-[#0066ff] dark:text-blue-400 font-semibold hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-[#0066ff] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
