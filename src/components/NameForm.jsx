import { useState } from "react";
import React from "react";
import { Button } from '@nextui-org/react';

const NameForm = () => {
  const [name, setName] = useState("");

  const handleChange = () => {
    const noNumbers = /^[a-zA-Z\s]+$/;
    if (noNumbers.test(name)) {
      setName("Approved!");
    } else {
      setName("Only letters are accepted");
    }
  };

  return (
    <div className="w-1/3 h-40 bg-[#394A3F] rounded-lg flex flex-col shadow-2xl">
      <label className="text-[#EEEEEE] text-lg mt-3 ml-5 mb-1" htmlFor="name">
        Name:
      </label>
      <input
        className="rounded-lg w-1/2 bg[#] ml-5 mb-5"
        type="text"
        required
        onChange={(event) => setName(event.target.value)}
      />
      <Button onClick={() => handleChange(name)} className="w-10 ml-5" variant="ghost">
        Send
      </Button>  
      <div className="text-[#A7DEB9] ml-5 mb-2">{name}</div>
    </div>
  );
};

export default NameForm;
