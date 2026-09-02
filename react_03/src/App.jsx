

import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button/Button'
import Counter from './components/counter/Counter'
const App = () => {

 const [data,setData]= useState(0);
  // useEffect(()=>{
  //   console.log("useEffect from app.jsx");
    
  // })
  
  return (
    <div style={{margin:'30px'}}>
     <Counter/>
     <Counter/>
     <Counter/>
     <button onClick={()=>{
      setData(data+1)
     }}>check to upate effect</button>
      {/* <div className='container'>
        <Button title='login' />
        <Button title='signup' />
        <Button title='send' />
        <Button title='delete' />
        <Button title='add' />
        <Button title='update' /></div> */}

    </div>

  )
}

export default App