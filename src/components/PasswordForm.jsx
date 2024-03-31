import { useState } from "react";
import React from "react";
import { Button } from '@nextui-org/react';

const PasswordForm = () => {
  const [password, setPassword] = useState("");

  const handleChange = () => {
    const passRegex = /.{8,}$/;
    if (passRegex.test(password)) {
      setPassword("Thank you");
    } else {
      setPassword("Your password require at least 8 characters");
    }
  };

  return (
    <div className="w-1/3 h-40 bg-[#394A3F] rounded-lg flex flex-col shadow-2xl">
      <label
        className="text-[#EEEEEE] text-lg mt-3 ml-5 mb-1"
        htmlFor="password"
      >
        Password
      </label>
      <input
        type="password"
        required
        className="rounded-lg w-1/2 bg[#] ml-5 mb-5"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={() => handleChange(password)} className="w-10 ml-5" variant="ghost">
        Send
      </Button>  
      <div className="text-[#A7DEB9] ml-5 mb-2">{password}</div>
    </div>
  );
};

export default PasswordForm;
