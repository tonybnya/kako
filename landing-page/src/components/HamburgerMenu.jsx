import React, { useState } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-expanded={menuOpen}
      >
        <span className="sr-only">Open hamburger menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          {menuOpen ? (
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          ) : (
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          )}
        </svg>
      </button>
      <div
        className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium font-righteous uppercase flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
              aria-current="page"
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded text-white hover:underline max-sm:hover:bg-indigo-dye max-sm:hover:no-underline"
            >
              Mobile App
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
