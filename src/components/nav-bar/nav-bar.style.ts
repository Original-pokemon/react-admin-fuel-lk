import { css } from '@emotion/react';
import { theme } from '#root/styles/theme';

export const navbarStyle = css({
  width: '100%',
  height: '4rem',
  padding: '26px',
  marginBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.bg.darkBg,
  color: theme.colors.lightColor,

  '.icons': {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',

    '.icon': {
      [theme.breakpoints.sm]: {
        display: 'none',
      },
    },

    '.notification': {
      position: 'relative',

      span: {
        backgroundColor: 'red',
        color: 'white',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
      },
    },

    '.user': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',

      img: {
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        objectFit: 'cover',
      },
    },
  },
});
