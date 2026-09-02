import React from 'react'
import Button from './components/button/Button'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import Product from './pages/product/Product'
import Nav from './components/nav/Nav'


const App = () => {
  return (
    <>
    
   <Button title="test"/>
    <Nav/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/product/:name' element={<Product/>}/>
<Route path='*' element={<NotFound/>}/>

    </Routes> </>
  )
}

export default App