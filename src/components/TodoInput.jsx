import React from 'react'

export default function TodoInput(props) {
 const {handleAddTodos,todoValue, setTodoValue} = props
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
