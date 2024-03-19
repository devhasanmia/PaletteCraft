import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#104864] p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-white text-lg font-extrabold">
            PaletteCraft
          </NavLink>
        </div>
        <div className=" font-extrabold hidden md:block">
          <NavLink to="/" className="text-white text-sm mx-4">
            Home
          </NavLink>
          <NavLink to="/create" className="text-white text-sm mx-4">
            Create Color Palette
          </NavLink>
          <NavLink to="/popular" className="text-white text-sm mx-4">
            Popular Color
          </NavLink>

        </div>
        <div className="md:hidden">
          {/* Hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-xl focus:outline-none"
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
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink to='/' className="block text-white text-sm py-2 px-4">
            Home
          </NavLink>
          <NavLink to="/create" className="block text-white text-sm py-2 px-4">
          Create Color Palette
          </NavLink>
          <NavLink to="/popular" className="block text-white text-sm py-2 px-4">
          Popular Color
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
