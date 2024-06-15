import React from 'react'
import {Button} from "../components/button.tsx";
import {RegisterPrompt} from "../components/registerPrompt.tsx";
import {AppRoutes} from "../routes.tsx";
import {useNavigate} from "react-router-dom";
export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute size-full grid place-items-center">
      <RegisterPrompt>
        <Button text="Login instead?" onClick={()=>navigate(AppRoutes.home)}/>
      </RegisterPrompt>
    </div>
  )
}

