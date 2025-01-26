import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 w-[80%] m-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-16 gap-8">
          {/* Follow Us Column */}
          <div>
            <img src={logo} alt="" className="md:h-[10rem] h-[8rem] w-[10rem]" />
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold ">Company</h3>
            <hr className="mb-4 mt-1 w-[50%] md:w-[25%] border-2 border-orange-600" />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help Column */}
          <div>
            <h3 className="text-white font-semibold ">Get Help</h3>
            <hr className="mb-4 mt-1 w-[50%] md:w-[25%] border-2 border-orange-600" />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>

          {/* Online Shop Column */}
          <div>
            <h3 className="text-white font-semibold">Online Shop</h3>
            <hr className="mb-4 mt-1 w-[70%] md:w-[25%] border-2 border-orange-600" />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dress
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="md:my-8 my-2 " />
      <div className="container md:w-[90%] w-[100%] text-center mx-auto md:mt-8 mt-4 flex flex-col md:flex-row justify-center items-center text-sm md:space-x-40 pb-4 md:pb-0">
        <p>
          &copy; 2024 e-commerce, India. All Rights Reserved.
        </p>
        <div className="flex md:space-x-4 space-x-1 mt-2 md:mt-0 text-start mb-4">
          <a href="/" className="hover:text-orange-600">
            PRIVACY POLICY
          </a>
          <a href="/" className="hover:text-orange-600">
            TERMS AND CONDITIONS
          </a>
        </div>
        <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;








