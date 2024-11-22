import { getFormattedCardNumber } from "#root/utils/get-formatted-card-number";
import { Avatar, Stack, Typography } from "@mui/material";

const CardAvatar = ({ cardnum }: { cardnum: number }) => (<Stack
  direction="row"
  alignItems="center"
  spacing={1}
  bgcolor='background.default'
  borderRadius={1}
  p={1}
  gap={1}
>
  <Avatar
    sx={{
      bgcolor: 'primary.main',
      width: '2.8rem',
      height: '1.8rem',
      borderRadius: '0.28rem',
    }}
    variant="rounded"
    src="/images/card.png"
  />
  <Typography variant="subtitle2" sx={{ fontWeight: 600, letterSpacing: '0.1rem', fontFamily: 'monospace', textAlign: 'center' }}>{getFormattedCardNumber(cardnum.toString())}</Typography>
</Stack>
)

export default CardAvatar