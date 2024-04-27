import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoItem({todo}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodomsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, isToggleComplete} = useTodo()

    const editTodo = () => {
      updateTodo(todo.id, {...todo, todo: todoMsg})
      setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
      isToggleComplete(todo.id)
    }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 m-2 gap-x-3 shadow-md shadow-white-50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >

      <input type="checkbox"
      className='cursor-pointer'
      checked={todo.completed}
      onClick={toggleCompleted}
      />

      <input
      className={`outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border border-black/10 px-2" : "bg-transparent"}`}
      value={todoMsg}
      onChange={(e) => setTodomsg(e.target.value)}
      readOnly={!isTodoEditable}
      />

      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/40 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0'
      onClick={() => {
        if(todo.completed) return
        if(isTodoEditable){ editTodo() }
        else setIsTodoEditable((prev) => !prev)
      }}
      disabled={todo.completed}
      >{isTodoEditable ? "💾" : "🖊"} </button>
      {/* >{isTodoEditable ? "save" : "edit"} </button> */}

      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/40 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0'
      onClick={() => deleteTodo(todo.id)}
      >🚮</button>
      {/* >del❌</button> */}
    </div>
  )
}

export default TodoItem