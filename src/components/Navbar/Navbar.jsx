/*import React from 'react'

const Navbar=()=>{
   // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    

    return(
        <>
        <div>
        <h1>Navbar Page</h1>
        </div>
    

        </>
    )
}

export default Navbar;

/////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Herosection from '../Herosection/Herosection';

const Navbar = () => {
  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-500 p-4 border-2 border-black-100 rounded-lg">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
      
          <div className="text-black text-2xl font-semibold">
            Reactive
          </div>
          
          
          <div className="hidden md:flex space-x-8">
            <Link to='/'>Home</Link>
            <Link to="/cart">All Product</Link>
            
            
        
            <a href="mens" className="text-black hover:text-gray-300 transition duration-300">Mens </a>
            <a href="kids" className="text-black hover:text-gray-300 transition duration-300">Kids</a>
          </div>
          
      
          <div className="md:flex items-center space-x-4 hidden">
            <a href="#login" className="bg-white-500 text-black border-2 py-2 px-4 rounded-full hover:bg-white-600 transition duration-300">Login</a>
          </div>
          
  
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-500 p-4 space-y-4">
            
            <a href="/about" className="block text-black hover:text-gray-300">About Us</a>
            <a href="/login" className="block bg-white-500 border-2 text-black py-2 px-4 rounded-full hover:bg-white-600">Login</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

import { FaCartShopping } from "react-icons/fa6";
<FaCartShopping />
import { FaRegUserCircle } from "react-icons/fa";
<FaRegUserCircle />
*/
import React, { useState } from 'react';
import { CiText } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { auth } from '../../FirebaseAuth/firebaseAuth';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const Navbar = ({ userName, cart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle user logout
  const handleSignOut = () => {
    auth.signOut().then(() => {
  
       toast.success("Logout successful!");
    }).catch((err) => alert("error"));
  };

  return (
    <>
      <nav className="bg-gray-100 sticky p-4 mt-none border-bt-2 shadow-lg mb-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <span className="flex flex-wrap gap-3">
            <CiText className="bg-orange-500 w-12 h-12 rounded-full overflow-hidden top-[-3] item-center top-[3] mr-[10px]" size={30} />
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Trendify</h1>
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-xl text-gray-900">Home</Link>
            <Link to="/allproduct" className="font-medium text-xl text-gray-900">Product</Link>
            <Link to="/contact" className="font-medium text-xl text-gray-900">Contact</Link>
          </div>

          {/* Login Button (Desktop) */}
          <div className="md:flex items-center hidden ml-0">

            {userName ? (
              <div className="flex flex-wrap gap-4 ml-2">
                {/* Cart */}
                <div className="">
                  <Link to="/cart">
                    <span className="font-bold text-xl bg-orange-500 absolute top-[-5] left-[2] overflow-hidden w-6 h-6 rounded-full ">{cart.length}</span>
                    <MdOutlineShoppingCart size={40} />
                  </Link>
                </div>
              
                {/* User Icon with Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <FaRegUserCircle className="text-orange-500" size={30} />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-md w-48">
                      <h2>{userName}</h2>
                      <button
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-black hover:bg-orange-200 rounded-md"
                      >
                        Logout
                      </button>
                      
                    </div>
                  )}
                </div>

                <h2 className="text-xl text-black"></h2>

              
              </div>
            ) : (
              <button className="bg-orange-300 flex flex-wrap text-white px-10 py-1 ml-4 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 text-lg w-32 active:scale-95">
                <Link to="/login">
                  <h2>Login</h2>
                </Link>
              </button>
            )}

          
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {userName ? (
              <div className="flex flex-wrap gap-4 ml-2">
                {/* Cart */}
                <div className="">
                  <Link to="/cart">
                    <span className="font-bold text-xl bg-orange-500 absolute top-[-5] left-[2] overflow-hidden w-6 h-6 rounded-full ">{cart.length}</span>
                    <MdOutlineShoppingCart size={40} />
                  </Link>
                </div>
              
                {/* User Icon with Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <FaRegUserCircle className="text-orange-500" size={30} />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-md w-48">
                      <h2>{userName}</h2>
                      <button
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-black hover:bg-orange-200 rounded-md"
                      >
                        Logout
                      </button>
                      
                    </div>
                  )}
                </div>

                <h2 className="text-xl text-black"></h2>

              
              </div>
            ) : (
              <button className="bg-orange-300 flex flex-wrap text-white px-10 py-1 ml-4 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 text-lg w-32 active:scale-95">
                <Link to="/login">
                  <h2>Login</h2>
                </Link>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 p-4 space-y-6">
            <Link to="/" className="block text-black hover:text-gray-300 text-xl text-gray-900">Home</Link>
            <Link to="/allproduct" className="block text-black hover:text-gray-300 text-xl text-gray-900">Product</Link>
            <Link to="/contact" className="block text-black hover:text-gray-300 text-xl text-gray-900">Contact</Link>
 
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
