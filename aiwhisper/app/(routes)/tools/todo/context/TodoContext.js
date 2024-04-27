import { createContext, useContext } from "react";

 //through this context we pass object of which we want context, all data, fields pass here 
export const TodoContext = createContext({
    todombs: [
        {   // for like how it looks like., not important cn leave it empty
            id: 1,
            todo: 'todo msg',
            completed: 'false',
        }
    ],
    // functionality - vegue def.
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    isToggleComplete: (id) => {},
})
// useTodo to use this context and TOdoContext is for like data accessing
// hook that return hook to use todo context in othr fil else we hve to import context and all
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider