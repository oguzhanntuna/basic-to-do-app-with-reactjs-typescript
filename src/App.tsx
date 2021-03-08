import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ]);
  };

  return (
    <div className="App">
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDoList items={todos}/>
    </div>
  );
}

export default App;
