import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberincluded, setnumberincluded] = useState(false)
  const [characterincluded, setcharacterincluded] = useState(false)
  const [password, setpassword] = useState("")

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberincluded) {
      str += "0123456789"
    }
    if (characterincluded) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?/"
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setpassword(pass)

  }, [length, numberincluded, characterincluded])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-pink-500 bg-gray-900'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'></div>
      </div>

    </>
  )
}


export default App
