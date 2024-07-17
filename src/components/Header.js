import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-red-600">
      <div className="lg:flex flex justify-between lg:p-5 p-4 text-white">
        <h1 className="lg:text-3xl text-2xl lg:ml-4 ml-3 text-white font-serif">Video Central</h1>

        <div className="lg:hidden ml-auto mr-8">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="h-8 w-8 lg:h-6 lg:w-6 text-white "/>
            ) : (
              <FaBars className="h-8 w-8 lg:h-6 lg:w-6 text-white" />
            )}
          </button>
        </div>

        <div className="lg:flex hidden items-center mr-12">
          <ul className="lg:flex gap-6 space-x-4">
            <li className="hover:text-black text-lg">
              <Link to="/video-central" onClick={closeMenu}>Home</Link>
            </li>
            <li className="hover:text-black text-lg">
              <Link to="/video-central/play" onClick={closeMenu}>How to play</Link>
            </li>
            <li className="hover:text-black text-lg">
              <Link to="/video-central/terms" onClick={closeMenu}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-18 right-0 h-auto w-64 bg-red-600 text-white p-4">
          <ul className="space-y-4">
            <li className="hover:text-black text-lg ">
              <Link to="/video-central" onClick={closeMenu}>Home</Link>
            </li>
            <li className="hover:text-black text-lg">
              <Link to="/video-central/play" onClick={closeMenu}>How to play</Link>
            </li>
            <li className="hover:text-black text-lg">
              <Link to="/video-central/terms" onClick={closeMenu}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;






