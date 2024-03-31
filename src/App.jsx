import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import NameForm from "./components/NameForm";
import EmailForm from "./components/EmailForm";
import PasswordForm from "./components/PasswordForm";

const App = () => {
  return (
    <div className="bg-[#626262] w-screen h-screen flex flex-col justify-center items-center">
      <NameForm />
      <br />
      <PasswordForm />
      <br />
      <EmailForm />
    </div>
  );
};

export default App;
