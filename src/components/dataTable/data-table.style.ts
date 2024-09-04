import { css } from '@emotion/react';

export const dataTableStyle = css({
  '.dataGrid': {
    background: 'white',
    padding: '20px',

    '.MuiDataGrid-toolbarContainer': {
      flexDirection: 'row-reverse',
    },

    img: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover',
    },

    '.action': {
      display: 'flex',
      gap: '15px',

      img: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
      },
    },
  },
});
