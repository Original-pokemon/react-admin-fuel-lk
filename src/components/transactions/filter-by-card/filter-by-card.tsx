import React, { useState } from 'react';
import { Button, TextField, Popover, Box, Typography } from '@mui/material';
import { Clear as ClearIcon } from "@mui/icons-material"

type FilterByCardProps = {
  label: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

const FilterByCard = ({ label, defaultValue, onChange }: FilterByCardProps) => {
  const [filterValue, setFilterValue] = useState(defaultValue || '');

  return (
    <TextField
      fullWidth
      label="Номер карты"
      variant="outlined"
      size="small"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
    />
  );
};

export default FilterByCard;
