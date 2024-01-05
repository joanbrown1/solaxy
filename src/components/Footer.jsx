import React from 'react'
import { NavLink, Outlet, useLocation } from "react-router-dom";
import home from "../assets/home.svg"
import whitehome from "../assets/homewhite.svg"
import convert from "../assets/convert.svg"
import wallet from "../assets/walletmoney.svg"
import profile from "../assets/profile.svg"

const Footer = () => {
    const location = useLocation();

  return (
    <>
        <nav className="bg-primary p-4 lg:hidden bottom-0 shadow-2xl fixed w-full md:hidden">
            <div className='flex justify-center items-center space-x-10'>
                <NavLink
                to="/home"
                className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-full transition-all flex ${
                location.pathname === "/home" ? "bg-secondary text-white" : ""
                }`}
                >
                    {location.pathname === "/home" ?  <img src={whitehome} /> :  <img src={home} />}
                </NavLink>
                <NavLink
                to="/wallet"
                className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-full transition-all flex ${
                location.pathname === "/wallet" ? "bg-secondary text-white" : ""
                }`}
                >
                    {location.pathname === "/wallet" ?  <img src={whitehome} /> :  <img src={wallet} />}
                </NavLink>
                {/* <NavLink
                to="/convert"
                className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-full transition-all flex ${
                location.pathname === "/convert" ? "bg-secondary text-white" : ""
                }`}
                >
                    {location.pathname === "/convert" ?  <img src={whitehome} /> :  <img src={convert} />}
                </NavLink> */}
                <NavLink
                to="/profile"
                className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-full transition-all flex ${
                location.pathname === "/profile" ? "bg-secondary text-white" : ""
                }`}
                >
                    {location.pathname === "/profile" ?  <img src={whitehome} /> :  <img src={profile} />}
                </NavLink>
            </div>
            <Outlet />
        </nav>
    </>
  )
}

export default Footer