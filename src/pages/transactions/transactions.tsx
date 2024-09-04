import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/data-table";
import Add from "../../components/add/Add";
import generateRandomTransaction from "../../mock/card-transaction";
import { transactionsStyle } from "./transactions.style";
// import { useQuery } from "@tanstack/react-query";

const transactions = Array.from({ length: 50 }, generateRandomTransaction);

const columns: GridColDef[] = [
  { field: "dt", headerName: "Дата", width: 250 },
  {
    field: "card",
    headerName: "Карта",
    width: 250,
  },
  {
    field: "azs",
    type: "string",
    headerName: "АЗС",
    width: 150,
  },
  {
    field: "fuel",
    type: "string",
    headerName: "Вид топлива",
    width: 110,
  },
  {
    field: "volume",
    type: "number",
    headerName: "Объем",
    width: 90,
  },
  {
    field: "price",
    type: "number",
    headerName: "Цена",
    width: 90,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="transactions" css={transactionsStyle}>
      <div className="info">
        <h1>Транзакции</h1>
      </div>
      <DataTable slug="transactions" columns={columns} rows={transactions} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
