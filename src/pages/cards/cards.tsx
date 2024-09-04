import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/data-table";
import { useAppSelector } from "../../hooks/state";
import { getCards } from "../../store/selectors";
import { productsStyle } from "./cards.style";

const columns: GridColDef[] = [
  { field: "cardNum", headerName: "Номер карты", width: 150 },
  {
    field: "cardType",
    type: "string",
    headerName: "Тип карты",
    width: 90,
  },
  {
    field: "data14",
    type: "string",
    headerName: "АИ-92",
    width: 150,
  },
  {
    field: "data15",
    type: "string",
    headerName: "АИ-95",
    width: 200,
  },
  {
    field: "data19",
    headerName: "АИ-95-PROF",
    type: "string",
    width: 200,
  },
  {
    field: "data21",
    headerName: "АИ-100-PROF",
    width: 200,
    type: "string",
  },
  {
    field: "data17",
    headerName: "ДТ",
    width: 150,
    type: "string",
  },
  {
    field: "data18",
    headerName: "ГАЗ",
    width: 150,
    type: "string",
  },
];

const Cards = () => {
  const [open, setOpen] = useState(false);
  const cards = useAppSelector(getCards);

  if (!cards) {
    return null;
  }

  return (
    <div className="cards" css={productsStyle}>
      <div className="info">
        <h1>Карты</h1>
        {/* <button onClick={() => setOpen(true)}>Add New Products</button> */}
      </div>
      <DataTable slug="cards" columns={columns} rows={cards} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
};

export default Cards;
