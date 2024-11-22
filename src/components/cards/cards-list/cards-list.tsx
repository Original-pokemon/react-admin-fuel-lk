import { CardType } from "#root/types";
import { Stack, Divider, Typography, Avatar, Chip, Grid2 } from "@mui/material";
import { LimitCell } from "../cards-table/cells/limit-cell/limit-cell";
import { DateCell } from "../cards-table/cells/date-cell/date-cell";
import WalletTypeCell from "../cards-table/cells/wallet-type-cell/wallet-type-cell";
import StatusCell from "../cards-table/cells/status-cell/status-cell";
import { DataListItemProps } from "#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item";
import { DataList } from "#root/components/layouts/data-layouts/data-list/data-list";
import getCardHeaderProps from "./get-header";

const getCardBodyElement = ({ cardowner, datelastop, wallettype, blocked, dayremain, daylimit, monthremain, monthlimit }: CardType): React.ReactElement => (
  <Grid2 container spacing={2} >

    {/* Owner and Last Operation */}
    <Grid2 size={12} container columnSpacing={1} rowSpacing={1}>

      {cardowner.trim() && (
        <Grid2 size={12}>
          <Typography variant="caption" color="main.light">Владелец карты:</Typography>
          <Typography variant="subtitle2">{cardowner}</Typography>
        </Grid2>
      )}

      <Grid2 size={12}>
        <Typography variant="caption" color="main.light">Последняя операция:</Typography>
        <DateCell value={datelastop} flexDirection="row" backgroundColor="#ffff" variant="outlined" />
      </Grid2>

      <Grid2 size={6}>
        <Typography variant="caption" color="main.light">Тип кошелька:</Typography>
        <WalletTypeCell value={wallettype} />
      </Grid2>

      <Grid2 size={6}>
        <Typography variant="caption" color="main.light">Статус:</Typography>
        <StatusCell value={blocked} />
      </Grid2>

    </Grid2>

    <Grid2 size={12}>
      <Divider />
    </Grid2>

    {/* Day and Month Limits */}
    <Grid2 container size={12} spacing={2}>

      <Grid2 size={6}>
        <Typography variant="caption" color="main.light">Дневной:</Typography>
        <LimitCell limit={daylimit} remain={dayremain} />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="caption" color="main.light">Месячный:</Typography>
        <LimitCell limit={monthlimit} remain={monthremain} />
      </Grid2>
    </Grid2>

  </Grid2>
);

type CardListProps = {
  cards: CardType[]
  isLoading: boolean
}

const CardsList = ({ cards, isLoading }: CardListProps) => {
  const cardListItems: DataListItemProps[] = cards.map((card) => {
    const bodyElement = getCardBodyElement(card)
    const headerElement = getCardHeaderProps(card)

    return {
      id: card.cardnum.toString(),
      header: headerElement,
      body: bodyElement,
    }
  })


  return (
    <DataList items={cardListItems} isLoading={isLoading} />
  )
}

export { CardsList }