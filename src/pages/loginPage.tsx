import React from 'react'
import {LoginPrompt} from "../components/loginPrompt.tsx";
import {Button} from "../components/button.tsx";
import {AppRoutes} from "../routes.tsx";
import {useNavigate} from "react-router-dom";
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute size-full grid place-items-center">
        <LoginPrompt>
          <Button text="Register instead?" onClick={()=>navigate(AppRoutes.register)}/>
        </LoginPrompt>
      </div>
    </>
  )
}

