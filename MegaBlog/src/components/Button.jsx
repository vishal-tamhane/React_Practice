import React from 'react'

function Button({
    Children, // Children is a reserved keyword in React, use children instead
    type = 'button',
    bgColor= 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {Children}  
    </button>
  )
}

export default Button
