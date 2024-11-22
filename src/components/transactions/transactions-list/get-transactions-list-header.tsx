import CardAvatar from "#root/components/card-avatar/card-avatar";
import { DataListItemHeaderProps } from "#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item-header";
import { TransactionType } from "#root/types";
import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const getTransactionHeaderProps = (transaction: TransactionType): DataListItemHeaderProps => {
  const { dt, azs, cardnum } = transaction;

  const formattedDate = dayjs(dt).format('DD.MM.YYYY HH:mm:ss');


  return {
    avatar: <CardAvatar cardnum={cardnum} />,
    title: (
      <Stack direction="column" spacing={0} alignItems="flex-start">
        <Typography variant="body2">АЗС-{azs}</Typography>
        <Typography variant="caption" color="text.default">
          {formattedDate}
        </Typography>
      </Stack>
    ),
  };
};

export default getTransactionHeaderProps