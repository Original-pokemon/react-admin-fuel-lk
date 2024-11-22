import DataList from '#root/components/layouts/data-layouts/data-list/data-list';
import { DataListItemProps } from '#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item';
import { TransactionType } from '#root/types';
import getTransactionHeaderProperties from './get-transactions-list-header';
import TransactionBody from './transactions-list-body';

type TransactionsListProperties = {
  transactions: TransactionType[];
  isLoading: boolean;
};

function TransactionsList({
  transactions,
  isLoading = false,
}: TransactionsListProperties) {
  const transactionListItems: DataListItemProps[] = transactions.map(
    (transaction) => {
      const headerProperties = getTransactionHeaderProperties(transaction);

      return {
        id: `${transaction.dt}-${transaction.cardnum}-${transaction.op}`,
        header: headerProperties,
        body: <TransactionBody transaction={transaction} />,
      };
    },
  );

  return <DataList items={transactionListItems} isLoading={isLoading} />;
}

export default TransactionsList;
