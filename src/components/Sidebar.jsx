import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg"
import home from "../assets/home.svg"
import whitehome from "../assets/homewhite.svg"
import wallet from "../assets/walletmoney.svg"
import convert from "../assets/convert.svg"
import profile from "../assets/profile.svg"
import setting from "../assets/setting.svg"
import logoutt from "../assets/logout.svg"
import day from "../assets/day.svg"
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  
  let navigate = useNavigate();
  const location = useLocation();

  
  return (
    <nav className=" text-black w-sidebar fixed top-0 p-4 pl-[37.46px] sm:block hidden bg-white h-screen">
      <div className="text-2xl font-poppins font-normal mb-4 flex mt-[15px] ">
        <img src={logo} alt="" className="w-[28.24px] h-[32px] mr-4"/>
        Solpay
      </div>
      <ul className="font-medium text-base mt-[25px]">
        <li>
          <NavLink
            to="/home"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/home" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/home" ?  <img src={whitehome} className="mr-4"/> :  <img src={home} className="mr-4"/>}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wallet"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/wallet" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/wallet" ?  <img src={whitehome} className="mr-4"/> :  <img src={wallet} className="mr-4"/>}
            Buy Power
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/convert"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/convert" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/convert" ?  <img src={whitehome} className="mr-4"/> :  <img src={convert} className="mr-4"/>}
            Convert
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/profile"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/profile" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/profile" ?  <img src={whitehome} className="mr-4"/> :  <img src={profile} className="mr-4"/>}
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/transactions" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/transactions" ?  <img src={whitehome} className="mr-4"/> :  <img src={convert} className="mr-4"/>}
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={`p-2 mb-2 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/settings" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/settings" ?  <img src={whitehome} className="mr-4"/> :  <img src={setting} className="mr-4"/>}
            Settings
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/login"
            className={`p-2 mb-2 mt-20 hover:bg-secondary hover:text-primary rounded-lg transition-all flex ${
              location.pathname === "/login" ? "bg-secondary text-white" : ""
            }`}
          >
           {location.pathname === "/login" ?  <img src={whitehome} className="mr-4"/> :  <img src={logoutt} className="mr-4"/>}
            Logout
          </NavLink>
        </li>
        <li>
          <img src={day} className="mt-28 ml-6"/>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Sidebar;
