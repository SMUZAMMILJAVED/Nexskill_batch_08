import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/CounterSlice'
import Test from './components/Test'
function App() {
const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
  <>
  {count}
  <button onClick={()=>{
    dispatch(increment())
  }}>click to +</button>
  <button onClick={()=>{
    dispatch(decrement())
  }}>click to -</button>
  <Test/>
  </>
  )
}

export default App
