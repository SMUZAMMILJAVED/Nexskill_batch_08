import React, { useEffect, useState } from 'react'

const App = () => {
 const [data,setData]= useState({});
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {console.log(data)
    setData(data)
  });
  },[])

  return (
    <>
    <div>frontend application</div>
    <div>
      data from server {data.title}
    </div>
    <div>
      data from server boolean : {data.completed?.toString()}
    </div>
    </>
  )
}

export default App