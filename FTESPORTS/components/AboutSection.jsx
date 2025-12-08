'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaGamepad, FaBullseye } from 'react-icons/fa';

export default function AboutSection() {
    const stats = [
        { icon: FaTrophy, label: 'Tournaments', value: '50+' },
        { icon: FaUsers, label: 'Squad Members', value: '15+' },
        { icon: FaGamepad, label: 'Active Years', value: '3+' },
        { icon: FaBullseye, label: 'Win Rate', value: '75%' },
    ];

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
                        ABOUT <span className="text-neon-green">FTZ</span>
                    </h2>
                    <div className="w-32 h-1 bg-neon-green mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg sm:text-xl font-montserrat max-w-2xl mx-auto">
                        More than a team. We're a movement.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-l-4 border-neon-green p-8 rounded-lg">
                            <h3 className="text-3xl font-orbitron font-black text-neon-green mb-6">
                                OUR STORY
                            </h3>
                            <div className="space-y-4 text-gray-300 font-montserrat text-base leading-relaxed">
                                <p>
                                    Final Touch Esports was born from a simple belief: <span className="text-neon-green font-semibold">every match deserves to be finished with excellence</span>. Founded by passionate Free Fire enthusiasts who refused to settle for mediocrity, FTZ has evolved from a small group of dedicated players into one of the most respected names in the competitive Free Fire scene.
                                </p>
                                <p>
                                    What started as late-night scrimmages and local tournaments has transformed into a full-fledged esports organization. Our journey hasn't been easy—we've faced countless defeats, learned from every mistake, and celebrated hard-earned victories. Each tournament taught us something new, each match made us stronger.
                                </p>
                                <p>
                                    Today, Final Touch Esports stands as a testament to what dedication, strategy, and teamwork can achieve. We've competed in over 50 tournaments, built a roster of elite players, and created a community that extends far beyond the battlefield. Our players don't just compete—they inspire.
                                </p>
                                <p className="text-neon-green font-semibold">
                                    We're not just playing games. We're building legacies.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Mission & Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green p-8 rounded-lg">
                            <h3 className="text-2xl font-orbitron font-black text-white mb-4">
                                OUR <span className="text-neon-green">MISSION</span>
                            </h3>
                            <p className="text-gray-300 font-montserrat text-base leading-relaxed">
                                To dominate the Free Fire competitive scene through strategic excellence, disciplined training, and unwavering team synergy. We aim to set new standards in Indian esports by combining tactical brilliance with cutting-edge technology and professional management.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green p-8 rounded-lg">
                            <h3 className="text-2xl font-orbitron font-black text-white mb-4">
                                OUR <span className="text-neon-green">VISION</span>
                            </h3>
                            <p className="text-gray-300 font-montserrat text-base leading-relaxed">
                                To become India's premier Free Fire esports organization, recognized globally for our competitive achievements, player development programs, and contribution to the growth of mobile esports. We envision a future where FTZ is synonymous with excellence, innovation, and championship glory.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green p-8 rounded-lg">
                            <h3 className="text-2xl font-orbitron font-black text-white mb-4">
                                CORE <span className="text-neon-green">VALUES</span>
                            </h3>
                            <ul className="space-y-3 text-gray-300 font-montserrat text-base">
                                <li className="flex items-start">
                                    <span className="text-neon-green mr-3">▸</span>
                                    <span><strong className="text-white">Discipline:</strong> Consistent practice, strategic preparation, mental fortitude</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-green mr-3">▸</span>
                                    <span><strong className="text-white">Excellence:</strong> Never settle, always improve, aim for perfection</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-green mr-3">▸</span>
                                    <span><strong className="text-white">Teamwork:</strong> Individual skill wins matches, teamwork wins championships</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-neon-green mr-3">▸</span>
                                    <span><strong className="text-white">Innovation:</strong> Embrace technology, adapt strategies, stay ahead</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green rounded-lg p-6 text-center"
                        >
                            <stat.icon className="text-4xl text-neon-green mx-auto mb-3" />
                            <p className="text-3xl font-orbitron font-black text-white mb-2">
                                {stat.value}
                            </p>
                            <p className="text-gray-400 font-montserrat text-sm uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* What Sets Us Apart */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-orbitron font-black text-white text-center mb-8">
                        WHAT SETS <span className="text-neon-green">US APART</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-cyber-gray border-l-4 border-neon-green p-6 rounded-lg">
                            <h4 className="text-xl font-orbitron font-bold text-neon-green mb-3">
                                STRATEGIC DEPTH
                            </h4>
                            <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                                Every match is meticulously planned. We analyze opponents, study meta shifts, and develop custom strategies for each tournament. Our tactical playbook is constantly evolving.
                            </p>
                        </div>
                        <div className="bg-cyber-gray border-l-4 border-neon-green p-6 rounded-lg">
                            <h4 className="text-xl font-orbitron font-bold text-neon-green mb-3">
                                TECH-FORWARD
                            </h4>
                            <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                                From advanced analytics to custom training tools, we leverage technology to gain competitive advantages. Our digital infrastructure supports every aspect of team operations.
                            </p>
                        </div>
                        <div className="bg-cyber-gray border-l-4 border-neon-green p-6 rounded-lg">
                            <h4 className="text-xl font-orbitron font-bold text-neon-green mb-3">
                                COMMUNITY FIRST
                            </h4>
                            <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                                We're building more than a team—we're creating a movement. Through live streams, community events, and fan engagement, we bring supporters into our journey.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
