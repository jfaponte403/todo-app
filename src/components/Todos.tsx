import React from 'react';
import type { ListOfTodos, TodoId } from '../types';
import { Todo } from './Todo.tsx';

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            onRemoveTodo={onRemoveTodo}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};
