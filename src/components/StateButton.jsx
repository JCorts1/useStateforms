import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
  };

  function increase () {
    setCount(count + 1);
  }
  return (
    <div className="w-screen h-screen bg-[#EEEEEE]">
      <button onClick={decrementCount} className=" ml-10 mt-10 rounded-xl w-10 h-10 bg-[#626262]">
        -
      </button>
      <span className="text-2xl m-4">{count}</span>
      <button onClick={increase} className="w-10 h-10 bg-[#626262] rounded-xl">+</button>
    </div>
    
  );
};

export default App;
