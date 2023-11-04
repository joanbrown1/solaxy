import React from 'react'
import { useNavigate } from 'react-router-dom'
import signup from "../../assets/signup.svg"
import sign from "../../assets/signnn.svg"
import login from "../../assets/login.svg"

const SignUp = () => {

    let navigate = useNavigate();

  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full">
        <div>
            <img src={signup} className='ml-[350px] mt-20'/>
            <div className='flex ml-[350px] mt-40 mb-10 '>
                <img src={login} className='' onClick={() => {navigate("/login")}}/>
                <img src={sign} className='mt-6' onClick={() => {navigate("/login")}}/>
            </div>
        </div>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <div>
            <img src={signup} className='ml-6 mt-20'/>
            
            <div className='flex ml-6 mt-40 mb-10'>
                <img src={login} className='' onClick={() => {navigate("/login")}}/>
                <img src={sign} className='mt-6' onClick={() => {navigate("/login")}}/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SignUp