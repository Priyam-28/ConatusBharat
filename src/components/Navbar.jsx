/* eslint-disable react/prop-types */
import { useState } from 'react';

const Navbar = ({darkMode,toggleDarkMode}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={`w-screen h-[93px] flex items-center justify-between font-bold sticky top-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} z-50 px-4 md:px-16`}>
      <div className="md:hidden flex items-center justify-between w-full">
        <div className="block text-2xl cursor-pointer" onClick={toggleMenu}>
          <img src="Menu.png" alt="menu icon" className="h-8 w-8" />
        </div>
        <span className="text-[#487DFF] text-2xl block p-3 items-center">Synapses</span>
        <span className="block h-12">
          <img src="Logo_Conatus.png" className="h-12" alt="logo" />
        </span>
      </div>
      <div className={`content flex-col md:flex md:flex-row items-center cursor-pointer space-y-2  ${darkMode ? 'bg-gray-800' : 'bg-slate-500'} md:space-x-6 absolute md:relative top-[93px] left-0 w-1/2 h-screen text-lg md:w-auto md:top-0 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col md:flex-row md:items-center text-lg space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <div className="hover:text-blue-500 transition-colors duration-300">Features</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Contact</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center text-lg space-y-2 md:space-y-0 md:space-x-6">
          <div className="hover:text-blue-500 transition-colors duration-300">Parents</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Subject</div>
        </div>
        <button className="rounded-2xl w-20 h-8  bg-black text-white md:hidden hover:scale-110 transition-transform duration-300 ease-in-out">
          Login
        </button>
      </div>
      <div className="hidden md:flex items-center justify-between w-full">
        <span className="block h-12">
          <img src="Logo_Conatus.png" className="h-12" alt="logo" />
        </span>
        <div className="flex items-center space-x-6">
          <div className="hover:text-blue-500 transition-colors duration-300">Features</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Contact</div>
          <span className="text-[#487DFF] text-2xl block p-3 items-center">Synapses</span>
          <div className="hover:text-blue-500 transition-colors duration-300">Parents</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Subject</div>
        </div>
        <button className={`rounded-2xl w-20 h-8 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:scale-105 transition-transform duration-300 ease-in-out`}>
          Login
        </button>
        <button onClick={toggleDarkMode} className="ml-4 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
