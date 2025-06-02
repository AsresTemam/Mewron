import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is the app free to use?",
    answer: "The Mewron app offers both free and premium tiers. The free version provides access to essential features including basic health tracking, social sharing, and community access..."
  },
  {
    question: "How is my pet's data protected?",
    answer: "We take data security extremely seriously at Mewron Inc. All pet health and personal information is encrypted both in transit and at rest..."
  },
  {
    question: "Can I share pet profiles with family members or my veterinarian?",
    answer: "Absolutely! We understand that pet care is often a collaborative effort. Our app allows you to securely share specific aspects of your pet's profile..."
  },
  {
    question: "What pets are supported?",
    answer: "Our app is designed to support a wide range of companion animals. While dogs and cats are the most common pets on our platform, we also accommodate birds, rabbits, guinea pigs..."
  },
  {
    question: "How can I import existing health records?",
    answer: "Importing your pet's existing health records is straightforward with several options available. You can manually enter historical data, upload documents..."
  },
  {
    question: "Is the app available in my country?",
    answer: "The Mewron app is currently available in over 150 countries worldwide. Our core features are accessible globally, though some specialized services..."
  }
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mt-4"
          >
            Find answers to common questions about our app and services.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 rounded-xl overflow-hidden shadow-lg">
          {faqData.map((faq, index) => (
            <motion.div key={index} className="faq-item py-6 px-4 bg-white dark:bg-gray-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-black dark:text-white focus:outline-none"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4 text-gray-600 dark:text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
