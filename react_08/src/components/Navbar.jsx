import React, { useContext } from 'react'
import { DataContext } from '../context/Data'

const Navbar = () => {
    const a=useContext(DataContext)
    console.log(a)
  return (
    <div>Navbar </div>
  )
}

export default Navbar