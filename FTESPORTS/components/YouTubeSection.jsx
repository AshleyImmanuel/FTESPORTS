'use client';

import { motion } from 'framer-motion';
import { FaYoutube, FaPlay } from 'react-icons/fa';

export default function YouTubeSection() {
    const youtubeChannel = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || 'https://www.youtube.com/@hitman45gaming83';

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-deep-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-orbitron font-black text-white mb-4">
                        LIVE <span className="text-neon-green">COVERAGE</span>
                    </h2>
                    <div className="w-32 h-1 bg-neon-green mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg sm:text-xl font-montserrat max-w-2xl mx-auto">
                        Watch our tournaments live. Experience the action.
                    </p>
                </motion.div>

                {/* YouTube Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Streamer Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green rounded-lg p-8">
                            {/* Badge */}
                            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-mono text-xs font-bold mb-4 flex items-center space-x-2">
                                <FaYoutube className="text-lg" />
                                <span>OFFICIAL STREAMER</span>
                            </div>

                            {/* Streamer Name */}
                            <h3 className="text-4xl font-orbitron font-black text-white mb-3">
                                HITMAN45 <span className="text-neon-green">GAMING</span>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 font-montserrat text-lg leading-relaxed mb-6">
                                Our official tournament broadcaster bringing you live coverage of every match.
                                Professional commentary, expert analysis, and exclusive behind-the-scenes content
                                from Final Touch Esports competitive events.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-deep-black border border-neon-green border-opacity-30 rounded-lg p-4 text-center">
                                    <p className="text-neon-green text-2xl font-orbitron font-bold">LIVE</p>
                                    <p className="text-gray-400 text-sm font-montserrat">Tournament Streams</p>
                                </div>
                                <div className="bg-deep-black border border-neon-green border-opacity-30 rounded-lg p-4 text-center">
                                    <p className="text-neon-green text-2xl font-orbitron font-bold">24/7</p>
                                    <p className="text-gray-400 text-sm font-montserrat">Content Updates</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={youtubeChannel}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-500 text-white font-orbitron font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 w-full"
                            >
                                <FaYoutube className="text-2xl" />
                                <span>SUBSCRIBE NOW</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: YouTube Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green rounded-lg p-4 overflow-hidden">
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-neon-green"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-neon-green"></div>

                            {/* YouTube Embed */}
                            <div className="relative aspect-video bg-deep-black rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed?listType=user_uploads&list=hitman45gaming83"
                                    title="Hitman45 Gaming - Latest Uploads"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Live Indicator */}
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-8 right-8 bg-red-600 text-white px-4 py-2 rounded-full font-orbitron font-bold text-xs flex items-center space-x-2"
                            >
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span>WATCH LIVE</span>
                            </motion.div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 bg-cyber-gray border-l-4 border-red-600 p-4 rounded-lg">
                            <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                                <span className="text-red-500 font-bold">🔴 LIVE ALERTS:</span> Turn on notifications
                                to never miss a tournament stream. Get real-time updates on match schedules and results.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
