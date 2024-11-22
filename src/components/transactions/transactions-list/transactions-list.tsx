import { DataList } from "#root/components/layouts/data-layouts/data-list/data-list";
import { DataListItemProps } from "#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item";
import { TransactionType } from "#root/types";
import getTransactionHeaderProps from "./get-transactions-list-header";
import TransactionBody from "./transactions-list-body";

type TransactionsListProps = {
  transactions: TransactionType[];
  isLoading?: boolean;
};

const TransactionsList = ({ transactions, isLoading = false }: TransactionsListProps) => {
  const transactionListItems: DataListItemProps[] = transactions.map((transaction) => {
    const headerProps = getTransactionHeaderProps(transaction);

    return {
      id: `${transaction.dt}-${transaction.cardnum}-${transaction.op}`,
      header: headerProps,
      body: <TransactionBody transaction={transaction} />,
    };
  });

  return (
    <DataList items={transactionListItems} isLoading={isLoading} />
  );
};

export { TransactionsList };

