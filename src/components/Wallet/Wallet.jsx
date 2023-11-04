import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label, TextInput } from 'flowbite-react';
import walletph from "../../assets/walletph.svg"
import walletfunc from "../../assets/walletfunc.svg"
import walletfunc2 from "../../assets/walletfunc2.svg"
import power from "../../assets/power.svg"
import buy from "../../assets/buy.svg"
import walletsmall from "../../assets/walletsmall.svg"
import trans from "../../assets/trans.svg"

const Wallet = () => {

    let navigate = useNavigate();
    const [amount, setAmount] = useState("");

    const handleClick = () => {
        navigate("/convert")
    }

  return (
    <>
        <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4'>Wallet</p>
            <img src={walletph}/>
            <div className='flex justify-center items-center'>
                <div className='ml-[-110px]'>
                    <img src={walletfunc} className='mt-6'/>
                    <img src={walletfunc2} className='mt-6'/>
                    <img src={power} className='mt-6'/>
                    <div className="max-w-md">
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
                        onChange={(e) => {setAmount(e.target.value)}}
                    />
                    </div>
                    <div className="flex">
                        <p className='ml-4'>Total:</p>
                        <p className='ml-60'>{amount}</p>
                    </div>
                    <img src={buy} className='mt-6'onClick={handleClick}/>
                </div>
            </div>
            
        </div>
        </div>
        <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <div className='mt-6 ml-6'>
            <img src={walletsmall}/>
            <div className='flex justify-center items-center ml-24'>
                <div className='ml-[-110px]'>
                    <img src={walletfunc} className='mt-6 w-[326px]'/>
                    <img src={trans} className='mt-6 ml-[214px]'/>
                    <img src={walletfunc2} className='mt-6 w-[326px]'/>
                    <img src={power} className='mt-6 w-[326px]'/>
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
                        onChange={(e) => {setAmount(e.target.value)}}
                    />
                    </div>
                    <div className="flex w-[326px]">
                        <p className='ml-4'>Total:</p>
                        <p className='ml-40'>{amount}</p>
                    </div>
                    <img src={buy} className='mt-6 w-[326px]'onClick={handleClick} />
                </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Wallet