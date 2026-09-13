
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto mt-2 px-6 py-2">
        <div className="flex justify-between items-center">
          
          <button
            className="md:hidden text-2xl"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          <img src={logo} alt="Dev Stack" className="h-8" />

          <ul className="hidden md:flex gap-4 items-center">
            <li><span className="text-[#DB2777]">Home</span></li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex items-center gap-6" >
           <button>Sign In</button>
           <button className="rounded-full bg-pink-600 px-6 py-3 text-white">Sign Up</button>
           </div>
        </div>

       
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-3 pt-4 pb-2">
            <li><span style={{ color: "#DB2777" }}>Home</span></li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li className="sm:hidden"><button>Sign In</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;