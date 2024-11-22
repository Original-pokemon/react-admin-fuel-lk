import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AppliedFilters from '../applied-filters/applied-filters';
import FilterContent, { FilterElementsType } from '../filter-content/filter-content';
import MultipleChoice from '../filter-elements/muliple-choice/muliple-choice';
import SingleChoice from '../filter-elements/single-choice/single-choice';
import FilterTextField from '../filter-elements/filter-text-field/filter-text-field';
import { FilterContext } from '../context';
import useEffectSkipMount from '../hooks';

export type FilterOption = {
  label: string;
  value: string;
};


export type FilterType = {
  id: string;
  title: string;
  options: FilterOption[];
}

export type SelectedFiltersType = {
  [key: FilterType['id']]: Omit<FilterType, 'id'>
}

type FilterProps = {
  children: FilterElementsType[];
  onChange: ({ key, value }: SelectedFiltersType) => void
};

const Filter = ({ children, onChange }: FilterProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>({});
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const hasSelectedFilters = Object.keys(selectedFilters).length > 0;

  const handleDrawerOpen = () => setDrawerOpen(true);

  const handleDrawerClose = () => setDrawerOpen(false);

  useEffectSkipMount(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      onChange(selectedFilters);
    }, 300);
  }, [selectedFilters]);



  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {/* Кнопка для открытия фильтров */}
      <Button
        variant={hasSelectedFilters ? 'contained' : 'outlined'}
        startIcon={<FilterListIcon />}
        size="small"
        onClick={handleDrawerOpen}
        aria-label="Фильтры"
      >
        {`Фильтры${hasSelectedFilters ? ` (${Object.keys(selectedFilters).length})` : ''}`}
      </Button>

      {/* Выдвижная панель с фильтрами */}
      <FilterContent
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        {children}
      </FilterContent>

      {/* Отображение выбранных фильтров */}
      <AppliedFilters />
    </FilterContext.Provider>
  );
};

Filter.SingleChoice = SingleChoice
Filter.MultipleChoice = MultipleChoice
Filter.FilterTextField = FilterTextField


export default Filter;
