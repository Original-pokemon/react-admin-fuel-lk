import { css } from '@emotion/react';

const buttonStyle = css({
  padding: '5px',
  cursor: 'pointer',
});

const infoStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',

  button: buttonStyle,
});

export const productsStyle = css({
  '.info': infoStyle,
});




