"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg rounded-xl m-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">CB</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/CB" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/About" className="text-white hover:text-gray-300">
            About
          </Link>

          <Link
            href="https://wa.me/919780400311"
            className="text-white hover:text-gray-300"
          >
            Contact
          </Link>
          <Link href="/Login" className="text-white hover:text-purple-500">
            Login
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/CB"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Services
          </Link>
          <Link
            href="/Login"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            href="https://wa.me/919780400311"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
