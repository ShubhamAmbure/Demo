import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-white px-4 lg:px-6 py-3">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/Home" className="flex items-center">
                        <h1 className="text-2xl text-gray-400 font-bold">ADVENTURE</h1>
                        <h3 className='text-yellow-400 text-2xl font-bold ml-1'>Park</h3>
                    </NavLink>

                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none text-2xl">
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    <div className={`lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left w-full">
                            <li>
                                <NavLink to="/Home" className="text-l font-bold text-gray-800 hover:text-yellow-400 px-4 py-2 block lg:inline-block">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className="text-gray-800 text-l font-bold hover:text-yellow-400 px-4 py-2 block lg:inline-block">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Booking" className="text-gray-800 text-l font-bold hover:text-yellow-400 px-4 py-2 block lg:inline-block">Booking</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className="text-gray-800 text-l font-bold hover:text-yellow-400 px-4 py-2 block lg:inline-block">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Cart" className="text-gray-800 text-l font-bold hover:text-yellow-400 px-4 py-2 block lg:inline-block">DealBox</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Menu" className="text-l font-bold text-gray-800 hover:text-yellow-400 px-4 py-2 block lg:inline-block">Gallery</NavLink>
                            </li>
                            
                            <li className="block lg:hidden mt-2">
                                <Link to="/Login" className="text-white hover:bg-yellow-400 bg-green-900 font-medium rounded-lg text-sm px-4 py-2 block text-center">Log in</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center">
                        <Link to="/Login" className="text-white hover:bg-yellow-400 bg-green-900 font-medium rounded-lg text-sm px-4 py-2">Log in</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
