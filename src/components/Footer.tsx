import { Filters } from './Filters.tsx';
import type { FiltersValue, ListOfTodos } from '../types';

interface FooterProps {
  activeCount: number;
  todos: ListOfTodos;
  onClearCompleted: () => void;
  completedCount: number;
  filterSelected: FiltersValue;
  handleFilterChange: (filter: FiltersValue) => void;
}

export const Footer = ({ completedCount, activeCount, onClearCompleted, handleFilterChange }: FooterProps) => {
  return (
    <footer className="footer">
      <span>
        <strong>{activeCount.length}</strong>
      </span>

      <Filters filterSelected={} onFilterChange={() => {}} />
    </footer>
  );
};
