import { FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { FilterOption, FilterType } from '../../filter';
import useFilterContext from '../../context';

const MultipleChoice = memo(({
  id,
  title,
  options,
}: FilterType) => {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const isSelected = event.target.checked;

    const selectedOption = options.find(option => option.value === selectedValue);

    if (selectedOption) {
      let selected = selectedFilters[id]?.options || [];

      if (isSelected) {
        selected = [...selected, selectedOption];
      } else {
        selected = selected.filter(option => option.value !== selectedValue);
      }

      if (selected.length) {
        setSelectedFilters((prev) => ({
          ...prev,
          [id]: { title, options: selected },
        }));
      } else {
        setSelectedFilters((prev) => {
          const updatedFilters = { ...prev };
          delete updatedFilters[id];
          return updatedFilters;
        });
      }
    }
  };

  const selectedOptions = selectedFilters[id]?.options || [];
  const selectedValuesSet = new Set(selectedOptions.map(option => option.value));

  return (
    <FormControl id={id} sx={{ p: 2 }}>
      <Typography variant='subtitle1'>
        {title}
      </Typography>
      <FormGroup>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Checkbox
                checked={selectedValuesSet.has(value)}
                onChange={handleChange}
              />
            }
            label={label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
});

export type MultipleChoiceType = ReturnType<typeof MultipleChoice>;

export default MultipleChoice;
