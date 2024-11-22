import React from 'react';
import { Box, Chip, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FilterType } from '../filter';
import useFilterContext from '../context';


const AppliedFilters = () => {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const hasSelectedFilters = Object.keys(selectedFilters).length > 0;

  if (!hasSelectedFilters) return null;

  const handleDeleteFilter = (categoryId: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const options = updatedFilters[categoryId]?.options.filter(
        (option) => option.value !== value
      );

      if (options && options.length > 0) {
        updatedFilters[categoryId] = { ...updatedFilters[categoryId], options };
      } else {
        delete updatedFilters[categoryId];
      }

      return updatedFilters;
    });
  };

  const handleClearAll = () => {
    setSelectedFilters({});
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
      {Object.entries(selectedFilters).map(([categoryId, { title, options }]) => (
        options.map(({ value, label }) => (
          <Chip
            key={`${title}-${value}`}
            label={`${title}: ${label}`}
            onDelete={() => handleDeleteFilter(categoryId, value)}
          />
        ))
      ))}

      {/* Кнопка для очистки всех фильтров */}
      <Button
        startIcon={<DeleteIcon />}
        color="error"
        onClick={handleClearAll}
        sx={{ ml: 2 }}
      >
        Очистить
      </Button>
    </Box>
  );
};

export default AppliedFilters;
