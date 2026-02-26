import React from 'react';

const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-8 md:px-16 lg:px-24 border-t border-white/5 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:mb-20">
          
          {/* Our Address */}
          <div className="space-y-6">
            <h4 className="text-gray-500 text-sm font-medium tracking-widest uppercase">Our Address</h4>
            <address className="not-italic text-gray-300 space-y-2 leading-relaxed text-xs">
              <p>123456 Toronto</p>
              <p>Canada</p>
              <p>Building 47 office 38</p>
            </address>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-gray-500 text-sm font-medium tracking-widest uppercase">Contact</h4>
            <div className="text-gray-300 space-y-2 text-xs">
              <p className="hover:text-white transition-colors cursor-pointer">example@conveb.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">+91 8129 7797 13</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h4 className="text-gray-500 text-sm font-medium tracking-widest uppercase">Social Media</h4>
            <ul className="text-gray-300 space-y-2 text-xs">
              {['Facebook', 'Whatsapp', 'Instagram', 'Linkedin', 'Twitter'].map((social) => (
                <li key={social}>
                  <a href="#" className="hover:text-white transition-colors duration-300 block w-fit">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Call-to-Action */}
          <div className="lg:text-right flex items-start lg:justify-end">
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="w-8 h-[1px] bg-gray-600 group-hover:w-12 group-hover:bg-white transition-all duration-500"></span>
              <p className="text-gray-400 group-hover:text-white text-sm font-medium tracking-widest uppercase transition-colors">
                Follow Us
              </p>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center">
          <p className="text-gray-600 text-[10px] md:text-xs  uppercase">
            {currentYear} @ All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;