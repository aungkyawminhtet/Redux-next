import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    bg?: string;
    handleClick?: () => void;
}
const Button = ({children, bg, handleClick}: ButtonProps) => {
  return (
    <button className='bg px-4 py-2 rounded shadow' onClick={handleClick}>{children}</button>
  )
}

export default Button