import React, { useState } from "react";
import logo from "./../../../assets/logo/Wild Earth Monitor.webp"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-8 mr-4"
            alt="Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
           Wild Earth Monitor
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {/* Home */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            {/* About Us */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                About Us
              </a>
            </li>
            {/* Dropdown Menu */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                World Events
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Options */}
              {isDropdownOpen && (
                <ul className="absolute left-0 z-10 w-44 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      Wildfire Tracker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      Forest
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      Deforestation
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* Contact */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
