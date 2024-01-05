import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {

    let navigate = useNavigate();

  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-screen">
        <div>
            <p className='mt-20 font-bold text-2xl text-center'>Welcome back</p>
            <p className='mt-2 text-sm text-center'>Hey you're back, fill in your details to get back in</p>
            <div className='mt-6'>
                <LoginForm />
            </div>
        </div>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-screen h-screen ml-[-280px] md:ml-48 md:mt-0 mb-10 ">
        <div className='pl-4'>
            <p className='ml-8 md:ml-48 mt-20 font-bold text-2xl'>Welcome back</p>
            <p className='ml-8 md:ml-48 mt-2 text-sm '>Hey you're back, fill in your details to get back in</p>
            <div className='mt-6'>
                <LoginForm />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login