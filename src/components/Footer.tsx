import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="footer-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Mewron Inc.</h3>
              <p className="text-blue-100">Connect, Track, and Share Your Pet's Journey</p>
            </div>
            <p className="text-blue-100 mb-6">Helping pet parents provide the best care through technology. Join thousands of pet lovers building digital legacies for their beloved companions.</p>
            <div className="social-icons flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#download" className="text-blue-100 hover:text-white transition-colors">Download</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#blog" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#support" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          {/* Column 3: Download */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white mb-6">Download App</h4>
            <p className="text-blue-100 mb-4">Get the Mewron app on your mobile device to start tracking your pet's journey today.</p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-black text-primary px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-950 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5575 12.0518C17.5883 14.8989 19.9229 15.9675 20 15.9886C19.9762 16.0647 19.5439 17.5783 18.4943 19.1421C17.5986 20.4879 16.6742 21.8239 15.2139 21.8549C13.7822 21.8849 13.2935 20.9642 11.6569 20.9642C10.0193 20.9642 9.47929 21.8239 8.12024 21.8849C6.70398 21.9449 5.61315 20.4159 4.70958 19.0762C2.86183 16.3352 1.45823 11.3979 3.36049 8.16931C4.30498 6.56333 6.01216 5.55976 7.87183 5.52976C9.24281 5.49976 10.5283 6.50333 11.3771 6.50333C12.2259 6.50333 13.7822 5.29976 15.4297 5.44881C16.0953 5.47881 17.9431 5.71786 19.1523 7.40183C19.0481 7.46983 17.5327 8.34739 17.5575 12.0518M14.4561 3.80597C15.1983 2.91841 15.6941 1.69284 15.5666 0.458252C14.5125 0.508252 13.2299 1.15881 12.4619 2.04637C11.7692 2.83393 11.1769 4.08851 11.3282 5.29208C12.5126 5.38109 13.7139 4.69353 14.4561 3.80597" />
                </svg>
                <span>App Store</span>
              </a>
              <a href="#" className="bg-black text-primary px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-950 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.60001 2.40002C3.40001 2.60002 3.30001 2.80002 3.30001 3.20002V20.8C3.30001 21.2 3.40001 21.4 3.60001 21.6L3.70001 21.7L13.6 12L3.70001 2.30002L3.60001 2.40002Z" fill="#2196F3"/>
                  <path d="M17.8 16.2L13.6 12L17.8 7.80001L21.9 10.2C23.1 10.9 23.1 12.1 21.9 12.8L17.8 16.2Z" fill="#FFC107"/>
                  <path d="M17.8 7.80001L13.6 12L3.70001 2.30002C4.00001 1.90002 4.50001 1.80002 5.10001 2.10002L17.8 7.80001Z" fill="#4CAF50"/>
                  <path d="M17.8 16.2L5.10001 21.9C4.50001 22.2 4.00001 22.1 3.70001 21.7L13.6 12L17.8 16.2Z" fill="#F44336"/>
                </svg>
                <span>Play Store</span>
              </a>
            </div>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="text-xl font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-blue-100 mb-4">Subscribe to our newsletter for the latest updates, pet care tips, and exclusive offers.</p>
            <div className="newsletter-form">
              <div className="flex mb-4">
                <input type="email" placeholder="Your Email" className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none" />
                <button className="bg-white text-primary px-4 py-2 rounded-r-lg font-semibold hover:bg-blue-50 transition-colors">Subscribe</button>
              </div>
              <p className="text-blue-100 text-sm">By subscribing, you agree to our Privacy Policy and consent to receive updates from Mewron Inc.</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-blue-100 text-sm">
              <p>&copy; 2025 Mewron Inc. All rights reserved.</p>
            </div>
            <div className="text-blue-100 text-sm md:text-right">
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
