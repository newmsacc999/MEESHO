import React from 'react'
import { FaBars, FaCartShopping, FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from '../../assets/mshologo.PNG'

const Header = () => {
  return (
    <div className="bg-white pt-3" id="navbar">
      <div className="">
        <div className="flex justify-between items-center py-2 mx-4">
          <div className="flex items-center">
            <FaBars className=" mr-2" size={20} />
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-7" alt="" />
            </Link>
          </div>
          <div className="flex items-center">
            <FaHeart size={20} className="text-red-500"/>
            <FaCartShopping size={20} className="ml-5 text-[#9f2089]" />
          </div>
        </div>
      </div>
      <div>
        <div class="relative mx-4 mt-3 mb-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white" 
          placeholder="Search Sarees, Kurtis, Cosmetics, etc..." required />
        </div>
      </div>
    </div>
  )
}

export default Header