import { useState } from 'react'
import React from 'react'
import { Button } from '@nextui-org/react';

const EmailForm = () => {
    const [email, setEmail] = useState("");

    const handleChange = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (emailRegex.test(email)) {
           setEmail("Approved!");
        } else {
            setEmail("Please provide a regular email.");
        }
    };

  return (
    <div className='w-1/3 h-40 bg-[#394A3F] rounded-lg flex flex-col shadow-2xl'>
      <label className='text-[#EEEEEE] text-lg mt-3 ml-5 mb-1' htmlFor="email">Email:</label>
      <input type="email" name="email" className="rounded-lg w-1/2 bg[#] ml-5 mb-5" required  onChange={(event) => setEmail(event.target.value)} />
      <Button onClick={() => handleChange(email)} className="w-10 ml-5" variant="ghost">
        Send
      </Button>  
      <div className='text-[#A7DEB9] ml-5 mb-2'>{email}</div>
    </div>
  )
}

export default EmailForm
