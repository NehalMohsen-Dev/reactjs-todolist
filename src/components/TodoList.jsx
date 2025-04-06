import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  const {todos,handleDeleteTodo} = props
  return (
    <ul className='main'>
      {
        todos.map((todo,todoIndex)=>{
          return (
            <TodoCard key={todoIndex} handleDeleteTodo={handleDeleteTodo}
            >
            <p>{todo}</p> 
            </TodoCard>
              )
        })
      }
      
    </ul>
  )
}
