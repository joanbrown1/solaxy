import React from 'react'
import tick from "../../assets/tick.svg"
import welcome from "../../assets/welcome.svg"
import started from "../../assets/startedbut.svg"
import { useNavigate } from 'react-router-dom'

const Welcom = () => {

    let navigate = useNavigate();


  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full pl-[350px] pb-10">
        <img src={tick} />
        <img src={welcome} className='ml-20 mb-20'/>
        <img src={started} onClick={() => {navigate("/home")}}/>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <img src={tick} className='w-[390px]'/>
        <img src={welcome} className='ml-[90px]'/>
        <img src={started} className='ml-[20px] mt-[100px]' onClick={() => {navigate("/home")}}/>
    </div>
    </>
  )
}

export default Welcom