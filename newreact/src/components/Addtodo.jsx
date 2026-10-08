import React, {useState} from 'react'
import Todolist from './Todolist'

const Addtodo = () => {
    const [todos, setTodos] = useState([])
  return (
    <div>
      <input type="text" name="" id="" />
      <button>Add</button>
      <Todolist todos={todos}/>
    </div>
  )
}

export default Addtodo
