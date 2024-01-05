import React, {useState} from 'react'
import { useAuth } from '../context/DataContext';
import { useNavigate } from 'react-router-dom'
import QR from "../../assets/QR.jpg"
import CopyToClipboardButton from './CopyToClipboardButton';
import { Alert } from 'flowbite-react';
import ConnectButton from '../Wallet/ConnectButton';


const Dai = () => {

    const { userData } = useAuth();
    let navigate = useNavigate();
    const textToCopy = '0x6b1d1a54e4c1dfcbc22ca236c14b186783923c09';
    const [formData, setFormData] = useState({
        amount: "",
        tnx_id: "",
        type: "dai"
      });
      const [message, setMessage] = useState("");
      const [error, setError] = useState("");

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
          const response = await fetch('https://apis.qubatorsunn.ng/solaxy/order/'+userData._id, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData), 
            
          });
    
          let data = await response.json();
          console.log(data);
    
          navigate("/home")
          // setMessage("Registered")
    
          setFormData({
            amount: "",
            tnx_id: "",
            type: "dai"
          });
    
         
        } catch (error) {
          console.error('Error:', error);
          setMessage("Error")
          setError(error)
        }
        
      };

  return (
    <>
        {userData && (
            <>
            <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-full">
                
        <div className='mt-6 ml-6 flex items-center justify-center'>
            <div className='text-center font-bold mt-10'>
            <ConnectButton />
                <p className='font-bold py-4'>OR</p>

                <p className='mb-10'>Kindly make payment to the wallet address below</p>
                <p className='text-[#F3A615] font-thin mb-10'>Please note that 1 Dai will give you 1000kwh</p>
                <img src={QR} className='w-[427px]'/>
                <div className='flex pt-10 justify-center items-center'>
                    <p className='text-[#F3A615] text-sm font-thin pr-4'>0x6b1d1a54e4c1dfcbc22ca236c14b186783923c09</p>
                    <CopyToClipboardButton text={textToCopy} />
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <form className='mb-4'  onSubmit={handleSubmit}>
                <div className="w-[350px] mt-2">
                        <div className="relative">
                            <input
                            id="amount"
                            name="amount"
                            type="text"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount of Dai Sent"
                            style={{ fontSize: '0.8rem', height: '60px' }}
                            className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                            />
                        </div>
                    </div>
                    <div className="w-[350px] mt-2">
                        <div className="relative">
                            <input
                            id="tnx_id"
                            name="tnx_id"
                            type="text"
                            value={formData.tnx_id}
                            onChange={handleChange}
                            placeholder="Transaction ID/Session ID"
                            style={{ fontSize: '0.8rem', height: '60px' }}
                            className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                            />
                        </div>
                    </div>
                    
                    <button className='bg-[#F3A615] w-[350px] h-[60px] mt-2 hover:bg-white hover:text-black p-2 border-[#F3A615] border-2 rounded-lg text-white text-lg' type='submit'>
                    Transferred
                    </button>
                </form>
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
        </div>
        <div className="lg:hidden md:hidden bg-[#F3F3F3] mt-20 w-full h-full ml-[-280px] mb-10">
            
        <div className='mt-6 ml-6 flex items-center justify-center'>
            
            <div className='text-center font-bold mt-10'>
            <ConnectButton />
            <p className='font-bold py-4'>OR</p>
            <p className='mb-10'>Kindly make payment to the wallet address below</p>
            <p className='text-[#F3A615] mb-10 font-thin'>Please note that 1 Dai will give you 1000kwh</p>
                <img src={QR} className='w-[300px]'/>
                <div className='flex pt-10 justify-center items-center'>
                    <p className='text-[#F3A615] text-sm font-thin pr-1'>0x6b1d1a54e4c1dfcbc22ca236c14b186783923c09</p>
                    <CopyToClipboardButton text={textToCopy} />
                </div>
            </div> 
            </div>
            <div className='flex justify-center items-center'>
                <form className='mb-4'  onSubmit={handleSubmit}>
                <div className="w-[250px] mt-2">
                        <div className="relative">
                            <input
                            id="amount"
                            name="amount"
                            type="text"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Amount of Dai Sent"
                            style={{ fontSize: '0.8rem', height: '60px' }}
                            className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                            />
                        </div>
                    </div>
                    <div className="w-[250px] mt-2">
                        <div className="relative">
                            <input
                            id="tnx_id"
                            name="tnx_id"
                            type="text"
                            value={formData.tnx_id}
                            onChange={handleChange}
                            placeholder="Transaction ID/Session ID"
                            style={{ fontSize: '0.8rem', height: '60px' }}
                            className="py-2 pl-10 pr-3 block w-full border-2 rounded-xl border-gray-300 focus:outline-none focus:border-[#F3A615] hover:border-[#F3A615]"
                            />
                        </div>
                    </div>
                    
                    <button className='bg-[#F3A615] w-[250px] h-[60px] mt-2 hover:bg-white hover:text-black p-2 border-[#F3A615] border-2 rounded-lg text-white text-lg' type='submit'>
                    Transferred
                    </button>
                </form>
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
        </div>
            </>
        )}
    </>
  )
}

export default Dai