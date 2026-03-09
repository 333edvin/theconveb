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
        <div className="bg-black text-white ">
            <section className="py-24 px-6 max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-5">
                    Contact Us
                </h1>
                <h3 className=" text-lg md:text-3xl mb-4 font-light text-white">
                    This is where your next phase begins.
                </h3>
                <p className="text-gray-500 text-sm md:text-lg mb-12">
                    Let's talk about your business and what comes next
                </p>

                {/* 4. Attach handleSubmit to the form */}
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-12 text-left">
                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-lg mb-2 group-focus-within:text-white transition-colors">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent outline-none py-2 text-xl"
                        />
                    </div>

                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-lg mb-2 group-focus-within:text-white transition-colors">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent outline-none py-2 text-xl"
                        />
                    </div>

                    <div className="relative border-b border-white/20 pb-2 group">
                        <label className="block text-gray-400 text-lg mb-2 group-focus-within:text-white transition-colors">
                            Description
                        </label>
                        <textarea
                            cols={30}
                            rows={6}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            type="text"
                            required
                            className="w-full bg-transparent outline-none py-2 text-xl resize-none"
                        />
                    </div>

                    <div className="flex flex-col items-center pt-2 md:pt-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-white opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="relative bg-white text-black px-16 py-4 text-lg font-medium hover:bg-gray-100 transition-all disabled:bg-gray-400"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send'}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <p className="mt-4 text-green-400">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
                        )}
                    </div>
                </form>
            </section>

            {/* Map Section stays the same... */}
            <section className="w-full h-[500px] relative grayscale invert contrast-125 opacity-70 border-y border-white/10">
                <div className="absolute inset-0 bg-[url('https://api.placeholder.com/map')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0"></div>
                </div>
            </section>
        </div>
    );
};

export default Page;