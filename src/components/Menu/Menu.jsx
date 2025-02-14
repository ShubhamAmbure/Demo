import React from 'react';

const CustomerPhotos = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/30629351/pexels-photo-30629351/free-photo-of-elephant-herd-in-tarangire-national-park-safari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1691131/pexels-photo-1691131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1000444/pexels-photo-1000444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19570337/pexels-photo-19570337/free-photo-of-white-trees-and-road-in-forest-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30697255/pexels-photo-30697255/free-photo-of-stylish-woman-in-pink-cowgirl-outfit-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30385824/pexels-photo-30385824/free-photo-of-lonely-commuter-waiting-in-a-subway-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30524548/pexels-photo-30524548/free-photo-of-vintage-carousel-at-night-with-illuminated-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Customer Photos</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={imageUrl}
              alt={`Customer photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy" // Add lazy loading
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPhotos;