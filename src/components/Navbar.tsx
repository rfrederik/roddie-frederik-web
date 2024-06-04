import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-xl">RF</Link>
          <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/lounge" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Lounge</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
