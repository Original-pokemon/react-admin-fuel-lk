import { PaperProps, Typography, } from '@mui/material';
import { ProgressBar } from './progress-bar/progress-bar';
import { DataCellBoxStyled } from '../data-cell.style';

type Props = {
  limit: number;
  remain: number;
} & PaperProps

const LimitCell = ({ limit, remain, ...rest }: Props) => {
  const progress = limit > 0 ? remain / limit : 0;

  return limit ? <ProgressBar value={progress} label={`${remain} / ${limit}`} {...rest} /> : <Typography variant="body2">Не установлен</Typography>
};

export { LimitCell };
