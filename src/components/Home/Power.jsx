import React from 'react'
import homeframe from "../../assets/homeframe.svg"
import homeph1 from "../../assets/homeph1.svg"
import homeph2 from "../../assets/homeph2.svg"
import timeframe from "../../assets/timeframe.svg"
import timechart from "../../assets/timechart.svg"
import up from "../../assets/up.svg"
import electric from "../../assets/elec.svg"
import daily from "../../assets/Daily.svg"
import usage from "../../assets/usage.svg"

const Power = () => {
  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Home</p>
            <img src={homeframe}/>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={homeph1}/>
                <div>
                  <p className='text-xl font-bold pb-2'>Power Usage</p>
                  <p className='text-sm pb-4'>Find your power consumption stats here</p>
                  <img src={daily} className='w-[329px] pb-4'/>
                  <img src={usage} className='w-[345px] ml-[-16px]'/>
                </div>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-screen ml-[-280px] mb-20">
        <div className='mt-6 ml-6'>
            <p className='text-xl font-medium ml-4'>Power Usage</p>
            <p className='font-normal ml-4'>Find your power consumption stats here</p>
            <img src={timeframe} className='mt-6 ml-4'/>
            <img src={timechart} className='mt-6'/>
            <img src={up}/>
            {/* <p className='ml-4 font-medium'>Statistics</p>
            <img  src={electric} /> */}
        </div>
     </div>
    </>
  )
}

export default Power