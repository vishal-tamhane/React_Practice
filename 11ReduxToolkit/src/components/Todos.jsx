import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Your Todos</h2>
      <ul className="space-y-3 max-w-md mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition duration-200 border border-gray-200"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
