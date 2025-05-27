import React from 'react';
import qrCodeImage from '../assets/qr-code.svg';


const Download: React.FC = () => {
  return (
    <section id="download" className="section-padding bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Download Our App</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Experience the complete suite of pet care tools designed to enhance your pet parenting journey. Available on iOS and Android devices.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="download-info">
            <h3 className="text-2xl font-bold mb-6">Start Your Pet's Digital Journey Today</h3>
            <p className="text-gray-600 mb-8">Download the Mewron app and join thousands of pet parents who are creating beautiful digital legacies for their beloved companions. Our intuitive interface and comprehensive features make it easy to track health, celebrate growth, and share precious moments with a community that cares.</p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3">Available On:</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="download-button bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5575 12.0518C17.5883 14.8989 19.9229 15.9675 20 15.9886C19.9762 16.0647 19.5439 17.5783 18.4943 19.1421C17.5986 20.4879 16.6742 21.8239 15.2139 21.8549C13.7822 21.8849 13.2935 20.9642 11.6569 20.9642C10.0193 20.9642 9.47929 21.8239 8.12024 21.8849C6.70398 21.9449 5.61315 20.4159 4.70958 19.0762C2.86183 16.3352 1.45823 11.3979 3.36049 8.16931C4.30498 6.56333 6.01216 5.55976 7.87183 5.52976C9.24281 5.49976 10.5283 6.50333 11.3771 6.50333C12.2259 6.50333 13.7822 5.29976 15.4297 5.44881C16.0953 5.47881 17.9431 5.71786 19.1523 7.40183C19.0481 7.46983 17.5327 8.34739 17.5575 12.0518M14.4561 3.80597C15.1983 2.91841 15.6941 1.69284 15.5666 0.458252C14.5125 0.508252 13.2299 1.15881 12.4619 2.04637C11.7692 2.83393 11.1769 4.08851 11.3282 5.29208C12.5126 5.38109 13.7139 4.69353 14.4561 3.80597" />
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
                <div className="download-button bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.60001 2.40002C3.40001 2.60002 3.30001 2.80002 3.30001 3.20002V20.8C3.30001 21.2 3.40001 21.4 3.60001 21.6L3.70001 21.7L13.6 12L3.70001 2.30002L3.60001 2.40002Z" fill="#2196F3"/>
                    <path d="M17.8 16.2L13.6 12L17.8 7.80001L21.9 10.2C23.1 10.9 23.1 12.1 21.9 12.8L17.8 16.2Z" fill="#FFC107"/>
                    <path d="M17.8 7.80001L13.6 12L3.70001 2.30002C4.00001 1.90002 4.50001 1.80002 5.10001 2.10002L17.8 7.80001Z" fill="#4CAF50"/>
                    <path d="M17.8 16.2L5.10001 21.9C4.50001 22.2 4.00001 22.1 3.70001 21.7L13.6 12L17.8 16.2Z" fill="#F44336"/>
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="system-requirements">
              <h4 className="font-bold mb-3">System Requirements:</h4>
              <p className="text-gray-600 mb-2">iOS: Requires iOS 13.0 or later. Compatible with iPhone, iPad, and iPod touch.</p>
              <p className="text-gray-600">Android: Requires Android 8.0 or later.</p>
            </div>
          </div>
          
          <div className="qr-code-container flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img src={qrCodeImage} alt="Download QR Code" className="w-64 h-64 mx-auto mb-6" />
              <p className="text-gray-600">Scan this QR code with your mobile device to download the app directly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
