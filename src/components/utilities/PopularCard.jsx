import React from "react";
import { NavLink } from "react-router-dom";
import { RiStarSLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

function PopularCard({ image, category, name, price }) {
  return (
    <div className="main">
      <div className="inline-block border-2 px-2 py-3 rounded-3xl border-gray-400">
        <div className="image h-[20rem] w-[17rem] ">
          <img src={image} alt="" className="w-full h-full rounded-3xl object-cover" />
        </div>
        <div className="flex justify-between in-checked:">
        <div><p className="disc text-gray-600  text-start px-2  mt-2 text-sm">
          {category}
        </p>
        <h3 className="text-xl font-semibold px-2">{name}</h3>
        
        <p className="font-bold text-lg px-2">
          <span className=" text-orange-400 text-xl  font-bold">₹{price}</span>
        </p></div>
        <div className="cart flex flex-col justify-center items-end space-y-1 mt-4">
        <p className="text-yellow-600 flex justify-start items-center px-2 text-lg">
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </p>
        <span className="bg-orange-500 p-2 mr-2 rounded-full"><NavLink to='/cart'><FaBagShopping className="mr- opacity text-white"/></NavLink></span>
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default PopularCard;
