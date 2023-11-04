import React from 'react';
import './loading.css'; 
import logo from "../../assets/logo.svg"

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="logo">
        <img src={logo} className="w-[375px]"/>
        <p className="text-center font-bold">Solaxy</p>
      </div>
    </div>
  );
};

export default Loading;
