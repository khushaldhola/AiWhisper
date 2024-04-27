"use client"
import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  // automatically map to the addTodo of context cause sm nme
  // Definations
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) // spreading our arr and add todo in front
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachPrevTodo) => (eachPrevTodo.id === todo.id ? todo : eachPrevTodo) ))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const isToggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((eachPrevTodo) => 
        (eachPrevTodo.id === id 
          ? {...eachPrevTodo, completed: !eachPrevTodo.completed} 
          : eachPrevTodo) 
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if( todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  // we only want to add upper not that reload all the steady not touched todos so hre anothe hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]) // so anything happens to todos run this hook, piese of code

  // console.log(localStorage)
  return (
    // now evrythng which is inside of this is aware of context, can also give in mian, value to import objs that are there
    
    // <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, isToggleComplete}}>
    //   <TodoForm />
    //   {
    //     todos.map((todo) => (
    //       <div key={todo.id} className='w-full'>
    //         <TodoItem todo={todo} />
    //       </div>
    //     ))
    //   }
    // </TodoProvider>
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, isToggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
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
