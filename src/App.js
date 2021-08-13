import React,{useState,useEffect} from "react";
import "./style.css";
import randomcolor from 'randomcolor'

export default function App() {
  const [count,setCount]=useState(0);
  const [color,setColor]=useState("");
  useEffect(()=>{
    setColor(randomcolor())
    },[count]
  )
  return (
    <div>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
