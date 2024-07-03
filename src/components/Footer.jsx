/* eslint-disable react/prop-types */
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <div className={`w-full flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col p-6 md:flex-row space-x-60 mb-10">
        <div className="mb-6 md:mb-0 md:w-1/2 lg:w-auto">
          <h1 className="text-4xl lg:text-6xl text-blue-500">Dream Big</h1>
          <h2 className="text-4xl lg:text-6xl text-blue-500">Embrace Wonders</h2>
        </div>
        <div className="flex flex-col items-start md:items-start md:w-1/2 lg:w-auto md:ml-10 lg:ml-10">
          <p className="text-xl mb-2">Book a free trial</p>
          <button className="bg-blue-500 text-white rounded-full py-2 px-4">Book</button>
        </div>
      </div>
      <div className={`flex flex-col text-sm md:flex-row pt-6 pl-5 pr-5 pb-2 justify-between ${darkMode ? 'bg-black text-white' : 'bg-black text-white'} py-6`}>
        <div className="w-full md:w-1/3 flex justify-between mb-6 md:mb-0 md:items-start space-x-5">
          <div className="mb-4 flex flex-col">
            <h1 className="font-semibold">Quick Links</h1>
            <a href="#" className="hover:underline">Blogs</a>
            <a href="#" className="hover:underline">Team</a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-left">About</h1>
            <a href="#" className="hover:underline">Conatus Bharat</a>
            <div className="flex space-x-5 mt-2 items-center">
              <CiLinkedin className="text-xl hover:text-blue-500" />
              <FaTwitter className="text-xl hover:text-blue-500" />
              <FaInstagram className="text-xl hover:text-blue-500" />

            </div>

          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
          <img src="Logo_Conatus_dark.png" alt="Conatus Logo" className="h-20" />
        </div>
        <div className="w-full md:w-1/3 flex flex-col mb-6 md:mb-0 md:justify-start md:items-start pl-16">
          <div className="mb-4">
            <h1 className="font-semibold">Contact Us</h1>
          </div>
          <div>Email: conatusbharat@gmail.com</div>
          <div>Phone: 0522-3559129</div>
          <div className="flex mt-4 space-x-4 md:flex-row md:items-center relative ">
            <a href="#" className="hover:underline ">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline"> Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
