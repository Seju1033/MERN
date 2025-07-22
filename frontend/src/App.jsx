import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

// Main App Component
const App = () => {
    return (
        <div className="font-inter text-gray-800 bg-gray-50 min-h-screen">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <CallToActionSection />
            <Footer />
        </div>
    );
};

// Hero section 
const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32 text-center overflow-hidden rounded-b-3xl shadow-xl">
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                    Delight Your Customers with Effortless Service
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in">
                    ResolveEase is an intuitive, AI-powered customer service software that helps businesses deliver exceptional support and build lasting customer relationships.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Get Started Free
                    </button>
                    <button className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Request a Demo
                    </button>
                </div>
                {/* Placeholder for a large illustration/screenshot */}
                <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-4 max-w-5xl mx-auto shadow-xl">
                    <img src="https://placehold.co/1200x600/e0e7ff/4f46e5?text=Product+Dashboard+Screenshot" alt="Product Dashboard Screenshot" className="w-full h-auto rounded-lg shadow-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/cccccc/333333?text=Image+Not+Available'; }} />
                </div>
            </div>
        </section>
    );
};

// Feature Card 
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex justify-center items-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mx-auto mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

// Key Features Section Component
const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    All the Tools You Need to Support Your Customers
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    From ticketing to automation, ResolveEase provides a comprehensive suite of features designed to enhance your customer support operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h7a1 1 0 100-2H3zm0 4a1 1 0 000 2h4a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3z" clipRule="evenodd"></path></svg>}
                        title="Unified Inbox"
                        description="Manage all customer conversations from email, chat, social media, and phone in one centralized place."
                    />
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>}
                        title="Automation & AI"
                        description="Automate repetitive tasks, set up workflows, and leverage AI for quick responses and insights."
                    />
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>}
                        title="Knowledge Base"
                        description="Empower customers with self-service options through an easily searchable and comprehensive knowledge base."
                    />
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}
                        title="Team Collaboration"
                        description="Facilitate seamless internal communication and collaboration among support agents to resolve issues faster."
                    />
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l2.293 2.293a1 1 0 001.414-1.414L11 10.586V7z" clipRule="evenodd"></path></svg>}
                        title="Reporting & Analytics"
                        description="Gain valuable insights into support performance with customizable reports and dashboards."
                    />
                    <FeatureCard
                        icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H10z" clipRule="evenodd"></path></svg>}
                        title="Customization"
                        description="Tailor the software to your specific business needs with flexible customization options."
                    />
                </div>
            </div>
        </section>
    );
};

// Call to Action Section
const CallToActionSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center rounded-t-3xl shadow-xl mt-16">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                    Ready to Transform Your Customer Service?
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
                    Join thousands of businesses that trust ResolveEase to deliver exceptional support every day.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Start Your Free Trial
                    </button>
                    <button className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Talk to Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-12 rounded-t-lg">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="font-bold text-xl text-white mb-4">ResolveEase</h3>
                    <p className="text-sm">
                        Delivering effortless customer service solutions.
                        <br />
                        &copy; {new Date().getFullYear()} ResolveEase Inc. All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Features</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Solutions</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Pricing</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Support</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Help Center</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Community</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">FAQs</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <p className="text-sm">
                        123 Service Lane, Tech City,
                        <br />
                        State, Country 12345
                    </p>
                    <p className="text-sm mt-2">
                        Email: info@resolvease.com
                        <br />
                        Phone: +1 (555) 123-4567
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default App;
