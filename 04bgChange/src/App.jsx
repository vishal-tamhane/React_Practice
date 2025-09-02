import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("aqua")

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-5 text-white px-3 py-2 rounded-2xl' style={{backgroundColor: "white"}}>
          <button onClick = {() => setcolor("red")} className='py-1 px-3  rounded-2xl  'style={{backgroundColor: "red"}}>red</button>
          <button onClick = {() => setcolor("green")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "green"}}>green</button>
          <button onClick = {() => setcolor("blue")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "blue"}}>blue</button>
          <button onClick ={ () => setcolor("pink")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "pink"}}>pink</button>
          <button onClick ={ () => setcolor("black")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "black"}}>black</button>
          <button onClick ={ () => setcolor("yellow")} className='py-1 px-3  rounded-2xl text-black'style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick ={ () => setcolor("purple")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "purple"}}>purple</button>
          <button onClick ={ () => setcolor("brown")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "brown"}}>brown</button>
          <button onClick ={ () => setcolor("orange")} className='py-1 px-3  rounded-2xl 'style={{backgroundColor: "orange"}}>Orange</button>
          {/* <button onClick={() => setcolor("yellow")} className='py-0 rounded-b-2xl' style={{backgroundColor:"yellow"}}>Yellow</button> */}
        </div>
       </div>
     </div>
    </>
  )
}

export default App



