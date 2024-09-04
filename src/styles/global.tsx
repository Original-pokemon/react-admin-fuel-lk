import { css, Global } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '.main': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Inter, sans-serif',
    backgroundColor: theme.bg.mainBg,
    color: theme.colors.mainColor,
  },
  '.container': {
    flex: '1 0 auto',
    display: 'flex',
    marginBottom: '2rem',
  },
  '.menuContainer': {
    width: '250px',
    padding: '20px',
    borderRight: `2px solid ${theme.bg.softBg}`,
    borderRadius: '10px',
    backgroundColor: theme.bg.softBg,
    color: theme.colors.mainColor,
    [theme.breakpoints.lg]: {
      width: 'max-content',
    },
  },
  '.contentContainer': {
    flex: 1,
    padding: '0 2rem',
    width: '100%',
    backgroundColor: theme.bg.mainBg,
  },
});

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
