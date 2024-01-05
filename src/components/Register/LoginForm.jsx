import React, {useState} from 'react'
import { HiMail, HiEye, HiEyeOff } from 'react-icons/hi';
import { Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../context/DataContext"


const LoginForm = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
  
    setMessage("Loading");
  
    try {
      const response = await fetch('https://apis.qubatorsunn.ng/solaxy/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Try to parse the JSON response
      let data;
      try {
        data = await response.json();
        console.log(data);
      } catch (jsonError) {
        // If parsing JSON fails, handle the error
        console.error('Error parsing JSON:', jsonError);
        setMessage("Error");
        setError('Invalid JSON response');
        return;
      }
  
      // Check if the response indicates an incorrect password
      if (data && data.error === 'Incorrect password') {
        setMessage("Error");
        setError('Incorrect password');
        return;
      }
  
      // Continue with successful login
      const authUserData = data;
      localStorage.setItem('authUserData', JSON.stringify(authUserData));
      login(authUserData);
      navigate("/home");
  
      setFormData({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage("Error");
      setError('Incorrect Password or email');
    }
  };
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <> 
    <div className=''>
        <div className='flex justify-center items-center'>
        <form className='mb-4'  onSubmit={handleSubmit}>
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
            <button className='bg-[#F3A615] w-[350px] h-[60px] mt-2 hover:bg-white hover:text-black p-2 border-[#F3A615] border-2 rounded-lg text-white text-lg' type='submit'>
            Login
            </button>
        </form>
        </div>
        <p className='text-center text-sm'>Don't have an account? <a href='/signup' className='text-[#F3A615] font-thin'>Register</a></p>
    </div>
    {message && message === "Loading" ? 
    <Alert color="warning" className='mb-10'>
        <span className="font-medium">Loading!</span> This might take a few seconds
    </Alert>: ""
    }
    {message && message === "Error" ? 
    <Alert color="failure" onDismiss={() => navigate("/login")} className='mb-10'>
        <span className="font-medium">Error!</span> {error}
    </Alert>: ""
    }
    {message && message === "Registered" ? 
    <Alert color="success" onDismiss={() => navigate("/home")} className='mb-10'>
        <span className="font-medium">{message}!</span> 
    </Alert>: ""
    }
    </>
  )
}

export default LoginForm