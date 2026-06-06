import React from 'react'

const Button = ({ handleClick, text }) => (
  <button 
    onClick={handleClick} 
    className="mr-2 bg-blue-500 px-8 py-2 border-2 border-black"
  >
    {text}
  </button>
)

export default Button
