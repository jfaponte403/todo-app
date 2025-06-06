import React from 'react';
import type { ListOfTodos, TodoId } from '../types';
import { Todo } from './Todo.tsx';

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;
  onCompleted: (todo: { id: TodoId; completed: boolean }) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
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
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
