import { MainMenu } from "../main-menu/main-menu";
import Navbar from "../nav-bar/nav-bar";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  Home as HomeIcon,
  CreditCard as CreditCardIcon,
  Receipt as ReceiptIcon,
  Map as MapIcon,
} from "@mui/icons-material";
import { AppRoute } from "#root/const";
import Footer from "../footer/footer";
import { LayoutStyleBox } from "./layout.style";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { getFirmCardById } from "#root/store";
import { useAppSelector } from "#root/hooks/state";
import { createPortal } from "react-dom";
import { CardModal } from "../cards/card-modal/card-modal";
import { useState } from "react";
import SideMenu from "../side-menu/side-menu";

const menu = [
  {
    id: 1,
    title: "Основное",
    listItems: [
      {
        id: 1,
        title: "Главная",
        url: AppRoute.Main,
        icon: <HomeIcon />,
      },
      {
        id: 4,
        title: "Карта АЗС",
        url: AppRoute.AzsMap,
        icon: <MapIcon />,
      },
    ],
  },
  {
    id: 2,
    title: "О картах",
    listItems: [
      {
        id: 1,
        title: "Карты",
        url: AppRoute.Cards,
        icon: <CreditCardIcon />,
      },
      {
        id: 2,
        title: "Транзакции",
        url: AppRoute.Transaction,
        icon: <ReceiptIcon />,
      },
    ],
  },
];

export const Layout = () => {
  const [searchParams] = useSearchParams()
  const cardnumber = Number(searchParams.get('modalcardnum'));
  const card = useAppSelector((state) => getFirmCardById(state, cardnumber));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSideMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <LayoutStyleBox className="main">
      <Navbar className="navbar" onMenuClick={handleMenuClick} />

      {isMobile && (
        <SideMenu open={isSideMenuOpen} onClose={handleMenuClose} menu={menu} />
      )}

      <Box className="container">
        {!isMobile && (
          <Box className="menuContainer">
            <MainMenu menu={menu} />
          </Box>
        )}
        <Box className="contentContainer">
          <Outlet />
        </Box>
      </Box>

      {card && createPortal(<CardModal card={card} />, document.body)}
      <Footer className="footer" />
    </LayoutStyleBox>
  )
}