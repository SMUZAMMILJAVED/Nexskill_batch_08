import { createContext, useState } from "react";

export const DataContext=createContext(null)


export const DataProvider=(props)=>{
    const [a,setA]=useState(0)
    const [data,setData]=useState(12)
    console.log(a)
    return(
      <DataContext.Provider value={{a,setA,data,setData}} >
{props.children}
</DataContext.Provider>  
    )
}
