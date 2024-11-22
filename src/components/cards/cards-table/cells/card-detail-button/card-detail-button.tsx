import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { MoreVert as MoreVertIcon, Visibility as VisibilityIcon, Receipt as ReceiptIcon, } from '@mui/icons-material';
import { createSearchParams, generatePath, redirect, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AppRoute } from '#root/const';
import { useState, MouseEvent } from 'react';

type CardDetailsButtonProps = {
  cardnum: number;
  iconSize?: number | string;
};


const CardDetailsButton = ({ cardnum, iconSize = 24 }: CardDetailsButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [_, setSearchParams] = useSearchParams()
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewDetails = () => {
    setSearchParams({ modalcardnum: cardnum.toString() })
    handleClose();
  };

  const handleViewTransactions = () => {
    const searchParams = createSearchParams({
      filterbycard: cardnum.toString()
    })
    navigate(AppRoute.Transaction + `?${searchParams.toString()}`);
    // setSearchParams({ filterbycard: cardnum.toString() })
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon sx={{ fontSize: iconSize }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleViewDetails}>
          <VisibilityIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Посмотреть детали</Typography>
        </MenuItem>
        <MenuItem onClick={handleViewTransactions}>
          <ReceiptIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Просмотреть транзакции</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardDetailsButton;
