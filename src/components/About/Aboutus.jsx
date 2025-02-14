import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

         
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Ferris Wheel" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <div className="bg-yellow-200 p-4 rounded-md mb-4 inline-block">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                THE BEST THEME AND<br/>
                ADVENTURE PARK
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="text-gray-600 mb-6">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur.
            </p>
            <button className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;