import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button className="lg:hidden text-gray-600 mr-4">
            <FaBars className="h-6 w-6" />
          </button>
          <span className="font-bold text-xl text-gray-800">E-Comm</span>
        </div>
        <nav className="hidden lg:flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900">
            HOME
          </a>
          <a href="#" className="hover:text-gray-900">
            BAG
          </a>
          <a href="#" className="hover:text-gray-900">
            SNEAKERS
          </a>
          <a href="#" className="hover:text-gray-900">
            BELT
          </a>
          <a href="#" className="hover:text-gray-900">
            CONTACT
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
            <FaShoppingCart className="h-5 w-5" />
            <span className="hidden sm:block">Items</span>
            <span className="font-bold ml-1">$0.00</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;