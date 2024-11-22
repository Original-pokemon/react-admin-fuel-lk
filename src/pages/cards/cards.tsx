import { CardsStyledBox } from "./cards.style";

import Single from "#root/components/single/single";
import CardTable from "#root/components/cards/cards-table/cards-table";
import { Breadcrumbs, Link, Theme, Typography, useMediaQuery } from "@mui/material";
import { CardsList } from "#root/components/cards/cards-list/cards-list";
import { useAppDispatch, useAppSelector } from "#root/hooks/state";
import { Link as RouterLink } from "react-router-dom";
import { fetchFirmData, getFirmCards, getFirmStatus } from "#root/store";
import { useEffect } from "react";
import { AppRoute } from "#root/const";
import HomeIcon from '@mui/icons-material/Home';
import PageLayout from "#root/components/layouts/page-layout/page-layout";

const Cards = () => {
  const dispatch = useAppDispatch()
  const { isIdle, isLoading } = useAppSelector(getFirmStatus)
  const cards = useAppSelector(getFirmCards)
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isIdle) {
      dispatch(fetchFirmData())
    }
  }, [dispatch, isIdle])

  return (
    <PageLayout
      title="Карты"
      breadcrumbs={
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }} color="primary.light">
          <Link underline="hover" color="inherit" component={RouterLink} to={AppRoute.Main}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Главная
          </Link>
          <Typography color="text.primary">Карты</Typography>
        </Breadcrumbs>
      }
      content={
        <CardsStyledBox className="cards" >
          {isSmallScreen ?
            <CardsList cards={cards} isLoading={isLoading} /> :
            <CardTable cards={cards} />
          }
        </CardsStyledBox>
      }
    />


  );
};

export default Cards;
