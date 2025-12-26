'use client'
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
export default function PageClient(){
    const router = useRouter();

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
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    };

    return(
         <div className="mt-10">
         
          <form className="flex flex-col items-start w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="name" defaultValue="Contact Form" />
            <div className="w-full flex flex-col items-center sm:flex-row">
              <div className="w-full mb-8 sm:pr-2">
                <label className="block mb-2" htmlFor="name">
                  Name
                  <input
                    className="p-3 text-lg rounded w-full placeholder:invisible bg-gray-700 focus:bg-white focus:text-black focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="w-full mb-8 sm:pl-2">
                <label className="block mb-2" htmlFor="email">
                  Email
                  <input
                    className="p-3 text-lg rounded w-full placeholder:invisible bg-gray-700 focus:bg-white focus:text-black focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="w-full mb-8 relative">
              <label className="block mb-4" htmlFor="message">
                Message
                <textarea
                  className="p-3 text-lg rounded w-full resize-y placeholder:invisible bg-gray-700 focus:bg-white focus:text-black focus:outline-none"
                  cols={30}
                  rows={6}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-lg rounded-md hover:text-gray-500 text-black bg-white contact-form-btn btns"
            >
              Send
            </button>
          </form>

    </div>
    )
}