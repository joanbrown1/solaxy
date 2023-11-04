import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeph from "../../assets/homeframe.svg"
import settingpr from "../../assets/settingspr.svg"
import wallet from "../../assets/profilewallet.svg"
import currency from "../../assets/currency.svg"
import security from "../../assets/security.svg"
import pushnot from "../../assets/pushnot.svg"
import support from "../../assets/support.svg"
import twitter from "../../assets/twitter.svg"
import discord from "../../assets/discord.svg"
import telegram from "../../assets/telegram.svg"

const Settings = () => {

    let navigate = useNavigate();


  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full pb-20">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4 ml-[330px]'>Profile</p>
            {/* <img src={homeph}/> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={settingpr} className='ml-[330px]'/>
            </div>
            <div className='flex justify-center items-center'>
                <div className='mt-10 ml-[-40px]'>
                    <img src={wallet} className='w-[420px] ' onClick={() => {navigate("/wallet")}}/>
                    <img src={currency} className='w-[420px] ' onClick={() => {navigate("/convert")}}/>
                    <img src={security} className='w-[420px] ' onClick={() => {navigate("/")}}/>
                    <img src={pushnot} className='w-[420px] ' onClick={() => {navigate("/")}}/>
                    <img src={support} className='w-[420px] ' onClick={() => {navigate("/")}}/>
                </div>
            </div>
            <div className='flex justify-center items-center space-x-20 mt-6'>
                <img src={telegram} />
                <img src={discord} />
                <img src={twitter} />
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] pb-20 pl-[60px]">
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={settingpr} className=''/>
            </div>
            <p className='font-medium text-lg mt-6'>Account</p>
            <div className='flex justify-center items-center'>
                <div className='mt-10 ml-[-40px]'>
                    <img src={wallet} className='' onClick={() => {navigate("/wallet")}}/>
                    <img src={currency} className='' onClick={() => {navigate("/convert")}}/>
                    <img src={security} className='' onClick={() => {navigate("/")}}/>
                    <img src={pushnot} className='' onClick={() => {navigate("/")}}/>
                    <img src={support} className='' onClick={() => {navigate("/")}}/>
                </div>
            </div>
            <div className='flex justify-center items-center space-x-20 mt-6 ml-[-40px]'>
                <img src={telegram} />
                <img src={discord} />
                <img src={twitter} />
            </div>
    </div>
    </>
  )
}

export default Settings