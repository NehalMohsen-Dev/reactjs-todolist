import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodo,index} = props;
  return (
    <li  className='todoItem'>
    {children}
    <div className="actionsContainer">
        <i class="fa-solid fa-pen-to-square"></i>
        <button onClick={()=>{
          handleDeleteTodo(index)
        }}>
        <i class="fa-solid fa-trash"></i>
        </button>
    </div>
  </li>

  )
}
