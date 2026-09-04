import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter.Context'

const Button = () => {
 const a= useContext(CounterContext);

  return (
    <div>
    <button onClick={()=>{
a.setCount(a.count+1)
    }}>increment</button>
  <button  onClick={()=>{
a.setCount(a.count-1)
    }}>decrement</button>
    </div>
  )
}

export default Button