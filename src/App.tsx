import { useState } from 'react';
import { Todos } from './components/Todos.tsx';
import type { Todo as TodoType, TodoId } from './types.ts';

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

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleAddTodo} onCompleted={handleCompleted} />
    </div>
  );
}

export default App;
