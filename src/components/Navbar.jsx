import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-screen h-[93px] flex items-center justify-between font-bold sticky top-0 bg-white z-50 px-4 md:px-16">
      <div className="md:hidden flex items-center justify-between w-full">
        <div className="block text-2xl cursor-pointer" onClick={toggleMenu}>
          <img src="Menu.png" alt="menu icon" className="h-8 w-8" />
        </div>
        <span className="text-[#487DFF] text-2xl block p-3 items-center">Synapses</span>
        <span className="block h-12">
          <img src="Logo_Conatus.png" className="h-12" alt="logo" />
        </span>
      </div>
      <div className={`content flex-col md:flex md:flex-row items-center cursor-pointer space-y-2 ml-4 bg-slate-500 md:space-x-6 absolute md:relative top-[93px] left-0 w-full md:w-auto md:top-0 md:bg-transparent ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col md:flex-row md:items-center text-xl space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <div className="hover:text-blue-500 transition-colors duration-300">Features</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Contact</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center text-xl space-y-2 md:space-y-0 md:space-x-6">
          <div className="hover:text-blue-500 transition-colors duration-300">Parents</div>
          <div className="hover:text-blue-500 transition-colors duration-300">Subject</div>
        </div>
        <button className="rounded-2xl w-20 h-8 bg-black text-white md:hidden hover:scale-110 transition-transform duration-300 ease-in-out">
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
        <button className="rounded-2xl w-20 h-8 bg-black text-white hover:scale-110 transition-transform duration-300 ease-in-out">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
