/* eslint-disable react/prop-types */
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <>
      <div className={`w-full flex flex-col  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} >
        <div className="flex flex-col p-6 md:flex-row justify-around mb-10">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl text-blue-500">Dream Big</h1>
            <h2 className="text-4xl text-blue-500">Embrace Wonders</h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xl mb-2">Book a free trial</p>
            <button className="bg-blue-500 text-white rounded-full py-2 px-4">Book</button>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row p-10 justify-between ${darkMode ? 'bg-black text-white' : 'bg-black text-white'} py-6`}>
          <div className="w-full md:w-1/3 flex space-x-7 items-center md:items-start p-6">
            <div className="flex flex-col mb-4">
              <h1 className="font-semibold">Quick Links</h1>
              <a href="#" className="hover:underline">Blogs</a>
              <a href="#" className="hover:underline">Team</a>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">About</h1>
              <a href="#" className="hover:underline">Conatus Bharat</a>
              <div className="flex space-x-5 mt-2">
                <CiLinkedin className="text-xl hover:text-blue-500" />
                <FaTwitter className="text-xl hover:text-blue-500" />
                <FaInstagram className="text-xl hover:text-blue-500" />
              </div>
              <h1 className="mt-4">Powered by Conatus Bharat Pvt. Ltd.</h1>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center p-6">
            <img src="Logo_Conatus.png" alt="Conatus Logo" className="h-24" />
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-start items-start p-6">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div>Email:conatusbharat@gmail.com</div>
            <div>Phone: 0522-3559129</div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
