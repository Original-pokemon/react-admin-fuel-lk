// details-row.tsx
import { Grid, Typography, Stack } from '@mui/material';

type DetailsRowProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  direction?: 'row' | 'column';
};

export const DetailsRow: React.FC<DetailsRowProps> = ({ label, value, direction = 'row' }) => (
  <Stack direction={direction} spacing={1} alignItems="center">
    {typeof label === 'string' ? (
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
    ) : (
      label
    )}
    {value}
  </Stack>
);
