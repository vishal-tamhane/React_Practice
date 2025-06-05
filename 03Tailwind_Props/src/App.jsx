import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Com from './components/Com'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-400 mb-4 text-black'>Tailwind test</h1>
      
      <Com username="Vishal" price={123}/>
      <Com username= "Sagar" />
    </>
  )
}

export default App
