import React, {useEffect, useState} from 'react'
import homeframe from "../../assets/homeframe.svg"
import homeph1 from "../../assets/homeph1.svg"
import homeph2 from "../../assets/homeph2.svg"
import homeframe2 from "../../assets/homeframe2.svg"
import powerb from "../../assets/powerb.svg"
import recent from "../../assets/recent.svg"
import ph1 from "../../assets/ph1.svg"
import ph2 from "../../assets/ph2.svg"
import eye from "../../assets/eye.svg"
import daily from "../../assets/Daily.svg"
import usage from "../../assets/usage.svg"
import "./home.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/DataContext';


const Transactions = () => {

  const { userData } = useAuth();
 let navigate = useNavigate();
 const [power, setPower] = useState([]);

 const handleClick = () => {
    navigate("/power")
}
// console.log(userData)
const id = userData._id

const saveData = async () => {

  try {
   
     let response = await fetch("https://apis.qubatorsunn.ng/solaxy/transactions/"+id, { 
       method: "GET"
     });
     
     let data = await response.json();
    //  console.log(data);
     
     setPower(data);
     
     


  } catch (error) {
    console.error('Error:', error);
  }
};


useEffect(() => {
  saveData();
}, []);

const formatDate = (inputDate) => {
  // console.log('Input Date:', inputDate);

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
  return formattedDate;
};

  return (
    <>
       {userData && (
        <>
        <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-screen">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Transactions</p>
            <div className='newbg w-[989px] h-[175px] pl-[87.61px] pt-[49px]'>
              <div className='flex'><img src={eye} className='w-[16px]'/><p className='text-xs font-light text-white pl-2'>Power Balance</p></div>
              <p className='text-white text-4xl'>{userData.p_balance}kWh</p>
            </div>
            {/* <img src={homeframe}/> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <div>
                {power ?
                (power.map((item, index) => (
                  <div className='grid grid-cols-2 py-[9px] px-[16px] bg-white w-[420px] h-[64px] rounded-lg mt-8' key={index}>
                    <div className='rounded-lg w-[180px] h-[44px] text-center pt-2 ml-8 font-semibold flex'>
                        <img src={powerb}/>
                        <div>
                        <p className='pl-1 text-sm'>{(item.status).toUpperCase()}</p>
                        <p className='pl-1 text-xs font-thin'>{formatDate(item.date)}</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-[180px] h-[44px] text-center pt-2 text-gray-600'>{Math.ceil(item.amount)} {item.type}</div>
                  </div>))) : ""}
                </div>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-screen ml-[-280px] mb-10">
        <div className='mt-6 ml-6'>
            <div className='mobg w-[328px] h-[179px] rounded-md pl-[16px] pt-[12px]'>
              <div className='flex'><img src={eye} className='w-[16px]'/><p className='text-xs font-light text-white pl-1'>Power Balance</p></div>
              <p className='text-white text-4xl'>{userData.p_balance}kWh</p>
            </div>
            <img src={recent} className='my-4 ml-2'/>
            {power ? 
            (power.map((item, index) => (
              <div className='grid grid-cols-2 pt-[18px] px-[16px] bg-white w-[328px] h-[70px] rounded-lg mt-8 mb-4' key={index}>
                <div className='rounded-lg w-[131px] h-[32px] text-center pt-1 ml-8 font-semibold flex'>
                    <img src={powerb}/>
                    <div>
                    <p className='pl-1 text-sm'>{(item.status).toUpperCase()}</p>
                    <p className='pl-1 text-xs font-thin'>{formatDate(item.date)}</p>
                    </div>
                </div>
                <div className='bg-white rounded-lg w-[131px] h-[32px] text-center pt-1 text-gray-600' onClick={() => {handleClick()}}>{Math.ceil(item.amount)} {item.type}</div>
              </div>))) : ""}
        </div>
     </div>
        </>
       )}
    </>
  
  )
}

export default Transactions