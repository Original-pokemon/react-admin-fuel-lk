import React from 'react';
import { PaperProps, } from '@mui/material';
import clsx from 'clsx';
import { ProgressBarValue } from './progress-bar-value.style';
import { ProgressBarFill } from './progress-bar-fill.style';
import { ProgressBarContainer } from './progress-bar.style';


type ProgressBarProps = {
  value: number; // Значение прогресса от 0 до 1
  label: string;
} & PaperProps;

const ProgressBar = React.memo(function ProgressBar(props: ProgressBarProps) {
  const { value, label, ...rest } = props;
  const valueInPercent = Math.round(value * 100);

  return (
    <ProgressBarContainer variant="outlined" {...rest}>
      <ProgressBarFill
        className={clsx({
          low: valueInPercent <= 30,
          medium: valueInPercent > 30 && valueInPercent <= 70,
          high: valueInPercent > 70,
        })}
        style={{ width: `${valueInPercent}%` }}
      />
      <ProgressBarValue>{label}</ProgressBarValue>
    </ProgressBarContainer>
  );
});

export { ProgressBar };