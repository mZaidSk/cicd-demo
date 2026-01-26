import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                    Get In Touch
                </h2>
                <p className="text-gray-400">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                        <Mail className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Email</h3>
                    <p className="text-gray-400 text-sm">contact@todoapp.com</p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
                        <Phone className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Phone</h3>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/10 mb-4">
                        <MapPin className="text-pink-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Location</h3>
                    <p className="text-gray-400 text-sm">San Francisco, CA</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-8 shadow-xl">
                {isSubmitted ? (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4 animate-pulse">
                            <CheckCircle className="text-green-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                        <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Tell us more about your inquiry..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
                        >
                            <span>Send Message</span>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
