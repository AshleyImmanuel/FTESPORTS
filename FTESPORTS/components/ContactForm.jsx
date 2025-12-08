'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaEnvelope, FaUser, FaMobileAlt, FaCommentDots } from 'react-icons/fa';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll contact you soon.' });
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="comms" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-deep-black">
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
                        COMMS <span className="text-neon-green">ARRAY</span>
                    </h2>
                    <div className="w-32 h-1 bg-neon-green mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg sm:text-xl font-montserrat max-w-2xl mx-auto">
                        Establish contact. Join the squad or discuss partnerships.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Direct Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-orbitron font-bold text-white mb-8">
                            DIRECT <span className="text-neon-green">CHANNELS</span>
                        </h3>

                        {/* Instagram Button */}
                        <motion.a
                            href="https://www.instagram.com/finaltouch.esports/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            }}
                            className="group block text-white rounded-lg p-6 transition-all duration-300 glow"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-white bg-opacity-20 p-4 rounded-full group-hover:bg-opacity-30 transition-all">
                                    <FaInstagram className="text-4xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-montserrat uppercase tracking-wide opacity-90">
                                        Follow Us
                                    </p>
                                    <p className="text-2xl font-orbitron font-bold">@finaltouch.esports</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Email Button */}
                        <motion.a
                            href="mailto:finaltouch.esp@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #EA4335 0%, #FBBC04 25%, #34A853 50%, #4285F4 75%, #EA4335 100%)',
                            }}
                            className="group block text-white rounded-lg p-6 transition-all duration-300 glow"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-white bg-opacity-20 p-4 rounded-full group-hover:bg-opacity-30 transition-all">
                                    <FaEnvelope className="text-4xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-montserrat uppercase tracking-wide opacity-90">
                                        Email Us
                                    </p>
                                    <p className="text-xl font-orbitron font-bold">finaltouch.esp@gmail.com</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Info Box */}
                        <div className="bg-cyber-gray border-l-4 border-neon-green p-6 rounded-lg">
                            <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                                <span className="text-neon-green font-bold">⚡ FAST RESPONSE:</span> Our team monitors
                                these channels 24/7. Expect a response within 2-4 hours during active hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-cyber-gray to-deep-black border-2 border-neon-green rounded-lg p-8">
                            <h3 className="text-3xl font-orbitron font-bold text-white mb-6">
                                MISSION <span className="text-neon-green">BRIEF</span>
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-neon-green text-sm font-montserrat font-semibold mb-2 uppercase tracking-wide">
                                        <FaUser className="inline mr-2" />
                                        Codename
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-deep-black border-2 border-gray-700 focus:border-neon-green text-white px-4 py-3 rounded-lg font-montserrat transition-all duration-300 outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-neon-green text-sm font-montserrat font-semibold mb-2 uppercase tracking-wide">
                                        <FaEnvelope className="inline mr-2" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-deep-black border-2 border-gray-700 focus:border-neon-green text-white px-4 py-3 rounded-lg font-montserrat transition-all duration-300 outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Mobile Field */}
                                <div>
                                    <label className="block text-neon-green text-sm font-montserrat font-semibold mb-2 uppercase tracking-wide">
                                        <FaMobileAlt className="inline mr-2" />
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10,15}"
                                        className="w-full bg-deep-black border-2 border-gray-700 focus:border-neon-green text-white px-4 py-3 rounded-lg font-montserrat transition-all duration-300 outline-none"
                                        placeholder="10-15 digits"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-neon-green text-sm font-montserrat font-semibold mb-2 uppercase tracking-wide">
                                        <FaCommentDots className="inline mr-2" />
                                        Mission Brief
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full bg-deep-black border-2 border-gray-700 focus:border-neon-green text-white px-4 py-3 rounded-lg font-montserrat transition-all duration-300 outline-none resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full polygon-btn bg-neon-green text-deep-black font-orbitron font-bold text-lg px-8 py-4 uppercase tracking-wider transition-all duration-300 ${isSubmitting
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-white glow'
                                        }`}
                                >
                                    {isSubmitting ? 'SENDING...' : 'TRANSMIT MESSAGE'}
                                </button>

                                {/* Status Message */}
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                            ? 'bg-green-900 border-l-4 border-neon-green'
                                            : 'bg-red-900 border-l-4 border-red-500'
                                            }`}
                                    >
                                        <p className="text-white font-montserrat text-sm">
                                            {submitStatus.message}
                                        </p>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
