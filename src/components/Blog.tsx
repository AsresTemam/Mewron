import React from 'react';
import { motion } from 'framer-motion';
import blog1 from '../assets/puppyVaccine.jpg';
import blog2 from '../assets/appUpdate.png';
import blog3 from '../assets/catStory.jpg';

const Blog: React.FC = () => {
  const posts = [
    {
      img: blog1,
      category: "Pet Health",
      title: "Essential Vaccinations for Your New Puppy",
      excerpt: "Understanding the vaccination schedule for your new puppy is crucial...",
      link: "#"
    },
    {
      img: blog2,
      category: "App Updates",
      title: "New Features in Our Latest Release",
      excerpt: "We're excited to announce several powerful new features in our latest app update...",
      link: "#"
    },
    {
      img: blog3,
      category: "User Stories",
      title: "How Digital Records Saved My Cat's Life",
      excerpt: "In this touching user spotlight, we share the story of Max and his owner Sarah...",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">Blog & Resources</h2>
          <p className="text-lg max-w-3xl mx-auto mt-4">Explore our collection of articles, guides, and stories to enhance your pet parenting journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{post.category}</p>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <a href={post.link} className="text-[#0066ff] dark:text-blue-400 font-semibold hover:underline">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block bg-[#0066ff] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
