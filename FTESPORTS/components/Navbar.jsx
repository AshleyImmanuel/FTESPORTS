'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HQ', href: '#hero' },
        { name: 'ABOUT', href: '#about' },
        { name: 'ARCHITECTS', href: '#architects' },
        { name: 'LIVE', href: '#youtube' },
        { name: 'FUEL', href: '#fuel' },
        { name: 'COMMS', href: '#comms' },
    ];

    const whatsappNumber = '918943408464'; // Fahad's number

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black bg-opacity-90 backdrop-blur-md border-b border-neon-green border-opacity-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2"
                    >
                        <span className="text-2xl sm:text-3xl font-orbitron font-black text-white tracking-wider">
                            FINAL TOUCH
                        </span>
                        <span className="text-2xl sm:text-3xl font-orbitron font-black text-neon-green tracking-wider">
                            ESP
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:flex items-center space-x-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-neon-green font-montserrat font-semibold text-sm uppercase tracking-wider transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* WhatsApp Button (Fahad's number) */}
                        <motion.a
                            href={`https://wa.me/${whatsappNumber}?text=Hi%20Final%20Touch%20Esports!%20I%20want%20to%20connect%20with%20your%20team.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 211, 102, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white font-orbitron font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 uppercase tracking-wider"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>CONTACT</span>
                        </motion.a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neon-green text-2xl focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-cyber-gray border-t border-neon-green border-opacity-30"
                >
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-300 hover:text-neon-green font-montserrat font-semibold text-base uppercase tracking-wider transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hi%20Final%20Touch%20Esports!%20I%20want%20to%20connect%20with%20your%20team.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 text-white font-orbitron font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 uppercase tracking-wider"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>CONTACT</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
