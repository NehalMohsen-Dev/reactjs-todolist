import React, { useState } from 'react'

export default function TodoInput(props) {
 const {handleAddTodos} = props
 const [todoValue,setTodoValue]= useState('')
  return (
    <header>
      <input value={todoValue} onChange={()=>{
        setTodoValue(event.target.value)
      }} placeholder='Enter what to do ....' />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>+</button>
      
    </header>
  )
}
