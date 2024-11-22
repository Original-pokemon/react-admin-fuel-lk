import { GridColDef } from '@mui/x-data-grid';
import CardDetailsButton from './cells/card-detail-button/card-detail-button';
import { DateCell } from './cells/date-cell/date-cell';
import LimitCell from './cells/limit-cell/limit-cell';
import StatusCell from './cells/status-cell/status-cell';
import WalletTypeCell from './cells/wallet-type-cell/wallet-type-cell';

const cardsColumns: GridColDef[] = [
  {
    field: 'cardnum',
    headerName: 'Номер карты',
    display: 'flex',
    align: 'center',
    type: 'string',
    hideable: false,
  },
  {
    field: 'cardowner',
    headerName: 'Владелец карты',
    type: 'string',
    display: 'flex',
    align: 'center',
    valueFormatter: (value: string) => value.trim() || 'Не указано',
  },
  {
    field: 'wallettype',
    headerName: 'Тип карты',
    display: 'flex',
    align: 'center',
    type: 'custom',
    renderCell: (parameters) => <WalletTypeCell value={parameters.value} />,
  },
  {
    field: 'blocked',
    headerName: 'Статус',
    display: 'flex',
    align: 'center',
    type: 'custom',
    renderCell: (parameters) => <StatusCell value={parameters.value} />,
  },
  {
    field: 'dayLimitInfo',
    headerName: 'Дневной лимит',
    sortable: false,
    display: 'flex',
    align: 'center',
    type: 'custom',
    valueFormatter: (_value, row) => `${row.dayremain} / ${row.daylimit}`,
    renderCell: ({ row }) => (
      <LimitCell limit={row.daylimit} remain={row.dayremain} />
    ),
  },
  {
    field: 'monthLimitInfo',
    headerName: 'Месячный лимит',
    sortable: false,
    display: 'flex',
    align: 'center',
    type: 'custom',
    valueFormatter: (_value, row) => `${row.monthremain} / ${row.monthlimit}`,
    renderCell: ({ row }) => (
      <LimitCell limit={row.monthlimit} remain={row.monthremain} />
    ),
  },
  {
    field: 'datelastop',
    headerName: 'Последняя операция',
    display: 'flex',
    align: 'center',
    type: 'custom',
    renderCell: (parameters) => (
      <DateCell variant="outlined" value={parameters.value} />
    ),
  },
  {
    field: 'details',
    type: 'actions',
    getActions: (parameters) => [
      <CardDetailsButton
        key={parameters.row.cardnum}
        cardnum={parameters.row.cardnum}
      />,
    ],
  },
];

export default cardsColumns;
