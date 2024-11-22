import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '#root/hooks/state';
import {
  getFirmCards,
  getFirmInfo,
  getFirmStatus,
} from '#root/store/slice/firm/selectors';
import Spinner from '#root/components/spinner/spinner';
import FirmCashDisplay from '#root/components/boxes/firm-cash/firm-cash';
import { fetchFirmData } from '#root/store/slice/firm/thunk';
import FirmWalletDisplay from '#root/components/boxes/firm-wallet/firm-wallet';
import CardsSummary from '#root/components/boxes/firm-cards/firm-cards';
import ContactsBox from '#root/components/boxes/contacts-box/contacts-box';
import AppRoute from '#root/const/app-route';
import HomeStyledBox from './home.style';
import ODINTSOVO_COORD from '../../const/map';
import { prepareMarkers } from '../../utils/markers';
import mapInfo from '../../mock/map-info';
import Map from '../../components/map/map';

const mapConfig = {
  center: ODINTSOVO_COORD,
  keyboard: false,
  dragging: false,
  attributionControl: false,
  zoomConfig: {
    zoom: 9,
    scrollWheelZoom: false,
    zoomControl: false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
  },
  style: { height: '100%' },
};
const markers = prepareMarkers(mapInfo);

// Выводить критичную информацию, у каких карт низкий баланк, какие карты заблокированы и т.д.

function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isIdle, isLoading } = useAppSelector(getFirmStatus);
  const firmInfo = useAppSelector(getFirmInfo);
  const cards = useAppSelector(getFirmCards);
  const isLoaded = isSuccess && firmInfo;

  useEffect(() => {
    if (!firmInfo && isIdle) {
      dispatch(fetchFirmData());
    }
  }, [dispatch, firmInfo, isIdle]);

  if (isLoading) {
    return <Spinner fullscreen />;
  }

  return (
    isLoaded && (
      <HomeStyledBox className="home">
        <Box className="box box1">
          <FirmCashDisplay firmCash={firmInfo.firmcash} />
        </Box>
        <Box className="box box2">
          <FirmWalletDisplay fuelWallet={firmInfo.firmwallet} />
          {/* <CardsBox /> */}
        </Box>
        <Box className="box box3">
          <CardsSummary cards={cards} />
          {/* <BalanceBox /> */}
        </Box>
        <Box className="box box4">
          <ContactsBox />
        </Box>
        <Box
          style={{ cursor: 'pointer' }}
          className="box box7"
          onClick={() => {
            navigate(AppRoute.AzsMap);
          }}
        >
          <Map mapConfig={{ ...mapConfig }} markers={markers} />
        </Box>
      </HomeStyledBox>
    )
  );
}

export default Home;
