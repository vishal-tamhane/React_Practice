import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Item from './components/Item'
import {TodoProvider} from "./contexts"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{}
  return (
    <TodoProvider value ={{todos ,addTodo,updateTodo}}>
      <h2 className='p-4  m-10 bg-pink-700 text-black text-center'>To-Do List</h2>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <Item />
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
