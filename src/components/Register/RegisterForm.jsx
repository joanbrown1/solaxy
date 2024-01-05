import React, {useState} from 'react'
import { HiMail, HiEye, HiEyeOff, HiUser, HiPhone, HiCalculator } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    meter_id: ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("Loading")


    try {
      // Send updatedFormData to an API using the fetch function
      const response = await fetch('https://apis.qubatorsunn.ng/solaxy/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
        
      });

      let data = await response.text();
      console.log(data);
      setMessage("Registered")

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: "",
        meter_id: ""
      });

     
    } catch (error) {
      console.error('Error:', error);
      setMessage("Error")
      setError(error)
    }
    
  };


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    setShowConfirmPassword(!showConfirmPassword)
  };
  

  return (
    <> 
    <div className=''>
        <div className='flex justify-center items-center'>
        <form className='mb-4' onSubmit={handleSubmit}>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiUser />
                    </div>
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiUser />
                    </div>
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiMail />
                    </div>
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiPhone />
                    </div>
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                    >
                    {showPassword ? <HiEye /> : <HiEyeOff />}
                    </button>
                    <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                    >
                    {showPassword ? <HiEye /> : <HiEyeOff />}
                    </button>
                    <input
                    id="confirm_password"
                    name="confirm_password"
                    type={showConfirmPassword ? 'text' : 'confirm_password'}
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                </div>
            </div>
            <div className="w-[350px] mt-2">
                <div className="relative">
                    <input
                    id="meter_id"
                    name="meter_id"
                    type="text"
                    placeholder="Meter ID"
                    value={formData.meter_id}
                    onChange={handleChange}
                    style={{ fontSize: '0.8rem', height: '60px' }}
                    className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiCalculator />
                    </div>
                </div>
            </div>
            
            <button className='bg-[#F3A615] w-[350px] h-[60px] mt-2 hover:bg-white hover:text-black p-2 border-[#F3A615] border-2 rounded-lg text-white text-lg' type='submit'>
            Register
            </button>
        </form>
        </div>
        <p className='text-center text-sm'>Have an account? <a href='/login' className='text-[#F3A615] font-thin'>Login</a></p>
    </div>
    {message && message === "Loading" ? 
    <Alert color="warning" className='mb-10'>
        <span className="font-medium">Loading!</span> This might take a few seconds
    </Alert>: ""
    }
    {message && message === "Error" ? 
    <Alert color="failure" onDismiss={() => navigate("/signup")} className='mb-10'>
        <span className="font-medium">Error!</span> {error}
    </Alert>: ""
    }
    {message && message === "Registered" ? 
    <Alert color="success" onDismiss={() => navigate("/login")} className='mb-10'>
        <span className="font-medium">{message}!</span> 
    </Alert>: ""
    }
    </>
  )
}

export default LoginForm