import React from 'react'
import notification from "../assets/notification.svg"
import search from "../assets/search-for-asset.svg"
import defaultprofile from "../assets/default.svg"

const Navbar = () => {
  return (
    <>
    <nav className="bg-primary p-4  lg:ml-[270px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className='hidden lg:flex'>
                <img src={notification}/>
                {/* <img src={search} className='ml-[22px]'/> */}
                <p className='ml-[700px] mt-2'>Hello,  </p>
                <img src={defaultprofile} className='ml-[20px]'/>
        </div>
        <div className="lg:hidden flex md:hidden ">
            <img src={defaultprofile} className='ml-[23.5px]'/>
            <p className='font-medium text-lg ml-6'>Hello,  </p>
            <img src={notification} className='ml-20'/>
        </div>
        {/* <div className="text-black text-2xl font-bold">Your Logo</div>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#" className="text-black hover:text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-secondary">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-secondary">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-secondary">
              Contact
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          mobile menu
        </div> */}
      </div>
    </nav>
    </>
  )
}

export default Navbar;