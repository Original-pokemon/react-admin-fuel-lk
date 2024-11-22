// components/AzsSummary.tsx
import React, { useMemo } from 'react';
import { useAppSelector } from '#root/hooks/state';
import { getAllTransactions } from '#root/store';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type AzsData = {
  azs: number;
  totalVolume: number;
  totalSumma: number;
  transactionCount: number;
};

const AzsSummary = () => {
  const transactions = useAppSelector(getAllTransactions);

  const azsData = useMemo(() => {
    const data: { [key: number]: AzsData } = {};

    transactions.forEach((transaction) => {
      const azs = transaction.azs;

      if (!data[azs]) {
        data[azs] = {
          azs,
          totalVolume: 0,
          totalSumma: 0,
          transactionCount: 0,
        };
      }

      data[azs].totalVolume += transaction.volume;
      data[azs].totalSumma += transaction.summa;
      data[azs].transactionCount += 1;
    });

    return Object.values(data).sort((a, b) => b.totalSumma - a.totalSumma);
  }, [transactions]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>АЗС</TableCell>
          <TableCell align="right">Количество транзакций</TableCell>
          <TableCell align="right">Объем (л)</TableCell>
          <TableCell align="right">Сумма (₽)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {azsData.map((azs) => (
          <TableRow key={azs.azs}>
            <TableCell>{azs.azs}</TableCell>
            <TableCell align="right">{azs.transactionCount}</TableCell>
            <TableCell align="right">{azs.totalVolume.toFixed(2)}</TableCell>
            <TableCell align="right">₽ {azs.totalSumma.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AzsSummary;
