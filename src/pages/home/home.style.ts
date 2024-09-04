import { css } from '@emotion/react';
import { theme } from '../../styles/theme';

export const homeStyle = css({
  display: 'grid',
  gap: '1.125rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: 'minmax(11.25rem, auto)',
  gridAutoFlow: 'dense',

  [theme.breakpoints.xl]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.lg]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.md]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [theme.breakpoints.sm]: {
    gridAutoRows: 'minmax(7.5rem, auto)',
  },

  '.box': {
    borderRadius: '0.625rem',
    border: ['0.125rem', 'solid', theme.bg.softBg],

    [theme.breakpoints.md]: {
      maxWidth: '26rem',
    }
  },

  '.box1': {
    gridColumn: 'span 1',
    gridRow: 'span 2',
  },

  '.box2': {
    gridColumn: 'span 1',
    gridRow: 'span 2',
  },

  '.box4': {
    gridColumn: 'span 1',
    gridRow: 'span 3',
  },

  '.box7': {
    backgroundColor: theme.bg.softBg,
    borderRadius: '0.625rem',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    padding: '1.25rem',

    [theme.breakpoints.md]: {
      display: 'none',
    },
  },
});
