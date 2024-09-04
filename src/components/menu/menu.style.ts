import { css } from '@emotion/react';
import { theme } from '#root/styles/theme';

export const menuStyle = css({
  '.item': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '20px',

    '.title': {
      fontSize: '16px',
      fontWeight: 400,
      color: theme.colors.mainColor,
      textTransform: 'uppercase',

      [theme.breakpoints.lg]: {
        display: 'none',
      },
    },

    '.listItem': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: theme.bg.softBg,

      '&:hover': {
        backgroundColor: theme.bg.mainBg,
      },

      '.listItemTitle': {
        [theme.breakpoints.lg]: {
          display: 'none',
        },
      },
    },
  },
});
