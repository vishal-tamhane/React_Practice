import { useCallback, useState, useEffect } from 'react'

function Cal() {
  const [length, setLength] = useState(8)
  const [numberIncluded, setNumberIncluded] = useState(false)
  const [characterIncluded, setCharacterIncluded] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberIncluded) {
      str += "0123456789"
    }
    if (characterIncluded) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?/"
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  }, [length, numberIncluded, characterIncluded])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberIncluded, characterIncluded, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-pink-500 bg-gray-900'>
      <h1 className='text-2xl font-bold text-center mb-4'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={password}
          className='w-full px-3 py-2 outline-none'
          placeholder='Password'
          readOnly
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2'>Password Length</label>
        <input
          type='number'
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className='w-full p-2 border rounded'
          min="1"
        />
      </div>

      <div className='flex gap-4 mb-4'>
        <div>
          <input
            type='checkbox'
            id='numberInput'
            onChange={() => setNumberIncluded(prev => !prev)}
          />
          <label htmlFor='numberInput' className='ml-2'>Include Numbers</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='characterInput'
            onChange={() => setCharacterIncluded(prev => !prev)}
          />
          <label htmlFor='characterInput' className='ml-2'>Include Special Characters</label>
        </div>
      </div>
    </div>
  )
}
export default Cal
