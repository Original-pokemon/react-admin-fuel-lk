import styled from '@emotion/styled';
import { css, Theme, } from '@mui/material';

export const topBoxStyle = styled.div(({ theme }) => ({
  h1: {
    marginBottom: '20px',

    [theme.breakpoints.xxl]: {
      fontSize: '24px',
    },
  },

  '.list': {
    '.listItem': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '30px',

      '.user': {
        display: 'flex',
        gap: '20px',

        img: {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover',

          [theme.breakpoints.xxl]: {
            display: 'none',
          },
          [theme.breakpoints.lg]: {
            display: 'block',
          },
        },

        '.userTexts': {
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',

          '.username': {
            fontSize: '14px',
            fontWeight: 500,
          },
          '.email': {
            fontSize: '12px',

            [theme.breakpoints.xxl]: {
              display: 'none',
            },
            [theme.breakpoints.lg]: {
              display: 'block',
            },
          },
        },
      },

      '.amount': {
        fontWeight: 500,
      },
    },
  },
}));
