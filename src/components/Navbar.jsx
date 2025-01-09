"use client";

import React, { useState } from "react";
import Link from "next/link";
import { colors } from "@/utils/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`bg-secundario text-white px-4 py-3 shadow-md relative z-20`}>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Acortador de link</div>

        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden lg:flex space-x-6 text-xl mr-4">
          <Link href="/task" className="hover:underline hover:-translate-y-1 transition-all duration-300">
            Sobre Nosotros
          </Link>
          {/* <Link href="/task/create" className="hover:underline hover:-translate-y-1 transition-all duration-300">
            Crear cuenta
          </Link> */}
        </div>
      </div>

      {/* Modal Menu for Small Screens */}
  <div
    className={`fixed inset-0 bg-principal flex items-center justify-center flex-col space-y-6 z-30 transition-all duration-300 ${
      isOpen ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-x-full -z-30'
    }`}
  >
    {/* Close Button */}
    <button
      onClick={closeMenu}
      className="absolute top-4 right-4 text-black text-xl p-2"
    >
      ✖
    </button>
    
    {/* Links */}
    {/* <Link
      href="/task"
      className="text-white p-4 shadow-xl bg-secundario border-gray-500 border-opacity-20 rounded-lg w-2/3 text-center border-2 text-2xl hover:underline hover:-translate-y-2 hover:bg-blue-600 transition-all duration-300"
      onClick={closeMenu}
    >
      Crear cuenta
    </Link> */}
    <Link
      href="/task/create"
      className="text-white p-4 shadow-xl bg-secundario border-gray-500 border-opacity-20 rounded-lg w-2/3 text-center border-2 text-2xl hover:underline hover:-translate-y-2 hover:bg-blue-600 transition-all duration-300"
      onClick={closeMenu}
    >
      Sobre Nosotros
    </Link>
  </div>
</nav>
  );
};

export default Navbar;
