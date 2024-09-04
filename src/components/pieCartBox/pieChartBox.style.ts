import { css } from '@emotion/react';
import { theme } from '#root/styles/theme';

export const pieChartBoxStyle = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    [theme.breakpoints.xxl]: {
      fontSize: '24px',
    },
  },

  '.chart': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  '.options': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    fontSize: '14px',

    '.option': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',

      '.title': {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',

        '.dot': {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
        },
      },
    },
  },
});
