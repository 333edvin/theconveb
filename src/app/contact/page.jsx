"use client"; // Required for state and events
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
    const router = useRouter();
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setStatus('loading');
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            router.push('/');
            toast.success('Message sent successfully!');
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
            toast.error('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="mt-10 text-white">
            <section className="py-16 md:py-24 px-4 md:px-6 max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-3 md:mb-5">
                    Contact Us
                </h1>
                <h3 className="text-lg md:text-3xl mb-3 md:mb-4 font-light text-white">
                    This is where your next phase begins.
                </h3>
                <p className="text-gray-500 text-sm md:text-lg mb-8 md:mb-12">
                    Let&apos;s talk about your business and what comes next
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-12 text-left">

                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-sm md:text-lg mb-1 md:mb-2 group-focus-within:text-white transition-colors">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent outline-none py-1.5 md:py-2 text-base md:text-xl"
                        />
                    </div>

                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-sm md:text-lg mb-1 md:mb-2 group-focus-within:text-white transition-colors">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent outline-none py-1.5 md:py-2 text-base md:text-xl"
                        />
                    </div>

                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-sm md:text-lg mb-1 md:mb-2 group-focus-within:text-white transition-colors">
                            Description
                        </label>
                        <textarea
                            cols={30}
                            rows={4}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent outline-none py-1.5 md:py-2 text-base md:text-xl resize-none"
                        />
                    </div>

                    <div className="flex flex-col items-center pt-2 md:pt-8">
                        <div className="relative group w-full sm:w-auto">
                            <div className="absolute -inset-1 bg-white opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="relative w-full sm:w-auto bg-white text-black px-16 py-3 md:py-4 text-base md:text-lg font-medium hover:bg-gray-100 transition-all disabled:bg-gray-400"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send'}
                            </button>
                        </div>

                        {status === 'success' && (
                            <p className="mt-4 text-green-400 text-sm md:text-base">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-400 text-sm md:text-base">Something went wrong. Please try again.</p>
                        )}
                    </div>
                </form>
            </section>

            {/* Map Section */}
            <section className="w-full h-64 md:h-[500px] relative grayscale invert contrast-125 opacity-70 border-y border-white/10">
                <div className="absolute inset-0 bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full absolute top-0"></div>
                </div>
            </section>
        </div>
    );
};

export default Page;