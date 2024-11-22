import { Box } from '@mui/material';
import DataDrawer from '#root/components/layouts/data-layouts/data-drawer/data-drawer';
import type { MultipleChoiceType } from '../filter-elements/muliple-choice/muliple-choice';
import type { SingleChoiceType } from '../filter-elements/single-choice/single-choice';
import type { FilterTextFieldType } from '../filter-elements/filter-text-field/filter-text-field';
import FilterHeaderActions from './filter-header-actions';
import { useFilterContext } from '../hooks';

export type FilterElementsType =
  | MultipleChoiceType
  | FilterTextFieldType
  | SingleChoiceType;

type FilterContentProperties = {
  open: boolean;
  onClose: () => void;
  children: FilterElementsType | FilterElementsType[];
};

function FilterContent({ children, open, onClose }: FilterContentProperties) {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const handleClearTemporaryFilters = () => {
    setSelectedFilters({});
  };

  const hasTemporarySelectedFilters = Object.keys(selectedFilters).length > 0;

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
            hasTempSelectedFilters={hasTemporarySelectedFilters}
            onClearTempFilters={handleClearTemporaryFilters}
          />
        }
      />

      <DataDrawer.Body>
        <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>{children}</Box>
      </DataDrawer.Body>
    </DataDrawer>
  );
}

export default FilterContent;
