import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white pt-12">
            =
            <div className="bg-yellow-400 text-black px-6 py-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                        📍
                    </div>
                    <div>
                        <p className="font-bold">ADDRESS:</p>
                        <p>Banglore</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                        📧
                    </div>
                    <div>
                        <p className="font-bold">EMAIL:</p>
                        <p>info@adventurepark.com</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                        📞
                    </div>
                    <div>
                        <p className="font-bold">PHONE:</p>
                        <p>+91 86598768</p>
                    </div>
                </div>
            </div>

           
            <div className="px-6 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h2 className="text-2xl font-bold">ADVENTURE <span className="text-yellow-400">PARK</span></h2>
                    <div className="mt-4 flex">
                        <input type="email" placeholder="Your Email" className="p-2 rounded-l-lg text-black w-full" />
                        <button className="bg-green-600 text-white px-4 rounded-r-lg">GO</button>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <span>📘</span>
                        <span>🐦</span>
                        <span>▶️</span>
                        <span>📷</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-yellow-400 font-bold mb-3">Navigations</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about">About Us</Link></li>
                        
                     
                        <li><Link to="/Contact">Services</Link></li>
                        <li><Link to="/Booking">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-yellow-400 font-bold mb-3">Explore Link</h3>
                    <ul className="space-y-2">
                        <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                        
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
