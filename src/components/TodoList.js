import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {

  }

  return (
    <div>
        <h1>Lista de Tarefas</h1>
        <TodoForm />
    </div>
  );
}

export default TodoList