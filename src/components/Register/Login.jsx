import React from 'react'
import signup from "../../assets/signup.svg"
import sign from "../../assets/login2.svg"
import login from "../../assets/loginnnn.svg"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let navigate = useNavigate();

  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-830px] w-full h-full">
        <div>
            <img src={login} className='ml-[350px] mt-20'/>
            <img src={sign} className='mt-6 ml-[350px]' onClick={() => {navigate("/welcome")}}/>
        </div>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-360px] mb-10">
        <div>
            <img src={login} className='ml-6 mt-20'/>
            
            <img src={sign} className='mt-6 ml-6' onClick={() => {navigate("/welcome")}}/>
        </div>
    </div>
    
    </>
  )
}

export default Login