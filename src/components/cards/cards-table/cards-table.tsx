import { DataTable } from "#root/components/layouts/data-layouts/data-table/data-table"
import { useAppSelector } from "#root/hooks/state";
import { getFirmStatus } from "#root/store";
import { useMediaQuery, useTheme } from "@mui/material";
import { cardsColumns } from "./cards-columns"
import { useEffect } from "react";
import { Spinner } from "#root/components/spinner/spinner";
import { CardType } from "#root/types";

type CardsTable = {
  cards: CardType[]
}

const CardTable = ({ cards }: CardsTable) => {
  const { isIdle, isLoading, isError, isSuccess } = useAppSelector(getFirmStatus);

  const rows = cards.map((card) => ({
    id: card.cardnum,
    cardnum: card.cardnum,
    cardowner: card.cardowner,
    blocked: card.blocked,
    wallettype: card.wallettype,
    monthlimit: card.monthlimit,
    monthremain: card.monthremain,
    daylimit: card.daylimit,
    dayremain: card.dayremain,
    datedaylimit: card.datedaylimit,
    datelastop: new Date(card.datelastop),
  }));

  if (isIdle) {
    return <Spinner fullscreen />
  }

  if (isError) {
    return <div>Ошибка при загрузке данных по картам</div>;
  }

  if (!cards.length && isSuccess) {
    return <div>Нет данных по картам</div>;
  }


  return <DataTable
    name="cards"
    columns={cardsColumns}
    rows={rows}
    loading={isLoading}
  />
}


export default CardTable