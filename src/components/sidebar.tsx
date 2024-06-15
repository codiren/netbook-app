import React from 'react'
import {Button} from "./button.tsx";
import {logout} from "../api/auth.tsx";

interface sidebarProps {
  children?: React.ReactNode;
}
export const Sidebar: React.FC<sidebarProps> = ({children}) => {

  return (
    <div className="absolute">
      <Button text={"Log Out"} onClick={logout}></Button>
      {children}
    </div>
  )
}

