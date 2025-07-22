import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white shadow-sm py-4 px-6 md:px-12 rounded-b-lg">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-bold text-2xl text-gray-900">ResolveEase</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/features" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Features</NavLink>
                    <NavLink to="/solutions" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Solutions</NavLink>
                    <NavLink to="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Pricing</NavLink>
                    <NavLink to="/resources" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Resources</NavLink>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <NavLink to="/signin" className="text-gray-600 hover:text-indigo-600 font-medium hidden sm:block transition duration-300">Sign In</NavLink>
                    <NavLink to="/signup">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                            Sign Up for Free
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
