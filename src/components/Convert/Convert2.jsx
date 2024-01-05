import React from 'react'
import { useNavigate } from 'react-router-dom'
import convertph from "../../assets/convertph.svg"
import convertph2 from "../../assets/convertph2.svg"
import continue1 from "../../assets/continue.svg"

const Convert2 = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/convert22")
    }

  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Convert</p>
            <img src={convertph}/>
            <div className="flex justify-center items-center">
                <div className='ml-[-110px] mt-6'>
                    <img src={convertph2} className='mt-2' />
                    <img src={continue1} className='mt-6 w-[420px]' onClick={handleClick}/>
                </div>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-280px] mb-10">
        <div className='mt-6 ml-6'>
            <div className='flex justify-center items-center ml-24'>
            <div className='ml-[-110px] mt-6'>
                    <p className='text-center mb-10'>Transaction Summary</p>
                    <img src={convertph2} className='mt-2 w-[328px]' />
                    <img src={continue1} className='my-6 w-[326px]' onClick={handleClick}/>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Convert2