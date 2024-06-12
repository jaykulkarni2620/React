import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {
  //all todos are here
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //take old values and spread it // need to create the todo ... provide dynamic id and another values ingected
    setTodos((prev) => [...prev, { id: Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo :  prevTodo )))
  }
     
// //Another way to loop
// setTodos((prev) =>
//     prev.map((eachElement)=> {
//       if (eachElement.id === id) {
//         todo
//       } else {
//         eachElement
//       }

//     })

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((prevElement)=> prevElement.id !== id))
}

const toggleComplete = (id) => {
  setTodos( (prev) => prev.map((prevElement) => prevElement === id ? {...prevElement, completed: !prevElement.completed} : prevElement))
}


useEffect( () => {
 const todos = JSON.parse(localStorage.getItem("todos"))

 if (todos && todos.length > 0) {
  setTodos(todos)
 }
}, [])


useEffect(()  => {
localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div 
                          key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
