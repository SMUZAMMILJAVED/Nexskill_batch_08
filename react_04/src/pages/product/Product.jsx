import React from 'react'
import Nav from '../../components/nav/Nav'
import { useParams } from 'react-router-dom'

const Product = () => {
   const {name}=useParams()
   
  return (
    <>
    
    <div>Product page!</div>
    <h1>product name is {name}</h1>
    </>
  )
}

export default Product