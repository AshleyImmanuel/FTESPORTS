'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [glitchText, setGlitchText] = useState('FINAL TOUCH');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        const glitchInterval = setInterval(() => {
            const glitchChars = ['F', 'I', 'N', 'A', 'L', ' ', 'T', 'O', 'U', 'C', 'H'];
            const randomGlitch = glitchChars.map(char =>
                Math.random() > 0.7 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
            ).join('');
            setGlitchText(randomGlitch);
            setTimeout(() => setGlitchText('FINAL TOUCH'), 50);
        }, 2000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(glitchInterval);
        };
    }, []);

    if (!mounted) return null;

    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
    }));

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-deep-black flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 grid-bg opacity-20"></div>

                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-neon-green"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}

                    <motion.div
                        className="absolute w-64 h-64"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.polygon
                                points="50 1 95 25 95 75 50 99 5 75 5 25"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00c701" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#00c701" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#00c701" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="text-7xl md:text-9xl font-orbitron font-black text-white tracking-wider mb-2 relative">
                                <span className="relative inline-block">
                                    {glitchText}
                                    <motion.span
                                        className="absolute inset-0 text-neon-green"
                                        animate={{
                                            x: [0, -2, 2, -2, 0],
                                            opacity: [0, 0.5, 0, 0.5, 0],
                                        }}
                                        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                                    >
                                        {glitchText}
                                    </motion.span>
                                </span>
                            </h1>
                            <motion.h2
                                className="text-4xl md:text-6xl font-orbitron font-black text-neon-green tracking-wider"
                                animate={{
                                    textShadow: [
                                        '0 0 10px rgba(0, 199, 1, 0.5)',
                                        '0 0 20px rgba(0, 199, 1, 0.8)',
                                        '0 0 10px rgba(0, 199, 1, 0.5)',
                                    ],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                ESPORTS
                            </motion.h2>
                        </motion.div>

                        <div className="w-80 md:w-96 mx-auto mb-6">
                            <div className="relative h-2 bg-cyber-gray rounded-full overflow-hidden border border-neon-green border-opacity-30">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-green via-green-400 to-neon-green rounded-full"
                                    style={{ width: `${progress}%` }}
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px rgba(0, 199, 1, 0.5)',
                                            '0 0 20px rgba(0, 199, 1, 0.8)',
                                            '0 0 10px rgba(0, 199, 1, 0.5)',
                                        ],
                                    }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                    animate={{ x: ['-100%', '400%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-neon-green font-mono text-sm font-bold">
                                    {progress}%
                                </span>
                                <span className="text-gray-400 font-mono text-sm">
                                    INITIALIZING...
                                </span>
                            </div>
                        </div>

                        <motion.div
                            className="text-gray-400 font-mono text-xs uppercase tracking-widest"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            {progress < 30 && '[ LOADING ASSETS ]'}
                            {progress >= 30 && progress < 60 && '[ INITIALIZING SYSTEMS ]'}
                            {progress >= 60 && progress < 90 && '[ PREPARING BATTLEFIELD ]'}
                            {progress >= 90 && '[ READY TO DEPLOY ]'}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-neon-green font-montserrat text-sm mt-8 tracking-wider"
                        >
                            #WeFinishWhatWeStart
                        </motion.p>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-neon-green opacity-50"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-neon-green opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-neon-green opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-neon-green opacity-50"></div>

                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 199, 1, 0.1) 50%, transparent 100%)',
                        }}
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
