import React from 'react'
import solaxy from "../../assets/solaxy22.svg"
import { useNavigate } from 'react-router-dom'

const Popup = () => {
  
  let navigate = useNavigate();

  const handleClick = () => {
    window.location.href = 'https://iotexscan.io/address/0x4AD8BD0de0d5B640Ccdfdc33EecF28829C253bB6?format=0x#code';
  };

  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full pl-[350px] pb-10">
        <img src={solaxy} onClick={handleClick}/>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <img src={solaxy} className='w-[390px]' onClick={handleClick}/>
    </div>
    </>
  )
}

export default Popup