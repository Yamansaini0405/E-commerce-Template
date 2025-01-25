import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="main shadow-md rounded-b-2xl p-4 flex justify-between items-center w-[100%] m-auto px-24">
        <div className="flex justify-center items-center gap-x-6">
          {/* Logo div */}
          <div className="logo">
            <h2 className="text-2xl font-bold">E-commerce</h2>
          </div>
          {/* options  */}
          <div>
            <ul className="flex text-lg font-semibold gap-x-8 justify-center items-center ">
              <li className="cursor-pointer">Home</li>
              <li className="flex justify-center items-center cursor-pointer">
                Categories <RiArrowDropDownLine className="text-2xl" />
              </li>
              <li className="cursor-pointer">Today's Deal</li>
              <li className="cursor-pointer"> Offers</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          {/* search bar  */}
          <div className="border-1 border-gray-400 py-2 px-2 rounded-2xl w-[20rem] flex justify-start items-center gap-x-1">
            <IoSearchSharp className="text-2xl cursor-pointer" />
            <input type="text" placeholder="Search product" className="outline-none"/>
          </div>

          {/* login section  */}
          <div className="text-lg font-semibold flex justify-center items-center gap-x-  hover:bg-orange-600 hover:text-white px-2 rounded-xl ">
            <CgProfile className="text-xl" />
            <span className="ml-1 py-1 cursor-pointer">Login</span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          {/* cart section  */}
          <div className="rounded-[50%] bg-black flex justify-center items-center p-2 ">
            <BsCart3 className="text-xl font-bold text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
