import React, { useEffect } from 'react'
import { useState } from 'react';
import './Counter.css'
import Button from '../button/Button';
const Counter = () => {
    const [count, setCount] = useState(2)
    const handleClick = () => {
        setCount(count + 1)

    }
    const handleClicktoD = () => {
        setCount(count - 1)

    }
    useEffect(()=>{
        alert('from counter component')
    })
    return (
        <div className='count'>
            <h1>counter is {count}</h1>
            <Button title={'increment'} onClick={handleClick}/>
            <Button title={'decrement'} onClick={handleClicktoD}/>
        </div>
    )
}

export default Counter