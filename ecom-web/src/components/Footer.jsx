import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-700 py-10 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10 border-b border-gray-300 pb-8">
          <div>
            <h3 className="font-bold text-xl mb-2 flex items-center justify-center md:justify-start">
              <div className="bg-blue-500 rounded-full p-1 mr-2">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              E-Comm
            </h3>
            <p className="text-sm">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-sm mb-2">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">
              E-Comm, 4578<br />
              Marmora Road,<br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-center sm:text-left mb-10">
          <div>
            <h4 className="font-bold mb-3">Information</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Service</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">My Account</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Our Offers</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-xs mb-4 sm:mb-0">
            © 2018 ECommerce theme by www.boselbisev.com
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;