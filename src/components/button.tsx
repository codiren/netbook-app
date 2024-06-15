import React from 'react'
interface ButtonProps{
  classname?: string
  onClick?: () => void;
  text: string
  type?: string
}
export const Button: React.FC<ButtonProps> = ({type,classname,onClick,text}) => {
  const filteredtype = type==undefined?"button":type;
  return (
    <button type={filteredtype as "button" | "reset" | "submit" | undefined} className={`hover:translate-y-0.5 transition-transform m-0.5 border pl-2 pr-2 rounded hover:bg-gray-100 ${classname}`} onClick={onClick}>{text}</button>
  )
}

