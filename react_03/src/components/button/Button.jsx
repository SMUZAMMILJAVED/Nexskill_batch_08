import React from 'react'
import './Button.css'
const Button = ({title,onClick}) => {
  return (
   <button onClick={onClick} className='btn'>{title}</button>
  )
}

export default Button