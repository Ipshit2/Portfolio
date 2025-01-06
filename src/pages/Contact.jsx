import React, {useState} from 'react'
import toast from 'react-hot-toast';

function Contact() {
  const SubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key",import.meta.env.VITE_CONTACT_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    const data = await response.json();
    if (data.success) {
      toast.success("Successfully sent",{
        style:{
          backgroundColor: '#6a6b6e'
        },
        iconTheme:{
          primary: '#4B9DAB',
          secondary: '#ffffff'
        }
      })
      event.target.reset();
    } else {
      toast.error("Something went wrong",{
        style:{
          backgroundColor: '#6a6b6e'
        },
        iconTheme:{
          primary: '#4B9DAB',
          secondary: '#ffffff'
        }
      })
      console.log("Error", data);
      
    }
  }
  return (
    <div className='my-[20px] h-[700px] mx-[20px]' id='contact'>
        <h1 className='font-bold text-center lg:text-left text-[40px] lg:text-[100px] text-[#2D5E66] leading-tight font-Pop pt-[20px] mt-[150px]'>LET'S WORK <br /> TOGETHER</h1>
        <form name='form' className='my-[20px] font-Pop' onSubmit={SubmitForm}>
            <div className='flex  space-x-2'>
                <div className='w-[50%]'>
                    <h1 className='text-[14px] pt-[10px] text-[#6a6b6e]'>NAME</h1>
                    <input name='name' placeholder='Your Name'  type="text" className=' w-[100%]  text-white rounded-xl my-[8px] h-auto py-[7px]
                     pl-[10px] text-[15px] bg-[#3e3d3e]'/>
                </div>
                <div className='w-[50%]'>
                    <h1 className='email text-[14px] pt-[10px] text-[#6a6b6e]'>EMAIL ADDRESS</h1>
                    <input name='email' placeholder='Your Email'  type="text" className='w-[100%] text-white rounded-xl my-[8px] h-auto py-[7px] pl-[10px] text-[15px] bg-[#3e3d3e]'/>
                </div>
                
            </div>
            <div>
                <h1 className='text-[14px] pt-[10px] text-[#6a6b6e]'>MESSAGE</h1>
                <textarea placeholder='Message' name='message'  type="text" className=' w-[100%] text-white rounded-xl my-[8px] h-[130px] py-[7px]
                     pl-[10px] text-[15px] bg-[#3e3d3e] resize-none'/>
            </div>
            <div>
                <button className='bg-[#2D5E66] w-full h-auto py-[10px] mt-[10px] rounded-xl font-medium' type='submit'>SUBMIT</button>
            </div>
        </form>

    </div>
  )
}

export default Contact