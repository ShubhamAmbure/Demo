import React from "react";

const events = [
  {
    id: 1,
    date: "July 10, 2020",
    title: "Early Morning Safari",
    time: "05:00 - 08:00",
    cost: "INR 500",
    description:
      "Experience the serene beauty of nature as the golden sunrise unveils the wilderness, with animals roaming freely in their natural habitat.",
    image: "https://images.pexels.com/photos/15585651/pexels-photo-15585651/free-photo-of-people-sitting-on-the-back-of-a-pick-up-truck-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  },
  {
    id: 2,
    date: "July 10, 2020",
    title: "Rope Path In Air",
    time: "10:00 - 05:00",
    cost: "INR 100",
    description:
      "Walk high above the ground on a thrilling suspended rope path, testing your balance while enjoying breathtaking aerial views.",
    image: "https://images.pexels.com/photos/30665943/pexels-photo-30665943/free-photo-of-picturesque-canyon-walkway-in-kastamonu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  },
  {
    id: 3,
    date: "July 10, 2020",
    title: "ATV Riding",
    time: "10:00 - 05:00",
    cost: "INR 280",
    description:
      "Feel the adrenaline rush as you ride an ATV through rugged forest trails, navigating twists, turns, and muddy terrains.",
    image: "https://images.pexels.com/photos/19995810/pexels-photo-19995810/free-photo-of-couple-riding-quad-bike-on-country-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  },
];

const EventsList = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 md:p-10">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-full max-w-4xl">

          <div className="bg-yellow-400 px-4 py-2 flex items-center justify-center w-full md:w-20">
            <span className="text-black font-semibold transform rotate-0 md:-rotate-90">
              {event.date}
            </span>
          </div>

          
          <img
            src={event.image}
            alt={event.title}
            className="w-full md:w-48 h-40 object-cover"
          />

          
          <div className="p-6 flex-1">
            <h2 className="text-green-800 text-lg md:text-xl font-bold">{event.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Time:</strong> {event.time} &nbsp;&nbsp; | &nbsp;&nbsp;
              <strong>Cost:</strong> {event.cost}
            </p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>

          
          <div className="flex justify-center md:justify-end items-center px-6 py-4">
            <button className="bg-black text-white px-4 py-2 rounded-full border border-yellow-400 hover:bg-yellow-500 transition-all">
              More Info
            </button>
          </div>
        </div>
      ))}

      
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-full border border-yellow-400 hover:bg-yellow-500 transition-all">
        View All Events
      </button>
    </div>
  );
};

export default EventsList;
