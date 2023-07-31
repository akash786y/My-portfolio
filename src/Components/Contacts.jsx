import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        
        <form method='POST' 
            action="https://getform.io/f/290935d4-a15f-4a29-b64d-026a946beb3d" 
            encType='multiport/form-data'
            className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='border-b-4 border-pink-600 text-gray-300 text-4xl font-bold inline '>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>
                    Submit the form below or give me an Email - akash9086236324@gmail.com 
                </p>
            </div>
            <input   className=' bg-[#ccd6f6] p-2' type="text"  placeholder='Name' name='name'/>
            <input  className='my-4  bg-[#ccd6f6] p-2' type="email" placeholder='Email'  name='email'/> 
            <textarea  className='my-3 p-2 bg-[#ccd6f6]' placeholder='Message' name="message"  rows="7"></textarea>

            <button className='text-white font-bold border-2 px-4 py-3 my-0 mx-auto  hover:bg-pink-600 hover:border-pink-600 flex items-center'>Let's colaborate</button>
        </form>
    </div>
  )
}

export default Contacts