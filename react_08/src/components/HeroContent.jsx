import React, { useContext } from 'react'
import { DataContext } from '../context/Data'

const HeroContent = () => {
 const a=   useContext(DataContext)
    console.log('from hero content',a)
  return (
   <>
    <div>HeroContent </div>
    <h1>Counter is {a.a} {a.data}</h1>
   </>
  )
}

export default HeroContent