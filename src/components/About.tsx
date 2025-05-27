import React from 'react';
// import team1 from '../assets/asuka.jpeg'; 
// import team2 from '../assets/team2.jpg'; 
// import team3 from '../assets/team1.png';
// import team4 from '../assets/team1.png';
// import team5 from '../assets/team1.png';
// import team6 from '../assets/team1.png';
import compPhoto from '../assets/companyPhoto.jpg'; 

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">About Mewron Inc.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Dedicated to helping pet parents provide the best care through innovative technology solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-image">
            {/* <div className="h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Company Image Placeholder</p>
            </div> */}
            <img src={compPhoto} alt="Team Member 2" className="w-full h-full object-cover" />
          </div>
          
          <div className="about-content">
            <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
            <p className="text-gray-600 mb-6">Embracing intuition, supported by intellect. Gently connecting coexistence with living beings through technology.</p>
            
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-6">Creating a world where humans and animals can better understand and be closer to one another.</p>
            
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">Combining the sensitivity to life (“Mew”) with a scientific approach (“Neuron”) to deliver gentle, caring products for both pet owners and animals.
                Lowering the barriers to veterinary care and building a society where everyone can live with animals in peace.</p>

            {/* <h3 className="text-2xl font-bold mb-6">Our Team</h3>
            <p className="text-gray-600 mb-6">Our diverse team brings together talent from various backgrounds, united by a shared love for animals and technology. From veterinary professionals who ensure the accuracy of our health tracking features to developers who craft seamless user experiences, every team member contributes unique expertise to our mission. We maintain a pet-friendly office environment where team members' furry companions are always welcome, serving as both inspiration and real-world testers for our products.</p>
             */}
            <div className="team-grid grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {/* Team Member 1 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team1} alt="Team Member 1" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Asuka Igarashi</h4>
                <p className="text-sm text-gray-500">CEO</p>
              </div> */}
              
              {/* Team Member 2 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team2} alt="Team Member 2" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Asres Temam</h4>
                <p className="text-sm text-gray-500">Developer</p>
              </div> */}
              
              {/* Team Member 3 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team3} alt="Team Member 3" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Vivek Kale</h4>
                <p className="text-sm text-gray-500">AI Engineer</p>
              </div> */}
              
              {/* Team Member 4 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team4} alt="Team Member 4" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Emma Rodriguez</h4>
                <p className="text-sm text-gray-500">CTO</p>
              </div> */}
              
              {/* Team Member 5 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team5} alt="Team Member 5" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">David Kim</h4>
                <p className="text-sm text-gray-500">Marketing</p>
              </div> */}
              
              {/* Team Member 6 */}
              {/* <div className="team-member text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-3 overflow-hidden">
                  <img src={team6} alt="Team Member 6" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Lisa Wang</h4>
                <p className="text-sm text-gray-500">CEO</p>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
