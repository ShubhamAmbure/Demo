import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest('.mobile-menu')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-white px-4 lg:px-6 py-3">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/Home" className="flex items-center">
                        <h1 className="text-2xl text-gray-400 font-bold">ADVENTURE</h1>
                        <h3 className='text-yellow-400 text-2xl font-bold ml-1'>Park</h3>
                    </NavLink>

                    <div className="lg:hidden">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="text-gray-800 focus:outline-none text-2xl"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Backdrop for mobile menu */}
                    {menuOpen && (
                        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
                    )}

                    {/* Mobile Menu Pop-up */}
                    <div 
                        className={`mobile-menu fixed lg:hidden top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform ${
                            menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="p-4">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-800 text-2xl absolute top-4 right-4"
                            >
                                ✕
                            </button>
                            
                            <ul className="mt-12 space-y-4">
                                <li>
                                    <NavLink to="/Home" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Booking" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">Booking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/About" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Cart" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">DealBox</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Menu" onClick={() => setMenuOpen(false)} className="text-gray-800 text-l font-bold hover:text-yellow-400 block p-2">Gallery</NavLink>
                                </li>
                                <li className="mt-8">
                                    <Link to="/Login" onClick={() => setMenuOpen(false)} className="text-white hover:bg-yellow-400 bg-green-900 font-medium rounded-lg text-sm px-4 py-2 block text-center">Log in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        <NavLink to="/Home" className="text-l font-bold text-gray-800 hover:text-yellow-400">Home</NavLink>
                        <NavLink to="/Contact" className="text-gray-800 text-l font-bold hover:text-yellow-400">Services</NavLink>
                        <NavLink to="/Booking" className="text-gray-800 text-l font-bold hover:text-yellow-400">Booking</NavLink>
                        <NavLink to="/About" className="text-gray-800 text-l font-bold hover:text-yellow-400">About Us</NavLink>
                        <NavLink to="/Cart" className="text-gray-800 text-l font-bold hover:text-yellow-400">DealBox</NavLink>
                        <NavLink to="/Menu" className="text-l font-bold text-gray-800 hover:text-yellow-400">Gallery</NavLink>
                        <Link to="/Login" className="text-white hover:bg-yellow-400 bg-green-900 font-medium rounded-lg text-sm px-4 py-2">Log in</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}