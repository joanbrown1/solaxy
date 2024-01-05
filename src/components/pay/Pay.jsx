import React, {useState} from 'react'
import { useAuth } from '../context/DataContext';
import { useNavigate } from 'react-router-dom'
import { Alert } from 'flowbite-react';


const Pay = () => {
    
    const { userData } = useAuth();
    let navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const amount = queryParams.get("amount");
    const [formData, setFormData] = useState({
        amount: amount,
        tnx_id: "",
        type: "naira"
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
            amount: amount,
            tnx_id: "",
            type: "naira"
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
        <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-screen">
        <div className='mt-6 ml-6'>
            <div className='text-center font-bold'>
                <p>Kindly make payment to the account below</p>
                <p className='text-[#F3A615] pt-10'>Sum of: {Math.ceil(amount)} Naira</p><br/>
                <p>Account Number: 6448602197</p>
                <p>Account Nmae: Solpay</p>
                <p>Bank Name: Moniepoint</p>
                <p className='pt-20 font-thin text-[#F3A615]'>Please note: your account name should be the name on your Solpay account for easy accountability.<br/> Also you are required to write 'Solpay' in the description. <br/><br/> Thank you!</p>
            </div>
            <div className='text-center font-bold mt-10 mb-5'>Once you make a transfer, please fill this</div>
            <div className='flex justify-center items-center'>
                <form className='mb-4'  onSubmit={handleSubmit}>
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
        </div>
        <div className="lg:hidden md:hidden bg-[#F3F3F3] mt-20 w-full h-screen ml-[-280px] mb-10">
        <div className='mt-6 ml-6'>
        <div className='text-center font-bold'>
                <p>Kindly make payment to the account below</p>
                <p className='text-[#F3A615] pt-10'>Sum of: {Math.ceil(amount)} Naira</p><br/>
                <p>Account Number: 6448602197</p>
                <p>Account Name: Solpay</p>
                <p>Bank Name:  Moniepoint</p>
                <p className='pt-20 font-thin text-[#F3A615]'>Please note: your account name should be the name on your Solpay account for easy accountability.<br/> Also you are required to write 'Solpay' in the description. <br/><br/> Thank you!</p>
            </div> 
        </div>
            <div className='text-center font-bold mt-10 mb-5'>Once you make a transfer, please fill this</div>
            <div className='flex justify-center items-center'>
                <form className='mb-4'  onSubmit={handleSubmit}>
                    <div className="w-[270px] mt-2">
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
                    
                    <button className='bg-[#F3A615] w-[270px] h-[60px] mt-2 hover:bg-white hover:text-black p-2 border-[#F3A615] border-2 rounded-lg text-white text-lg' type='submit'>
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

export default Pay