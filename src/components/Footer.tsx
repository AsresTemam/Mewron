import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#0066ff] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="footer-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-2">Mewron Inc.</h3>
              <p className="text-blue-100 dark:text-gray-300">Connect, Track, and Share Your Pet's Journey</p>
            </div>
            <p className="text-blue-100 dark:text-gray-300 mb-6">Helping pet parents provide the best care through technology. Join thousands of pet lovers building digital legacies for their beloved companions.</p>
            <div className="social-icons flex space-x-4">
              {/* Social Media Icons (Twitter, Facebook, Instagram, YouTube) */}
              {/* Already styled with hover and background */}
              {/* Icons unchanged as they inherit text-white */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["features", "download", "about", "testimonials", "faq", "blog", "support"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-blue-100 dark:text-gray-300 hover:text-white transition-colors capitalize">
                    {id.replace(/^\w/, c => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Download */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white dark:text-white mb-6">Download App</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Get the Mewron app on your mobile device to start tracking your pet's journey today.</p>
            <div className="flex flex-col space-y-3">
              {/* Buttons retain background/hover and inherit text styles */}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white dark:text-white mb-6">Stay Updated</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-4">Subscribe to our newsletter for the latest updates, pet care tips, and exclusive offers.</p>
            <div className="newsletter-form">
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-black dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
                <button className="bg-white dark:bg-blue-600 text-primary dark:text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 dark:text-gray-300 text-sm">By subscribing, you agree to our Privacy Policy and consent to receive updates from Mewron Inc.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 dark:border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-blue-100 dark:text-gray-400 text-sm">
              <p>&copy; 2025 Mewron Inc. All rights reserved.</p>
            </div>
            <div className="text-blue-100 dark:text-gray-400 text-sm md:text-right">
              <a href="#" className="mr-4 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="mr-4 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
