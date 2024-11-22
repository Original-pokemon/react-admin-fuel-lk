import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../../components/layouts/data-layouts/data-table/data-table";
import { useAppSelector } from "../../hooks/state";

const columns: GridColDef[] = [
  { field: "code", headerName: "Код", width: 100 },
  { field: "contragentname", headerName: "Контрагент", width: 200 },
  { field: "fuelname", headerName: "Тип топлива", width: 200 },
  { field: "remain", headerName: "Остаток", width: 150 },
  { field: "dcode", headerName: "Код договора", width: 150 },
  { field: "dname", headerName: "Наименование договора", width: 200 },
  { field: "dtipcen", headerName: "Тип цены", width: 150 },
];

function Contracts() {
  const contracts = useAppSelector(getContracts);

  if (!contracts) {
    return null;
  }

  return (
    <div className="contracts">
      <div className="info">
        <h1>Контракты</h1>
        {/* <button onClick={() => setOpen(true)}>Add New Contracts</button> */}
      </div>
      <DataTable slug="contracts" columns={columns} rows={contracts} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="contracts" columns={columns} rows={data} />
      )} */}
      {/* {open && <Add slug="contracts" columns={columns} setOpen={setOpen} />} */}
    </div>
  );
}

export default Contracts;
