import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <nav className=" mx-auto py-4">
        <ul className="flex space-x-8 justify-center text-white">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red-400" :"hover:text-cyan-500"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => isActive ? "text-red-400" :"hover:text-cyan-500"}>Product</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-400" :"hover:text-cyan-500"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-400" :"hover:text-cyan-500"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;










