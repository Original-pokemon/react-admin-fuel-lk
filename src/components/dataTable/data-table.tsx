import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { dataTableStyle } from "./data-table.style";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Properties = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (properties: Properties) => {
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number) => {
    // delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (parameters) => {
      return (
        <div className="action">
          <Link to={`/${properties.slug}/${parameters.row.id}`}>
          </Link>
          <div
            className="delete"
            onClick={() => handleDelete(parameters.row.id)}
          >
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable" css={dataTableStyle}>
      <DataGrid
        className="dataGrid"
        rows={properties.rows}
        columns={[...properties.columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: false,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
        // disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
