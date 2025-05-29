import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center text-black dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto">Find answers to common questions about our app and services.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Is the app free to use?",
              answer: "The Mewron app offers both free and premium tiers. The free version provides access to essential features including basic health tracking, social sharing, and community access. Our premium subscription unlocks advanced features such as unlimited pet profiles, comprehensive health analytics, AI avatar generation, prescription scanning, and priority customer support. We believe in providing value at every tier, ensuring that all pet parents can benefit from our platform regardless of their subscription choice."
            },
            {
              question: "How is my pet's data protected?",
              answer: "We take data security extremely seriously at Mewron Inc. All pet health and personal information is encrypted both in transit and at rest using industry-standard protocols. We implement strict access controls, regular security audits, and follow best practices for data protection. Your data is never sold to third parties, and you maintain complete control over what information is shared within the community. Our dedicated security team works continuously to ensure that your pet's sensitive information remains private and secure."
            },
            {
              question: "Can I share pet profiles with family members or my veterinarian?",
              answer: "Absolutely! We understand that pet care is often a collaborative effort. Our app allows you to securely share specific aspects of your pet's profile with family members, pet sitters, or veterinary professionals. You can customize exactly what information is shared, from full access to limited health records. This feature ensures that everyone involved in your pet's care has the information they need while you maintain control over your pet's data. Veterinarians particularly appreciate the ability to access accurate medication and vaccination histories during appointments."
            },
            {
              question: "What pets are supported?",
              answer: "Our app is designed to support a wide range of companion animals. While dogs and cats are the most common pets on our platform, we also accommodate birds, rabbits, guinea pigs, hamsters, reptiles, and many other species. Each pet type has customized health tracking fields relevant to their specific needs. If you have an exotic pet that doesn't seem to fit our existing categories, please contact our support team, as we regularly update our platform to include more pet types based on user feedback and veterinary guidance."
            },
            {
              question: "How can I import existing health records?",
              answer: "Importing your pet's existing health records is straightforward with several options available. You can manually enter historical data, upload documents and images of veterinary records, or use our prescription scanner to digitize paper records. For users in participating regions, we also offer integration with certain veterinary practice management systems, allowing for direct import of records with your vet's authorization. Our customer support team is available to assist with bulk imports or special cases to ensure your pet's complete medical history is accurately represented in the app."
            },
            {
              question: "Is the app available in my country?",
              answer: "The Mewron app is currently available in over 150 countries worldwide. Our core features are accessible globally, though some specialized services may have limited availability in certain regions due to regulatory requirements or partner availability. The app is fully localized in English and Japanese, with partial localization in Spanish, French, German, and Mandarin. We're actively working on expanding both our regional availability and language support. If the app isn't currently available in your region, you can join our waitlist to be notified when we launch in your country."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-item border-b border-gray-200 dark:border-gray-700 py-6">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
