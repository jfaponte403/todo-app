import { useState } from 'react';
import { Todos } from './components/Todos.tsx';
import type { TodoId } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: false,
  },
  {
    id: '2',
    title: 'Build a Todo App',
    completed: false,
  },
  {
    id: '3',
    title: 'Deploy the App',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleAddTodo = (id: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleAddTodo} />
    </div>
  );
}

export default App;
