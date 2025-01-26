import React, { useState } from "react";
import { IoSearchSharp, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <div className="main shadow-md rounded-b-2xl p-4 flex justify-between items-center w-full m-auto px-4 md:px-24 fixed z-50 top-0 left-0 bg-white">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <IoCloseOutline 
              className="text-3xl cursor-pointer" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
          ) : (
            <IoMenuOutline 
              className="text-3xl cursor-pointer" 
              onClick={() => setIsMobileMenuOpen(true)} 
            />
          )}
        </div>

        <div className="flex justify-center items-center gap-x-6 w-full md:w-auto">
          {/* Logo div */}
          <div className="logo flex-grow text-center md:text-left">
            <h2 className="text-2xl font-bold">E-commerce</h2>
          </div>

          {/* Desktop Navigation Options */}
          <div className="hidden md:block">
            <ul className="flex text-lg font-semibold gap-x-8 justify-center items-center">
              <li className="cursor-pointer">Home</li>
              <li className="flex justify-center items-center cursor-pointer relative group">
                Categories <RiArrowDropDownLine className="text-2xl" />
                <ul className="absolute bg-white py-2 w-48 flex-wrap rounded-2xl shadow-2xl group-hover:block hidden mt-[16rem]">
                  <li>
                    <a className="block text-black hover:bg-gray-100 overflow-hidden hover:rounded-xl px-4 py-2 transition-transform transform">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a className="block text-black hover:bg-gray-100 overflow-hidden hover:rounded-xl px-4 py-2 transition-transform transform">
                      Cosmetics
                    </a>
                  </li>
                  <li>
                    <a className="block text-black hover:bg-gray-100 overflow-hidden hover:rounded-xl px-4 py-2 transition-transform transform">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="block text-black hover:bg-gray-100 overflow-hidden hover:rounded-xl px-4 py-2 transition-transform transform">
                      Women's Dresses
                    </a>
                  </li>
                  <li>
                    <a className="block text-black hover:bg-gray-100 overflow-hidden hover:rounded-xl px-4 py-2 transition-transform transform">
                      Kids Section
                    </a>
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer">Today's Deal</li>
              <li className="cursor-pointer">Offers</li>
            </ul>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex justify-center items-center gap-x-4">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex border-1 border-gray-400 py-2 px-2 rounded-2xl w-[20rem] justify-start items-center gap-x-1">
            <IoSearchSharp className="text-2xl cursor-pointer" />
            <input 
              type="text" 
              placeholder="Search product" 
              className="outline-none w-full"
            />
          </div>

          {/* Mobile Search Icon */}
          <IoSearchSharp 
            className="md:hidden text-2xl cursor-pointer" 
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)} 
          />

          {/* Login Section */}
          <div 
            className="text-lg font-semibold flex justify-center items-center gap-x-1 hover:bg-orange-600 hover:text-white px-2 rounded-xl" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <CgProfile className="text-xl" />
            <span className="ml-1 py-1 cursor-pointer hidden md:inline">Login</span>
            {isOpen && (
              <div className="absolute right-0 w-64 bg-white rounded-lg shadow-lg border py-2 mt-[23rem] mr-[3rem]">
                {/* Login dropdown content */}
              </div>
            )}
            <RiArrowDropDownLine className="text-2xl hidden md:inline" />
          </div>

          {/* Cart Section */}
          <div className="rounded-[50%] bg-black flex justify-center items-center p-2">
            <BsCart3 className="text-xl font-bold text-white cursor-pointer" />
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {isMobileSearchOpen && (
          <div className="fixed top-16 left-0 w-full bg-white z-40 md:hidden animate-slide-down">
            <div className="border-1 border-gray-400 py-2 px-4 flex justify-start items-center gap-x-2">
              <IoSearchSharp className="text-2xl cursor-pointer" />
              <input 
                type="text" 
                placeholder="Search product" 
                className="outline-none w-full"
              />
              <IoCloseOutline 
                className="text-2xl cursor-pointer" 
                onClick={() => setIsMobileSearchOpen(false)} 
              />
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 left-0 w-full h-screen bg-white z-40 md:hidden">
            <div className="p-4">
              <ul className="text-lg font-semibold space-y-4">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer relative group">
                  Categories 
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>Clothing</li>
                    <li>Cosmetics</li>
                    <li>Electronics</li>
                    <li>Women's Dresses</li>
                    <li>Kids Section</li>
                  </ul>
                </li>
                <li className="cursor-pointer">Today's Deal</li>
                <li className="cursor-pointer">Offers</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;