

import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <footer className="body-font  text-2xl bg-black text-white py-4"> 
        <div className="container px-5 mx-auto flex flex-col sm:flex-row items-center sm:justify-center">
          {/* Logo Section */}
         
          
          {/* Copyright Text */}
          <p className="text-lg space-x-2 text-teal-500 sm:border-l-2 sm:border-gray-700 sm:pl-4">
            © 2024  Aiza Nadeem  
             
          </p>
          
          {/* Social Icons */}
          <span className="inline-flex mt-4 sm:mt-0 ">
          <Link href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 mx-1 transition duration-300">
        <FaWhatsapp className="w-5 h-5" />
         </Link>

            <Link href="L" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 mx-1 transition duration-300">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/aiza-nadeem-7339b127b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 mx-1 transition duration-300">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/AizaK333" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 mx-1 transition duration-300">
            <FaGithub className="w-5 h-5" />
            </Link>

          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
