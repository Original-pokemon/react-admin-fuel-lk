
import { css } from '@emotion/react';
import { theme } from '../../styles/theme';

export const addStyle = css({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.724)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.modal': {
    padding: '50px',
    borderRadius: '10px',
    backgroundColor: theme.bg.mainBg,
    position: 'relative',

    h1: {
      marginBottom: '40px',
      fontSize: '24px',
      color: theme.colors.softColor,
    },

    '.close': {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },

    form: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '500px',
      justifyContent: 'space-between',

      '.item': {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',

        label: {
          fontSize: '14px',
        },

        input: {
          padding: '10px',
          backgroundColor: 'transparent',
          color: 'white',
          outline: 'none',
          border: `1px solid ${theme.colors.softColor}`,
          borderRadius: '3px',
        },
      },

      button: {
        width: '100%',
        padding: '10px',
        cursor: 'pointer',
      },
    },
  },
});
