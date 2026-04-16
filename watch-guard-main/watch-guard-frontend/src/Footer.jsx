import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ["Home" , "Info" , "News" , "Ngo" , "Complaint"];
  return (
    <footer className="bg-[#313131] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Navigation */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">WatchGuard</h2>
          <nav className="space-y-2">
            {quickLinks.map((link) =><a href={`/${link}`} className="block hover:text-gray-400">{link}</a>)}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a href="https://facebook.com" className="text-white hover:text-blue-500" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-600" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Footer Info */}
        <div className="text-center md:text-right">
          <p>&copy; 2024 WatchGuard. All Rights Reserved.</p>
          <p className="mt-2">Safeguarding our communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
