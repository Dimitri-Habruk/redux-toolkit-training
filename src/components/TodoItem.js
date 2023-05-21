import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompletedTodo, removeTodo } from '../features/todo/todoSlice'

const TodoItem = ({todo}) => {

    const dispatch = useDispatch()

    const toggleTodoHandler = (id)=>{
        dispatch(toggleCompletedTodo({ id: id }))
    }

    const removeTodoHandler = (id) =>{
        dispatch(removeTodo({ id: id }))
    }
    
    return (
        <div className='flex justify-between items-center my-2'>
            <button className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
            onClick={()=>toggleTodoHandler(todo.id)}>
                Complete
            </button>
            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.text}
            </div>
            <button className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white 
            cursor-pointer'
            onClick={()=>removeTodoHandler(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem
