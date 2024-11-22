import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { green, red } from '@mui/material/colors';
import FuelChip from "../../fuel-chilp/fuel-chip";

export const transactionColumns: GridColDef[] = [
  {
    field: 'dt',
    headerName: 'Дата и время',
    width: 170,
  },
  { field: 'cardnum', headerName: 'Номер карты', width: 130 },
  {
    field: 'summa',
    headerName: 'Сумма',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <span style={{ color: params.row.op === -1 ? red[500] : green[500] }}>
        {params.value}
      </span>
    ),
  },
  { field: 'volume', headerName: 'Объем', width: 100 },
  {
    field: 'fuelid',
    headerName: 'Топливо',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <FuelChip fuelId={params.value} />
    ),
  },
  { field: 'price', headerName: 'Цена', width: 100 },
  {
    field: 'op',
    headerName: 'Тип операции',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <span style={{ color: params.row.op === -1 ? red[500] : green[500] }}>
        {params.value === -1 ? 'Списание' : 'Пополнение'}
      </span>

    ),
  },
  { field: 'azs', headerName: 'АЗС', width: 100 },


];
