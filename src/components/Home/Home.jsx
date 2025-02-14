import React, { useState } from 'react';
import {Link, NavLink  } from 'react-router-dom'

const Home = () => {
  const [search, setSearch] = useState('');
  const [showBanner, setShowBanner] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      {showBanner && (
        <div className="bg-green-900 text-white p-4 rounded mb-4 flex justify-between items-center">
          <span className="text-lg font-bold">Adventure to Park </span>
          <button
            className="bg-transparent border-0 text-white hover:text-gray-200 transition duration-300"
            onClick={handleBannerClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      
<div className="relative min-h-[730px] min-w-[400px] bg-green-900 bg-[url(https://images.pexels.com/photos/9727422/pexels-photo-9727422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center">
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-yellow-300 text-4xl font-bold">Explore With Us</h1>
  </div>
</div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/4965916/pexels-photo-4965916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Example Image"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Mobile Store"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Kitchen Interior"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Shop Interior"
      className="w-full h-full object-cover"
    />
     <span className="text-cyan-500 text-center text-sm mt-2 font-semibold">Kitchen Interior</span>
  </div>
</div>

    </div>
  );
};

export default Home;