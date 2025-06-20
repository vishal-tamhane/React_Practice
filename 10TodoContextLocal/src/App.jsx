import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Item from './components/Item'
import {TodoProvider} from "./contexts"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(),...todo} , ...prev])
  }

  const updateTodo =(id ,todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , completed:!prevTodo.completed} : prevTodo))
  }

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
                        {/* <Item /> */}
                        {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
    ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
