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

export const Footer = ({
  filterSelected,
  activeCount,
  handleFilterChange,
  onClearCompleted,
  completedCount,
}: FooterProps) => {
  return (
    <footer className="footer">
      <span className="view">
        <strong> {activeCount} </strong>
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Delete all
        </button>
      )}
    </footer>
  );
};
