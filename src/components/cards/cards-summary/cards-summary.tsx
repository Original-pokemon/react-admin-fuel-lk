// components/CardsSummary.tsx
import React, { useMemo } from 'react';
import { useAppSelector } from '#root/hooks/state';
import { getFirmCards } from '#root/store'; // Предполагается, что вы получаете карты из Redux
import { Grid, Card, CardContent, Typography } from '@mui/material';

const CardsSummary = () => {
  const cards = useAppSelector(getFirmCards);

  const { totalCards, activeCards, blockedCards, totalFuelVolume } = useMemo(() => {
    const totalCards = cards.length;
    const blockedCards = cards.filter((card) => card.blocked).length;
    const activeCards = totalCards - blockedCards;

    // Общий объем доступного топлива по всем картам
    let totalFuelVolume = 0;
    cards.forEach((card) => {
      card.fuels.forEach((fuel) => {
        totalFuelVolume += fuel.volume;
      });
    });

    return { totalCards, activeCards, blockedCards, totalFuelVolume };
  }, [cards]);

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Общее количество карт
            </Typography>
            <Typography variant="h5">{totalCards}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Активные карты
            </Typography>
            <Typography variant="h5">{activeCards}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Заблокированные карты
            </Typography>
            <Typography variant="h5">{blockedCards}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Общий объем топлива (л)
            </Typography>
            <Typography variant="h5">{totalFuelVolume.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardsSummary;
