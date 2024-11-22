import { DataTable } from "../../layouts/data-layouts/data-table/data-table";
import { transactionColumns } from "./transaction-сolumns";
import { mapTransactionsToRows } from "./map-transactions-to-row";
import { TransactionType } from "#root/types";
import { Box } from "@mui/material";

type TransactionsTableProps = {
  name: string;
  transactions: TransactionType[];
  isLoading?: boolean;
};


const TransactionsTable = ({ transactions, name, isLoading = false }: TransactionsTableProps) => {
  const row = mapTransactionsToRows(transactions);

  return (
    <Box className="transactions-table" bgcolor={'background.paper'} padding={2} borderRadius={'10px'}>
      <DataTable
        name={name}
        columns={transactionColumns}
        rows={row}
        loading={isLoading}
      />
    </Box>
  )
};

export default TransactionsTable;
