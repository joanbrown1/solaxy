import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeph from "../../assets/homeframe.svg"
import profileph from "../../assets/profileph.svg"
import editp from "../../assets/editp.svg"
import wallet from "../../assets/profilewallet.svg"
import payment from "../../assets/paymentprofile.svg"
import help from "../../assets/helpprofile.svg"
import settings from "../../assets/settingprofile.svg"
import logout from "../../assets/logoutprofile.svg"

const Profile = () => {

    let navigate = useNavigate();


  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-full">
        <div className='mt-6 ml-6'>
            <p className='text-lg font-medium mb-4 ml-[330px]'>Profile</p>
            {/* <img src={homeph}/> */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={profileph} className='ml-[330px]'/>
                <img src={editp} className='ml-[45px] mt-8'/>
            </div>
            <div className='flex justify-center items-center'>
                <div className='mt-10 ml-[-40px]'>
                    <img src={wallet} className='w-[420px] ' onClick={() => {navigate("/wallet")}}/>
                    <img src={payment} className='w-[420px] ' onClick={() => {navigate("/convert")}}/>
                    <img src={help} className='w-[420px] ' onClick={() => {navigate("/")}}/>
                    <img src={settings} className='w-[420px] ' onClick={() => {navigate("/settings")}}/>
                    <img src={logout} className='w-[420px] ' onClick={() => {navigate("/")}}/>
                </div>
            </div>
        </div>
     </div>
     <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-280px] mb-10 pl-[60px]">
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-6">
                <img  src={profileph} className=''/>
                <img src={editp} className=' mt-8'/>
            </div>
            <p className='font-medium text-lg mt-6'>Account</p>
            <div className='flex justify-center items-center'>
                <div className='mt-10 ml-[-40px]'>
                    <img src={wallet} className='' onClick={() => {navigate("/wallet")}}/>
                    <img src={payment} className='' onClick={() => {navigate("/convert")}}/>
                    <img src={help} className='' onClick={() => {navigate("/")}}/>
                    <img src={settings} className='' onClick={() => {navigate("/settings")}}/>
                    <img src={logout} className='' onClick={() => {navigate("/")}}/>
                </div>
            </div>
    </div>
    </>
  )
}

export default Profile