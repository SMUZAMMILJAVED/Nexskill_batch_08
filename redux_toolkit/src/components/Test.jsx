import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/CounterSlice'
const Test = () => {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>Test {count}</div>
  )
}

export default Test