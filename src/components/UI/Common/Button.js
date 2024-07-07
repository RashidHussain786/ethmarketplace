import React from 'react'

const Button = ({
    children, 
    className = "text-white bg-cyan-600 hover:bg-cyan-700 rounded-md",
    ...rest
}) => {
  return (
    <button 
    {...rest} 
    className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border text-base font-medium ${className}`}>
    {children}
    </button>
  )
}

export default Button