import { ReactElement } from 'react';
import {
  CardHeader,
  Typography,
  Avatar,
} from '@mui/material';

export type DataListItemHeaderProps = {
  title?: ReactElement;
  subTitle?: ReactElement;
  avatar?: ReactElement;
  action?: ReactElement;
};

const DataListItemHeader = ({
  title,
  subTitle,
  avatar,
  action
}: DataListItemHeaderProps) => {
  return (
    <CardHeader
      avatar={avatar}
      action={action}
      title={title && title}
      subheader={subTitle && subTitle}
    />
  );
};

export { DataListItemHeader };
