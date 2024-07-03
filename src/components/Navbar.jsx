/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`w-screen h-[93px] flex items-center justify-between font-bold sticky top-0 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      } z-50 px-4 md:px-16`}
    >
      <div className="md:hidden flex items-center justify-between w-full">
        <div className="block text-2xl cursor-pointer" onClick={toggleMenu}>
          <IoMdMenu size={"30px"}/>
        </div>
        <span className="text-[#487DFF] text-3xl block p-3 items-center">Wonder</span>
        <span className="block h-12">
          <img src={darkMode ? 'Logo_Conatus_dark.png' : 'Logo_Conatus.png'} className="h-12" alt="logo" />
        </span>
      </div>
      <div
        className={`content flex-col md:flex md:flex-row items-center cursor-pointer space-y-2 ${
          darkMode ? 'bg-white opacity-75 text-black' : 'bg-white '
        } md:space-x-6 absolute md:relative top-[93px] left-0 w-full p-5 h-screen text-lg md:w-auto md:top-0 ${
          menuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <div className="flex flex-col md:flex-row md:items-center text-lg space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 cursor-pointer">
          <div className="hover:text-blue-500 transition-colors duration-300">Features</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Contact</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center text-lg space-y-2 md:space-y-0 md:space-x-6 cursor-pointer">
          <div className="hover:text-blue-500 transition-colors duration-300">Parents</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Subject</div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <button className="rounded-2xl w-20 h-8 bg-black  text-white hover:scale-110 transition-transform duration-300 ease-in-out">
            Login
          </button>
          <SunMoonSlider darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between w-full">
        <span className="block h-12">
          <img src={darkMode ? 'Logo_Conatus_dark.png' : 'Logo_Conatus.png'} className="h-12" alt="logo" />
        </span>
        <div className="flex items-center space-x-6">
          <div className="hover:text-blue-500 text-xl transition-colors duration-300">Features</div>
          <div className="hover:text-blue-500 text-xl transition-colors duration-300">Contact</div>
          <span className="text-[#487DFF] text-3xl block p-3 items-center">Wonder</span>
          <div className="hover:text-blue-500 text-xl transition-colors duration-300">Parents</div>
          <div className="hover:text-blue-500 text-xl transition-colors duration-300">Subject</div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className={`rounded-2xl w-20 h-8 ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            } hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            Login
          </button>
          <SunMoonSlider darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const SunMoonSlider = ({ darkMode, toggleDarkMode }) => {
  return (
    <div
      className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center p-1 cursor-pointer"
      onClick={toggleDarkMode}
    >
      <div
        className={`absolute left-1 top-1 transition-transform transform ${
          darkMode ? 'translate-x-8' : 'translate-x-0'
        } w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center`}
      >
        {darkMode ? <FaMoon className="text-yellow-300" /> : <FaSun className="text-yellow-500" />}
      </div>
    </div>
  );
};
