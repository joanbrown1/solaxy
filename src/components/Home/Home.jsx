import React, {useEffect, useState} from 'react'
import homeframe from "../../assets/homeframe.svg"
import homeph1 from "../../assets/homeph1.svg"
import homeph2 from "../../assets/homeph2.svg"
import homeframe2 from "../../assets/homeframe2.svg"
import recent from "../../assets/recent.svg"
import ph1 from "../../assets/ph1.svg"
import ph2 from "../../assets/ph2.svg"
import { useNavigate } from 'react-router-dom'


const Home = () => {

 let navigate = useNavigate();
 const handleClick = () => {
    navigate("/power")
}




  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Home</p>
            <img src={homeframe}/>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={homeph1}/>
                <img src={homeph2}/>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <div className='mt-6 ml-6'>
            <img src={homeframe2} className='ml-2'/>
            <img src={recent} className='my-4 ml-2'/>
            <img src={ph1} onClick={handleClick} />
            <img src={ph2} onClick={handleClick}/>
            <img src={ph1} onClick={handleClick}/>
            <img src={ph2} onClick={handleClick}/>
            <img src={ph1} onClick={handleClick}/>
            <img src={ph2} onClick={handleClick}/>
        </div>
     </div>
    
    </>
  
  )
}

export default Home