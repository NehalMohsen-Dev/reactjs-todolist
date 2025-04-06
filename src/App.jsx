import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  const [todos,setTodos]= useState(
    [
     
    ]
  )
  const [todoValue,setTodoValue]= useState('')

  function persistData (newTodos){
    localStorage.setItem('todos', JSON.stringify({todos: newTodos}))
  }
  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todos,todoIndex) =>{
      return todoIndex !== index
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleEditTodo(index){
    const valueToBeEdited=todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
    
  }

  useEffect(()=> {
    if(!localStorage){
      return;
    }
    
    let storedTodos = localStorage.getItem('todos');
    if(!storedTodos){
      return;
    }
   
    storedTodos =JSON.parse(storedTodos).todos;
    setTodos(storedTodos);

  },[])
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} setTodoValue={setTodoValue} todoValue={todoValue}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
  }

export default App
