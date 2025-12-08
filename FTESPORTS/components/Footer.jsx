'use client';

import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-deep-black border-t border-neon-green border-opacity-30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-orbitron font-black text-white mb-2">
                            FINAL <span className="text-neon-green">TOUCH</span>
                        </h3>
                        <p className="text-gray-400 font-montserrat text-sm">
                            Elite Free Fire Esports Organization
                        </p>
                        <p className="text-neon-green font-montserrat text-sm mt-2 font-semibold">
                            #WeFinishWhatWeStart
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-orbitron font-bold text-neon-green mb-4 uppercase">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#hero"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#architects"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    The Architects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#youtube"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    Live Coverage
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#fuel"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    Fuel Station
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#comms"
                                    className="text-gray-400 hover:text-neon-green font-montserrat text-sm transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info & Social */}
                    <div>
                        <h4 className="text-lg font-orbitron font-bold text-neon-green mb-4 uppercase">
                            Connect
                        </h4>
                        <p className="text-gray-400 font-montserrat text-sm mb-2">
                            Email: finaltouch.esp@gmail.com
                        </p>
                        <p className="text-gray-400 font-montserrat text-sm mb-4">
                            Available 24/7 for partnerships and squad inquiries
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/finaltouch.esports/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                }}
                                className="p-3 rounded-full hover:scale-110 transition-transform duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-xl text-white" />
                            </a>
                            <a
                                href="https://www.youtube.com/@hitman45gaming83"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: '#FF0000',
                                }}
                                className="p-3 rounded-full hover:scale-110 transition-transform duration-300"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="text-xl text-white" />
                            </a>
                            <a
                                href="https://wa.me/918943408464?text=Hi%20Final%20Touch%20Esports!"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: '#25D366',
                                }}
                                className="p-3 rounded-full hover:scale-110 transition-transform duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-xl text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 font-montserrat text-sm">
                        © {currentYear} Final Touch Esports. All rights reserved.
                    </p>
                    <p className="text-gray-600 font-mono text-xs mt-2">
                        Built with Next.js 14 | Powered by Passion
                    </p>
                </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-neon-green opacity-20"></div>
        </footer>
    );
}
