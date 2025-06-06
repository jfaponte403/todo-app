import React from 'react';
import type { Todo as TodoType, TodoId } from '../types';

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void;
  onCompleted: (todo: { id: TodoId; completed: boolean }) => void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleted }) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(event) => {
          onCompleted({ id, completed: event.target.checked });
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id);
        }}
      />
    </div>
  );
};
