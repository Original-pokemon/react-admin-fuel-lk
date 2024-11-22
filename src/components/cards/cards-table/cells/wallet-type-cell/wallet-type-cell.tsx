import { theme } from '#root/styles/theme';
import { WalletTypeBoxStyled } from './wallet-type-cell.style';

const walletTypeNames: { [key: number]: string } = {
  1: 'Топливная',
  2: 'Сервисная',
  3: 'Комбинированная',
};

const walletTypeColors: { [key: number]: string } = {
  1: theme.palette.primary.main,
  2: theme.palette.secondary.main,
  3: theme.palette.success.light,
};

const WalletTypeCell = ({ value }: { value: number }) => {
  const walletTypeName = walletTypeNames[value] || 'Неизвестный тип';
  const color = walletTypeColors[value] || 'default';

  return <WalletTypeBoxStyled variant="outlined" sx={{ fontWeight: 600 }} backgroundColor={color as any}>{walletTypeName} </WalletTypeBoxStyled>;
};

export default WalletTypeCell;
