import React from 'react'
import { useNavigate } from 'react-router-dom'
import convertph from "../../assets/convertph.svg"
import naira from "../../assets/naira.svg"
import solaxy from "../../assets/solaxy.svg"
import card from "../../assets/card.svg"
import buy from "../../assets/buy.svg"
import merchant from "../../assets/marchant.svg"
import smallbuy from "../../assets/smallbuy.svg"
import march from "../../assets/marchbig.svg"

const Convert = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/convert2")
    }

  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Convert</p>
            <img src={convertph}/>
            <div className="flex justify-center items-center">
                <div className='ml-[-110px] mt-6'>
                    <p>I want to pay</p>
                    <img src={naira} className='mt-2' />
                    <p className='mt-6'>To recieve(Estimate)</p>
                    <img src={solaxy} className='mt-2'/>
                    <p className='mt-6'>Choose payment method</p>
                    <img src={card} className='mt-2'/>
                    <img src={buy} className='mt-6' onClick={handleClick}/>
                    <div className="text-center">or</div>
                    <img src={march} className='mt-6' onClick={handleClick}/>
                </div>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <div className='mt-6 ml-6'>
            <div className='flex justify-center items-center ml-24'>
            <div className='ml-[-110px] mt-6'>
                    <p>I want to pay</p>
                    <img src={naira} className='mt-2 w-[326px]' />
                    <p className='mt-6'>To recieve(Estimate)</p>
                    <img src={solaxy} className='mt-2 w-[326px]'/>
                    <p className='mt-6'>Choose payment method</p>
                    <img src={card} className='mt-2 w-[326px]'/>
                    <img src={smallbuy} className='my-6 w-[326px]' onClick={handleClick}/>
                    <p className=' text-center'>or</p>
                    <img src={merchant} className='mt-6 w-[326px]' onClick={handleClick}/>
                </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Convert