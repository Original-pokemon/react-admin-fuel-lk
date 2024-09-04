import { css } from '@emotion/react';
import { theme } from '#root/styles/theme';

export const footerStyle = css({
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px',
  backgroundColor: theme.bg.darkBg,

  span: {
    '&:first-of-type': {
      fontWeight: 'bold',
    },
    '&:last-of-type': {
      fontSize: '14px',
    },
  },
});
