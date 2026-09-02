import React from 'react'
import './Button.css'
const Button = (props) => {
   const bool=false?"red":"blue" //blue
  return (
   <button className={bool}>{props.title}</button>
  )
}

export default Button