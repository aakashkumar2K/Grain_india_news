import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-white"><img src="../../public/logoD.webp" width={50} alt="" /></div>
        <div className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/marketrates" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Market Rates
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/admin" 
            className={({ isActive }) => 
              isActive ? "text-orange-500 font-semibold text-lg" : "text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Admin
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 text-orange-500 font-semibold text-lg" : "block px-4 py-2 text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 text-orange-500 font-semibold text-lg" : "block px-4 py-2 text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/marketrates" 
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 text-orange-500 font-semibold text-lg" : "block px-4 py-2 text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Market Rates
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 text-orange-500 font-semibold text-lg" : "block px-4 py-2 text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 text-orange-500 font-semibold text-lg" : "block px-4 py-2 text-white hover:text-orange-500 font-semibold text-lg"
            }
          >
            Blog
          </NavLink>
          
        </div>
      )}
    </nav>
  );
};