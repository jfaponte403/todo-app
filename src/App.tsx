import { useState } from 'react';
import { Todos } from './components/Todos.tsx';
import type { FiltersValue, Todo as TodoType, TodoId, TodoTitle } from './types.ts';
import { TODO_FILTERS } from './consts.ts';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';

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
  const [filter, setFilter] = useState<FiltersValue>(TODO_FILTERS.ALL);

  const handleRemoveAddTodo = (id: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    setTodos(updatedTodos);
  };

  const handleFilterChange = (newFilter: FiltersValue) => {
    setFilter(newFilter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ALL) return true;
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed;
    return false;
  });

  const handleAddNewTodo = ({ title }: TodoTitle) => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(), // Simple ID generation
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todoapp">
      <Header SaveTodo={handleAddNewTodo} />
      <Todos todos={filteredTodos} onRemoveTodo={handleRemoveAddTodo} onCompleted={handleCompleted} />
      <Footer
        filterSelected={filter}
        handleFilterChange={handleFilterChange}
        activeCount={activeCount}
        onClearCompleted={handleRemoveAllCompleted}
        completedCount={completedCount}
        todos={todos}
      />
    </div>
  );
}

export default App;
