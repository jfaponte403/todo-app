import type { FiltersValue } from '../types';
import { FILTERS_BUTTONS } from '../consts.ts';

interface Props {
  filterSelected: FiltersValue;
  onFilterChange: (filter: FiltersValue) => void;
}

export function Filters({ filterSelected, onFilterChange }: Props) {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? 'selected' : '';

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(key as FiltersValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
