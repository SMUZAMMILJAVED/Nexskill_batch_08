import { useContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { CounterContext } from './context/Counter.Context'
import Button from './components/Button'

function App() {
const a=useContext(CounterContext)
console.log(a)

  return (
   <>
   <h1>counter is {a.count}</h1>
   <Nav />
     <Button/>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
   </>
  )
}

export default App
