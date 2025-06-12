import { CreateTodo } from './CreateTodo.tsx';
import type { TodoTitle } from '../types';

interface Props {
  SaveTodo: ({ title }: TodoTitle) => void;
}

export function Header({ SaveTodo }: Props) {
  return (
    <header className="header">
      <h1>Todos</h1>
      <p className="subtitle">A simple todo app</p>

      <CreateTodo SaveTodo={SaveTodo} />
    </header>
  );
}
