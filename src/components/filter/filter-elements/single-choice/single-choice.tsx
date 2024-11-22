import { FormControlLabel, RadioGroup, Radio, FormControl, FormLabel, Typography } from '@mui/material';
import { useState, memo } from 'react';
import { FilterOption, FilterType } from '../../filter';
import useFilterContext from '../../context';
import useEffectSkipMount from '../../hooks';
import React from 'react';

type SingleChoiceComponentProps = FilterType & {
  defaultValue: string;
};

const SingleChoice = memo(({
  id,
  title,
  options,
  defaultValue
}: SingleChoiceComponentProps) => {
  const { selectedFilters, setSelectedFilters } = useFilterContext()
  const selected = selectedFilters[id]?.options[0]?.value || defaultValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    const selectedOption = options.find(option => option.value === selectedValue);

    if (selectedOption) {
      setSelectedFilters((prev) => ({
        ...prev,
        [id]: { title, options: [{ label: selectedOption.label, value: selectedOption.value }] },
      }));
    }
  };

  return (
    <FormControl id={id} sx={{ p: 2 }}>
      <Typography variant='subtitle1'>
        {title}
      </Typography >
      <RadioGroup value={selected} onChange={handleChange}>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>


  )
})

export type SingleChoiceType = ReturnType<typeof SingleChoice>;

export default SingleChoice