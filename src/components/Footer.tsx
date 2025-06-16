import React from 'react';
import { MailIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] text-white w-full py-8 border-t border-[rgba(255,255,255,0.3)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:arielasweiner@gmail.com" className="text-white hover:text-opacity-80" aria-label="Email">
            <MailIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ariela-baron-85267b224/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
        </div>
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Ariela Baron. All rights reserved.
        </p>
      </div>
    </footer>;
};
export default Footer;