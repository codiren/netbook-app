import React, {useState} from 'react'
import {InputField} from "./input-field.tsx";
import {Button} from "./button.tsx";
import {login} from "../api/auth.tsx";

interface LoginPromptProps {
  children?: React.ReactNode;
}
export const LoginPrompt: React.FC<LoginPromptProps> = ({children}) => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="p-2 flex flex-col border w-72 justify-center items-center">
      <strong className="text-3xl">NetBook</strong>
      <img src="/telephone-svgrepo-com.svg" className="size-12 hover:animate-spin" alt="logo"/>
      <InputField type="name" onChange={(e)=>setName(e.target.value)}/>
      <InputField type="password" onChange={(e)=>setPass(e.target.value)}/>
      <Button text="Login" onClick={()=>login(name,pass)}/>
    </div>
      {children}
    </div>
  )
}

