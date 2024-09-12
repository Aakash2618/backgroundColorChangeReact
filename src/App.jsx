import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [background,setbackground]=useState("bg-black")
  const colors=[
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-orange-400",
    "bg-violet-400",
    "bg-black",
    "bg-gray-400",
    "bg-lime-400",
    "bg-sky-400",
    "bg-fuchsia-700"
  ]
  
  return (
    <>
      <div className={`w-screen h-screen pt-8 relative ${background}`}>
      {/* dkfldsj */}
        <div className="w-4/5 h-14 bg-white rounded-full mx-auto absolute bottom-14 left-28">
          <ul className='flex justify-around items-center h-full flex-wrap'>
            {colors.map((color,index)=>{
              const arr=color.split("-")
              return <li key={index} className={`p-5 cursor-pointer  ${color} rounded-full hover:${arr[0]+"-"+arr[1]+"-"+"500"}`} onClick={()=>setbackground(color)}></li>
            })}

          </ul>
        </div>
      </div>
    </>
  )
}

export default App
