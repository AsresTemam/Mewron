import React from 'react';
import { motion } from 'framer-motion';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';

const testimonials = [
  {
    name: "Lidet Tefera",
    role: "Dog Parent",
    text: "The health tracking feature has been a game-changer...",
    image: testimonial1
  },
  {
    name: "Abigail ",
    role: "Cat Parent",
    text: "I've tried several pet apps before, but none compare...",
    image: testimonial2
  },
  {
    name: "Melos",
    role: "Multi-pet Household",
    text: "Managing care for multiple pets used to be overwhelming...",
    image: testimonial3
  }
];

const stats = [
  { value: "98%", label: "User satisfaction rate" },
  { value: "50,000+", label: "Active pet profiles" },
  { value: "4.8/5", label: "Average app store rating" },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-blue-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white">What Pet Parents Say</h2>
          <p className="text-lg max-w-3xl mx-auto mt-4">Hear from our community of pet parents who have transformed their pet care experience with our app.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold text-black dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4 italic text-gray-700 dark:text-gray-300">“{testimonial.text}”</p>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="statistics mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-[#0066ff] dark:text-blue-400 mb-2">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
