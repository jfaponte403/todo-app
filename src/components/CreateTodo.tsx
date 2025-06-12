import React, { useState } from 'react';
import type { TodoTitle } from '../types';

interface Props {
  SaveTodo: ({ title }: TodoTitle) => void;
}

export function CreateTodo({ SaveTodo }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SaveTodo({ title: inputValue });
    setInputValue(''); // Clear the input after saving
  };

  return (
    <form className="header__form" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
      />
      <button className="header__button" type="submit">
        Add Todo
      </button>
    </form>
  );
}
