'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = '#WeFinishWhatWeStart';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20"></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-deep-black to-deep-black"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Main Headline with Glitch Effect */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <h1
                        className="glitch text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-black text-white tracking-wider"
                        data-text="FINAL TOUCH"
                    >
                        FINAL <span className="text-neon-green">TOUCH</span>
                    </h1>
                </motion.div>

                {/* Typewriter Slogan */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mb-12"
                >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-semibold text-neon-green inline-block">
                        {typedText}
                        <span className="animate-blink">|</span>
                    </p>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-gray-400 text-lg sm:text-xl md:text-2xl font-montserrat mb-12 max-w-3xl mx-auto"
                >
                    Elite Free Fire Esports Organization. Tier-1 Competitive Squad.
                    <br />
                    <span className="text-neon-green">Strategy. Discipline. Victory.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    {/* Primary Button */}
                    <motion.a
                        href="#comms"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(0, 199, 1, 0.8), 0 0 60px rgba(0, 199, 1, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="polygon-btn bg-neon-green text-deep-black font-orbitron font-bold text-lg px-10 py-4 hover:bg-white transition-all duration-300 glow uppercase tracking-wider"
                    >
                        ENLIST NOW
                    </motion.a>

                    {/* Outline Button */}
                    <motion.a
                        href="#architects"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(0, 199, 1, 1)',
                            color: 'rgba(5, 5, 5, 1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-neon-green text-neon-green font-orbitron font-bold text-lg px-10 py-4 transition-all duration-300 uppercase tracking-wider"
                    >
                        SYSTEM INTEL
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-bounce"></div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements - Enhanced */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-20 right-20 w-64 h-64 bg-neon-green rounded-full blur-3xl opacity-20"
            ></motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute bottom-20 left-20 w-80 h-80 bg-neon-green rounded-full blur-3xl opacity-10"
            ></motion.div>

            {/* Additional floating orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
                className="absolute top-1/3 left-10 w-40 h-40 bg-neon-green rounded-full blur-2xl opacity-15"
            ></motion.div>

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.4, 1],
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                }}
                className="absolute bottom-1/3 right-10 w-56 h-56 bg-neon-green rounded-full blur-3xl opacity-12"
            ></motion.div>

            {/* Particle trails */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-neon-green rounded-full"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + i * 8}%`,
                    }}
                    animate={{
                        y: [0, -200, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </section>
    );
}
