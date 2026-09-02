import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <nav>
     <ul>
           <Link to='/'><li>home</li></Link>
           <Link to='/about'><li>about</li></Link>
           <Link to='/abc'><li>abc</li></Link>
     </ul>
    </nav>
  )
}

export default Nav