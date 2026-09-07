
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useContext } from 'react'
import { DataContext } from './context/Data'

function App() {
 const a= useContext(DataContext)
const data={"name":'kaif kamran'}
  return (
   <>
   <Navbar/>
   <Hero data={data}/>
   <button onClick={()=>{
    a.setA(a.a+1)
   }}>click to update</button>
   <button onClick={()=>{
    a.setData(a.data+1)
   }}>click to update</button>
   <Footer/>
   </>
  )
}

export default App
