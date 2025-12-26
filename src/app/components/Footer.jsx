'use client'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import React, { useState } from 'react';
import { toast } from 'sonner';
import logoname from '../../../public/images/logo.png';
import Image from "next/image";

function Footer() {
  const [formData, setFormData] = useState({
    email: '',
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
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    if (formData) {
      // router.push('/');
      toast.success('Thanks for joining');
      setFormData({  email: '' });
    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  };
  return (
    <>
      <div className="bg-[#060606] flex justify-between mx-auto p-8 md:p-10 gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 my-3 w-full">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="example@gmail.com"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="p-3 bg-cyan-700 rounded-lg text-white hover:bg-cyan-800 transition-colors duration-200"
            >
              Join
            </button>
          </div>
        </form>

        <div className="flex flex-col space-y-4">
          
          <div className="text-slate-500 space-y-2 text-sm">
            <a href="mailto:conveb@gmail.com" className="flex items-center gap-3 hover:text-slate-300 transition-colors duration-200">
              <IoMdMail />
              conveb@gmail.com
            </a>
            <a href="tel:+918129779713" className="flex items-center gap-3 hover:text-slate-300 transition-colors duration-200">
              <FaPhoneAlt />
              +91 8129-779-713
            </a>
         
           
            <p className="text-slate-500 my-3 flex items-center gap-3 hover:text-slate-300 transition-colors duration-200">
              <FaLocationDot />
              Thrissur, Kerala
            </p>
          </div>
        
         
          <div className="flex gap-3 text-3xl text-slate-500 my-3">
            <a href="https://www.instagram.com" target="_blank" className="hover:text-slate-300 transition-colors duration-200">
              <AiFillInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="hover:text-slate-300 transition-colors duration-200">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#060606] py-4 md:py-0 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-10">
          <Image src={logoname} alt="conveb-logoname" className="w-20 md:w-18" />
          <p className="text-slate-500 text-xs  mt-4 md:mt-0">
            Copyright &copy; 2024 Conveb
          </p>
        </div>
      </div>

    </>
  );
}

export default Footer;
