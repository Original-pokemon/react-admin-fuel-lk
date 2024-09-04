import { css } from '@emotion/react';
import { theme } from '../../styles/theme';

export const chartBoxStyle = css({
  display: 'flex',
  height: '100%',

  [theme.breakpoints.sm]: {
    flexDirection: 'column',
  },

  '.boxInfo': {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.breakpoints.sm]: {
      gap: '20px',
    },

    '.title': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',

      [theme.breakpoints.xxl]: {
        fontSize: '14px',
      },
    },

    h1: {
      [theme.breakpoints.xxl]: {
        fontSize: '20px',
      },
    },
  },

  '.chartInfo': {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '.chart': {
      width: '100%',
      height: '100%',
    },

    '.texts': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right',

      '.percentage': {
        fontWeight: 'bold',
        fontSize: '20px',

        [theme.breakpoints.xxl]: {
          fontSize: '16px',
        },
      },

      '.duration': {
        fontSize: '14px',
      },
    },
  },
});
