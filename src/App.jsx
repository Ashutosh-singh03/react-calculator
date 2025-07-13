import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 const[display,setDisplay]=useState("");
const handleClick =(value)=>{
  setDisplay(display+value)
}
const handleClear=()=>{
  setDisplay("");
}
const handDelete=()=>{
  setDisplay(display.slice(0,-1));
}
const handleEquals=()=>{
 try{
  setDisplay(eval(display).toString())
 }
 catch{
  setDisplay("Error");
 }
}
 return(
  <>
  <div >
    <div className="w-80 mx-auto mt-20 p-6 border-2 border-black bg-gray-100 rounded-2xl shadow-2xl ">
      <div className="w-full h-16 bg-white rounded-md mb-4 text-right px-4 py-2 text-2xl font-semibold  border-black shadow-inner overflow-x-auto"> {display || "0" }</div>

  <button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" 
  onClick={()=>handleClick("7")}>
  7
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("8")}>
  8
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("9")}>
  9
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handDelete()}>
  ⌫
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("4")}>
  4
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("5")}>
  5
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("6")}>
  6
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("-")} >
  -
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("1")}>
  1
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("2")}>
  2
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("3")}>
  3
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("+")}>
  +
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClear()}>
  C
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick("0")}>
  0
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=>handleClick(".")}>
  .
</button>
<button className="w-16 h-16 bg-gray-200 border-2 border-black rounded-md text-xl font-semibold shadow-md hover:bg-gray-300 active:scale-95 transition" onClick={()=> handleEquals()}>
  =
</button>

    </div>
  </div>
  </>
 )
}

export default App
