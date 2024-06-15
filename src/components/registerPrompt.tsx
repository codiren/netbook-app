import React, {useState} from 'react'
import {InputField} from "./input-field.tsx";
import {Button} from "./button.tsx";
import {register} from "../api/auth.tsx";

interface RegisterPromptProps {
  children?: React.ReactNode;
}
export const RegisterPrompt: React.FC<RegisterPromptProps> = ({children}) => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="p-2 flex flex-col border w-72 justify-center items-center">
      <strong className="text-3xl">Registration</strong>
      <InputField type="name" onChange={(e)=>setName(e.target.value)}/>
      <InputField type="password" onChange={(e)=>setPass(e.target.value)}/>
      <Button text="Register" onClick={()=>register(name,pass)}/>
    </div>
      {children}
    </div>
  )
}

