import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
   if (!todo.text ||/ˆ\s*$/.test(todo.text)){
    return;
   }
      
    const newTodos = [todo, ...todos];
    
    setTodos(newTodos);
  };

  const completeTodo = id => {
    let updatedTodosm


  }

  return (
    <div>
        <h1>Lista de Tarefas</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList