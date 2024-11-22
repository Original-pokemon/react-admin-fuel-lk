import React, { useMemo } from 'react';
import { useAppSelector } from '#root/hooks/state';
import { getAllTransactions } from '#root/store';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const OperationSummary = () => {
  const transactions = useAppSelector(getAllTransactions);

  const { totalDebit, totalCredit, netBalance } = useMemo(() => {
    let totalDebit = 0;
    let totalCredit = 0;

    transactions.forEach((transaction) => {
      if (transaction.op === -1) {
        totalDebit += transaction.summa;
      } else if (transaction.op === 1) {
        totalCredit += transaction.summa;
      }
    });

    const netBalance = totalCredit - totalDebit;

    return { totalDebit, totalCredit, netBalance };
  }, [transactions]);

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Сумма списаний
            </Typography>
            <Typography variant="h5">₽ {totalDebit.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Сумма пополнений
            </Typography>
            <Typography variant="h5">₽ {totalCredit.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Чистый баланс
            </Typography>
            <Typography variant="h5">₽ {netBalance.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OperationSummary;
