import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RicloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  return TodoList.map((todo, index) => (
    <div 
    className={todo.isComplere ? 'todo-row complete' : 'todo-row'}
    key={index}
    >
    <div key={todo.id} onclick={() => completeTodo(todo.id)}>
      {todo.text}
    </div>
    <div className="icons">
      <RicloseCircleLine/>
      <TiEdit />
    </div>
  </div>
))
}

export default Todo