import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label, TextInput } from 'flowbite-react';
import walletfunc from "../../assets/walletfunc.svg"
import buy from "../../assets/buy.svg"
import powerb from "../../assets/powerb.svg"
import trans from "../../assets/trans.svg"
import { useAuth } from '../context/DataContext';
import ConnectButton from './ConnectButton';

const Wallet = () => {

    const { userData } = useAuth();
    let navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");

    const handleClick = (amount) => {

        navigate(
            "/pay/?amount=" +
            amount,
            "_blank"
          );
    }
    const handleChange = (e) => {
        setAmount(e.target.value)
      };

    // useEffect(() => {
    //     let headersList = {
    //         "Accept": "*/*",
    //         "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    //        }
           
    //        let response = await fetch("https://apis.qubatorsunn.ng/solaxy/get_rate/1", { 
    //          method: "GET",
    //          headers: headersList
    //        });
           
    //        let data = await response.text();
    //        console.log(data);
           
    //   }, []);

  return (
    <>
        {userData && (
            <>
            <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-screen">
        <div className='mt-6 ml-6'>
            {/* <p className='text-lg font-medium mb-4'>Wallet</p> */}
            {/* <img src={walletph}/> */}
            <div className='flex justify-center items-center'>
                <div className='ml-[-110px]'>
                    <img src={walletfunc} className='mt-6'/>
                    {/* <img src={walletfunc2} className='mt-6'/> */}
                    <div className='grid grid-cols-2 py-[9px] px-[16px] bg-white w-[420px] h-[64px] rounded-lg mt-8'>
                        <div className='bg-[#F6A816] rounded-lg w-[180px] h-[44px] text-center text-white pt-2 font-semibold'>Fiat</div>
                        <div className='bg-white rounded-lg w-[180px] h-[44px] text-center pt-2 font-semibold' onClick={() => {navigate('/dai')}}>DAI</div>
                    </div>
                    <div className='grid grid-cols-2 py-[9px] px-[16px] bg-white w-[420px] h-[64px] rounded-lg mt-8'>
                        <div className='rounded-lg w-[180px] h-[44px] text-center pt-2 ml-8 font-semibold flex'>
                            <img src={powerb}/>
                            <p className='pt-1 pl-2 text-gray-500 text-lg'>Power</p>
                        </div>
                        <div className='bg-white rounded-lg w-[180px] h-[44px] text-center pt-2 font-semibold border text-gray-700'>{userData.p_balance} kWh</div>
                    </div>
                    
                    <div className="w-[420px] h-[64px] mb-10">
                    <div className="mb-2 block">
                        <Label
                        htmlFor="amount"
                        value="Amount"
                        />
                    </div>
                    <TextInput
                        id="amount"
                        placeholder="3550.10"
                        required
                        type="amount"
                        name='amount'
                        value={amount}
                        onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    kWh
                    </div>
                    </div>
                    <div className="flex">
                        <p className=''>Total:</p>
                        <p className='ml-60'>{Math.ceil(1.116 * amount)} Naira</p>
                    </div>
                    <img src={buy} className='mt-6 ml-[-10px] w-[460px]'onClick={() => handleClick(1.116 * amount)}/>
                    <p className='font-bold py-4'>OR</p>
                    <ConnectButton />
                </div>
            </div>
            
        </div>
        </div>
        <div className="lg:hidden md:hidden bg-[#F3F3F3] mt-20 w-full h-screen ml-[-280px] mb-10">
        <div className='mt-6 ml-6'>
            {/* <img src={walletsmall}/> */}
            <div className='flex justify-center items-center ml-24'>
                <div className='ml-[-110px]'>
                    <img src={walletfunc} className='mt-6 w-[326px]'/>
                    <img src={trans} className='mt-6 ml-[214px]' onClick={() => {navigate("/transactions")}}/>
                    <div className='grid grid-cols-2 pt-[18px] px-[16px] bg-white w-[328px] h-[64px] rounded-lg mt-8'>
                        <div className='bg-[#F6A816] rounded-lg w-[131px] h-[32px] text-center pt-1 text-white font-semibold'>Fiat</div>
                        <div className='bg-white rounded-lg w-[131px] h-[32px] text-center pt-1 font-semibold' onClick={() => {navigate('/dai')}}>DAI</div>
                    </div>
                    <div className='grid grid-cols-2 pt-[18px] px-[16px] bg-white w-[328px] h-[64px] rounded-lg mt-8 mb-4'>
                        <div className='rounded-lg w-[131px] h-[32px] text-center pt-1 ml-8 font-semibold flex'>
                            <img src={powerb}/>
                            <p className='pl-2 text-gray-500 text-lg'>Power</p>
                        </div>
                        <div className='bg-white rounded-lg w-[131px] h-[32px] text-center pt-1 font-semibold border text-gray-700'>{userData.p_balance} kWh</div>
                    </div>
                    <div className="w-[326px]">
                    <div className="mb-2 block">
                        <Label
                        htmlFor="amount"
                        value="Amount"
                        />
                    </div>
                    <TextInput
                        id="amount"
                        placeholder="3550.10"
                        required
                        type="number"
                        name='amount'
                        value={amount}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="flex w-[326px]">
                        <p className='ml-4'>Total:</p>
                        <p className='ml-40'>{Math.ceil(1.116 * amount)} Naira</p>
                    </div>
                    <img src={buy} className='mt-6 w-[326px]'onClick={() => handleClick(1.116 * amount)} />
                    <p className='font-bold py-4'>OR</p>
                    <ConnectButton />
                </div>
            </div>
            
        </div>
        </div>
            </>
        )}
    </>
  )
}

export default Wallet