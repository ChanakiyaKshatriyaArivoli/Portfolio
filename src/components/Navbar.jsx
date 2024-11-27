import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="home" className="sticky top-0 z-[20] w-full py-6">
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <img className="w-16 h-16" src="../assets/ck.png" alt="logo" />
        </div>

        {/* Hamburger Menu for Mobile/Tablet */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavBar} className="text-3xl">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((item) => (
            <li key={item.label}>
              <motion.a
                href={item.href}
                className="text-lg text-slate-gray hover:text-white transition-all duration-300 scroll-margin-top transform hover:text-2xl"
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Social Icons for Desktop */}
        <div className="hidden lg:flex gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/chanakiya-kshatriya-476035267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          </a>
          <FaGithub className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          <a href="https://www.instagram.com/chanakiyakshatriya3?igsh=MWxuMGtlMDlndTNzaQ==">
            <FaInstagram className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          </a>
          <a href="https://x.com/ChanakiyaKshat2?t=NoelAoMHOUi11JGQB-HDAQ&s=09">
            <FaXTwitter className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          </a>
          <a href="https://www.threads.net/@chanakiyakshatriya3?xmt=AQGzB9s9k59HMDeHbchdjIWTwsJrpzfcCRGhEPk5VpS9llI">
            <FaThreads className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          </a>
          <a href="https://leetcode.com/u/Chanakiya_kshatriya/">
            <SiLeetcode className="hover:text-white transition-all duration-300 transform hover:scale-150" />
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center lg:hidden">
          <ul className="flex flex-col gap-6 text-center text-white text-2xl">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons inside the expanded menu */}
          <div className="flex gap-6 text-white mt-8">
            <a href="https://www.linkedin.com/in/chanakiya-kshatriya-476035267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150" />
            </a>
            <FaGithub className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150" />
            <a href="https://www.instagram.com/chanakiyakshatriya3?igsh=MWxuMGtlMDlndTNzaQ==">
              <FaInstagram className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150" />
            </a>
            <a href="https://x.com/ChanakiyaKshat2?t=NoelAoMHOUi11JGQB-HDAQ&s=09">
              <FaXTwitter className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150" />
            </a>
            <a href="https://www.threads.net/@chanakiyakshatriya3?xmt=AQGzB9s9k59HMDeHbchdjIWTwsJrpzfcCRGhEPk5VpS9llI">
              <FaThreads className="hover:text-gray-300 transition-all duration-300 transform hover:scale-150" />
            </a>
          </div>

          {/* X button stays in the right corner */}
          <button
            onClick={toggleNavBar}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <X />
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
