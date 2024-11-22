import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { MultipleChoiceType } from '../filter-elements/muliple-choice/muliple-choice';
import { SingleChoiceType } from '../filter-elements/single-choice/single-choice';
import DataDrawer from '#root/components/layouts/data-layouts/data-drawer/data-drawer';
import FilterHeaderActions from './filter-header-actions';
import { FilterTextFieldType } from '../filter-elements/filter-text-field/filter-text-field';
import useFilterContext from '../context';
import { SelectedFiltersType } from '../filter';


export type FilterElementsType = MultipleChoiceType | FilterTextFieldType | SingleChoiceType

type FilterContentProps = {
  open: boolean;
  onClose: () => void;
  children: FilterElementsType | FilterElementsType[];
};

const FilterContent = ({
  children,
  open,
  onClose,
}: FilterContentProps) => {
  const { selectedFilters, setSelectedFilters } = useFilterContext()


  const handleClearTempFilters = () => {
    setSelectedFilters({});
  };

  const hasTempSelectedFilters = Object.keys(selectedFilters).length > 0;

  return (
    <DataDrawer
      open={open}
      onClose={onClose}
      direction="left"
      maxSize="sm"
      sx={{ width: 320 }}
    >

      <DataDrawer.Header
        title="Фильтры"
        onClose={onClose}
        headerActions={
          <FilterHeaderActions
            hasTempSelectedFilters={hasTempSelectedFilters}
            onClearTempFilters={handleClearTempFilters}
          />
        }
      />

      <DataDrawer.Body>
        <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
          {children}
        </Box>
      </DataDrawer.Body>
    </DataDrawer>
  );
};

export default FilterContent;
