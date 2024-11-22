import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Logout,
} from '@mui/icons-material';
import Logo from "../logo/logo";
import { useAppDispatch, useAppSelector } from "#root/hooks/state";
import { getFirmName, getFirmStatus } from "#root/store/slice/firm/selectors";
import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { logout } from "#root/store";
import { fetchFirmData } from "#root/store/slice/firm/thunk";

type NavbarProps = {
  className?: string;
  onMenuClick: () => void;
};


const Navbar = ({ onMenuClick, className }: NavbarProps) => {
  const dispatch = useAppDispatch()
  const { isSuccess, isIdle } = useAppSelector(getFirmStatus)
  const firmName = useAppSelector(getFirmName)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!firmName && isIdle) {
      dispatch(fetchFirmData())
    }
  }, [dispatch, isSuccess, isIdle])

  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        )}

        {!isMobile && <Logo />}

        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="Открыть настройки пользователя">
          <IconButton color="inherit" onClick={handleOpenUserMenu}>
            <PersonIcon />
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              {isSuccess ? firmName : 'Загрузка...'}
            </Typography>
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-nav-bar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            onClick={() => {
              dispatch(logout());
              handleCloseUserMenu();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Выйти
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
