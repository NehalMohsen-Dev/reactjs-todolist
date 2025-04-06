import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodo,key} = props;
  return (
    <li  className='todoItem'>
    {children}
    <div className="actionsContainer">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash" onClick={()=>{
          handleDeleteTodo(key)
        }}></i>
    </div>
  </li>

  )
}
