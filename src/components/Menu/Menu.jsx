import React from 'react';

const CustomerPhotos = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Customer Photos </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`https://images.pexels.com/photos/30629351/pexels-photo-30629351/free-photo-of-elephant-herd-in-tarangire-national-park-safari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${index + 1}`}
              alt={`Customer photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPhotos;