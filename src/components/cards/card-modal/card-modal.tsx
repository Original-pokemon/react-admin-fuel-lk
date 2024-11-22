import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '#root/hooks/state';
import { fetchFirmData, getFirmCardById } from '#root/store';
import {
  Typography,
  Stack,
  Avatar,
} from '@mui/material';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DataModal } from '#root/components/layouts/data-layouts/data-modal/data-modal';
import { LimitCell } from '../cards-table/cells/limit-cell/limit-cell';
import { DateCell } from '../cards-table/cells/date-cell/date-cell';
import WalletTypeCell from '../cards-table/cells/wallet-type-cell/wallet-type-cell';
import StatusCell from '../cards-table/cells/status-cell/status-cell';
import { AppRoute } from '#root/const';
import FuelChip from '#root/components/fuel-chilp/fuel-chip';
import InfoBlock from './info-block';
import { CardType } from '#root/types';

type CardModaProps = {
  card: CardType
}

const CardModal = ({ card }: CardModaProps) => {
  const [_, setSearchParams] = useSearchParams()

  const handleClose = () => {
    setSearchParams((prevValue) => {
      prevValue.delete('modalcardnum');

      return prevValue
    })
  };

  return (
    <DataModal
      open={true}
      onClose={handleClose}
      title={
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          bgcolor='background.default'
          borderRadius={1}
          p={1}
          gap={1}
        >
          <Avatar
            sx={{ bgcolor: 'primary.main', width: '2.8rem', height: '1.8rem', borderRadius: '0.28rem', }}
            variant="rounded"
            src="/images/card.png"
          />
          <Typography variant="h6">{card.cardnum}</Typography>
        </Stack>
      }
    >
      <Stack spacing={2} sx={{ p: 2 }}>

        {/* Детали карты */}
        <InfoBlock
          title="Детали карты"
          rows={[
            {
              label: 'Владелец карты',
              value: <Typography variant="body1">{card.cardowner}</Typography>,
            },
            {
              label: 'Статус',
              value: <StatusCell value={card.blocked} />,
            },
            {
              label: 'Последняя операция',
              value: <DateCell value={card.datelastop} />,
            },
            {
              label: 'Тип кошелька',
              value: <WalletTypeCell value={card.wallettype} />,
            },
          ]}
          direction="row"
          borderBetweenRows
          borderBetweenColumns
        />

        {/* Лимиты */}
        <InfoBlock
          title="Лимиты"
          rows={[
            {
              label: 'Дневной лимит',
              value: <LimitCell limit={card.daylimit} remain={card.dayremain} />,
            },
            {
              label: 'Месячный лимит',
              value: (
                <LimitCell limit={card.monthlimit} remain={card.monthremain} />
              ),
            },
          ]}
          direction="column"
          borderBetweenColumns
          borderBetweenRows
        />


        {/* Секция доступного топлива */}
        <InfoBlock
          title="Доступное топливо"
          rows={
            card.fuels && card.fuels.length > 0
              ? card.fuels.map((fuel) => ({
                label: <FuelChip fuelId={fuel.fuelid} />,
                value: (
                  <Typography variant="body1">{fuel.volume}</Typography>
                ),
              }))
              : [
                {
                  label: '',
                  value: (
                    <Typography variant="body1">
                      Нет доступного топлива
                    </Typography>
                  ),
                },
              ]
          }

          direction="row"
          borderBetweenColumns
          borderBetweenRows
        />

      </Stack>
    </DataModal>
  )
};

export { CardModal };
