// components/FuelSummary.tsx
import React, { useMemo } from 'react';
import { useAppSelector } from '#root/hooks/state';
import { getFirmCards, getNomenclatureInfo } from '#root/store';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type FuelData = {
  fuelId: number;
  fuelName: string;
  totalVolume: number;
  cardCount: number;
};

const FuelSummary = () => {
  const cards = useAppSelector(getFirmCards);
  const nomenclature = useAppSelector(getNomenclatureInfo);

  const fuelData = useMemo(() => {
    const data: { [key: number]: FuelData } = {};

    cards.forEach((card) => {
      card.fuels.forEach((fuel) => {
        const fuelId = fuel.fuelid;
        const fuelName = nomenclature?.find((n) => n.fuelid === fuelId)?.fuelname || 'Неизвестно';

        if (!data[fuelId]) {
          data[fuelId] = {
            fuelId,
            fuelName,
            totalVolume: 0,
            cardCount: 0,
          };
        }

        data[fuelId].totalVolume += fuel.volume;
      });
    });

    // Подсчитываем количество карт, на которых доступно определенное топливо
    Object.values(data).forEach((fuel) => {
      fuel.cardCount = cards.filter((card) =>
        card.fuels.some((f) => f.fuelid === fuel.fuelId)
      ).length;
    });

    return Object.values(data);
  }, [cards, nomenclature]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Вид топлива</TableCell>
          <TableCell align="right">Общий объем (л)</TableCell>
          <TableCell align="right">Количество карт</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fuelData.map((fuel) => (
          <TableRow key={fuel.fuelId}>
            <TableCell>{fuel.fuelName}</TableCell>
            <TableCell align="right">{fuel.totalVolume.toFixed(2)}</TableCell>
            <TableCell align="right">{fuel.cardCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FuelSummary;
