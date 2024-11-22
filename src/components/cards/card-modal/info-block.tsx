// InfoBlock.tsx
import React from 'react';
import { Box, Typography, Grid2, Divider, SxProps, Theme } from '@mui/material';

type InfoRowData = {
  label: React.ReactNode;
  value: React.ReactNode;
};

type InfoBlockProps = {
  title?: React.ReactNode;
  rows: InfoRowData[];
  direction?: 'row' | 'column';
  borderBetweenColumns?: boolean;
  borderBetweenRows?: boolean;
  sx?: SxProps<Theme>;
};

const InfoBlock = ({
  title,
  rows,
  direction = 'row',
  borderBetweenRows = false,
  borderBetweenColumns = false,
  sx,
}: InfoBlockProps) => {


  return (
    <>
      {title && (
        <Typography variant="h6" color="text.default" gutterBottom sx={{ p: 2 }}>
          {title}
        </Typography>
      )}

      <Grid2
        container
        columns={2}
        direction={"row"}
        wrap="wrap"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '14px',
          ...sx,
        }}
      >

        {rows.map((row, index, arr) => (
          <Grid2
            container
            direction={direction}
            size={direction === 'row' ? 2 : 1}
            columns={direction === 'row' ? 2 : 1}
            alignItems="center"
            key={index}
            sx={{
              borderBottom: (borderBetweenRows && direction === 'row' && index !== arr.length - 1) ? '1px solid' : undefined,
              borderRight: (borderBetweenColumns && direction === 'column' && index !== arr.length - 1) ? '1px solid' : undefined,
              borderColor: 'divider'
            }}>
            <Grid2
              size={1}
              p={2}
              sx={{
                borderRight: (borderBetweenColumns && direction === 'row') ? '1px solid' : undefined,
                borderBottom: (borderBetweenRows && direction === 'column') ? '1px solid' : undefined,
                borderColor: 'divider'
              }}
            >
              {row.label}
            </Grid2 >
            <Grid2
              size={1}
              p={2}
            >
              {row.value}
            </Grid2 >
          </Grid2 >
        ))}
      </Grid2  >
    </>
  );
};

export default InfoBlock;
