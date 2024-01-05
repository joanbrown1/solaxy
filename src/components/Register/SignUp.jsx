import React from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const SignUp = () => {

    let navigate = useNavigate();

  return (
    <>
     <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-[1000px]">
        <div>
            <p className='mt-20 font-bold text-2xl text-center'>Welcome to Solpay</p>
            <p className='mt-2 text-sm text-center'>Complete the sign up to get started</p>
            <div className='mt-6'>
                <RegisterForm />
            </div>
        </div>
    </div>
    <div className="lg:hidden bg-[#F3F3F3] mt-20 w-screen h-screen ml-[-280px] md:ml-48 md:mt-0 mb-10 ">
        <div className='pl-4'>
            <p className='ml-8 md:ml-48 mt-20 font-bold text-2xl'>Welcome to Solpay</p>
            <p className='ml-8 md:ml-48 mt-2 text-sm '>Complete the sign up to get started</p>
            <div className='mt-6'>
                <RegisterForm />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SignUp