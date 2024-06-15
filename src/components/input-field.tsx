import React from 'react'
interface InputFieldProps{
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const types:{[key:string]:[string,string]} = {
  email:["John@email.lt","email"],
  name:["John Smith","text"],
  password:["********","password"]
}
export const InputField: React.FC<InputFieldProps> = ({type,onChange}) => {
  return (
    <input onChange={onChange} type={types[type][1]} className="border rounded m-0.5 hover:bg-gray-100" placeholder={types[type][0]}></input>
  )
}

