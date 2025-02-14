import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    guests: "",
    suiteType: "",
    specifications: "",
    checkIn: "",
    checkOut: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-900">
      <div className="bg-green-900 p-8 rounded-lg w-full max-w-3xl">
        <h2 className="text-white text-xl font-semibold text-center">
          <span className="underline font-bold">Booking</span>
        </h2>
        <h1 className="text-white text-3xl font-bold text-center">
          Book Us <span className="text-yellow-400">Instantly</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <input
              type="number"
              name="guests"
              placeholder="Number Of Guest"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <select
              name="suiteType"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            >
              <option className="text-black">Select Type Of Suite</option>
              <option className="text-black">Deluxe</option>
              <option className="text-black">Premium</option>
              <option className="text-black">Luxury</option>
            </select>
            <input
              type="text"
              name="specifications"
              placeholder="Specifications"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <input
              type="date"
              name="checkIn"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
            <input
              type="date"
              name="checkOut"
              className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="request"
            placeholder="Request Something"
            className="w-full p-3 border border-white bg-transparent text-white rounded-md outline-none"
            rows="3"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 border border-white"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
