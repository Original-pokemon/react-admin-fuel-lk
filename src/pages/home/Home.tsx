import FuelBox from "../../components/boxes/fuel-box/fuel-box";
import CardsBox from "../../components/boxes/cards-box/cards-box";
import ContactsBox from "../../components/boxes/contacts-box/contacts-box";
import Map from "../../components/map/map";

import mapInfo from "../../mock/map-info";
import { prepareMarkers } from "../../utils/markers";
import { ODINTSOVO_COORD } from "../../const/map";
import { AppRoute } from "../../const";
import { redirectToRoute } from "../../store/action";
import { useAppDispatch } from "../../hooks/state";
import BalanceBox from "../../components/boxes/balance-box/balance-box";
import { homeStyle } from "./home.style";

const Home = () => {
  const dispatch = useAppDispatch();
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
    style: { height: "100%" },
  };

  const markers = prepareMarkers(mapInfo);

  return (
    <div className="home" css={homeStyle}>
      <div className="box box1">
        <FuelBox />
      </div>
      <div className="box box2">
        <CardsBox />
      </div>
      <div className="box box3">
        <BalanceBox />
      </div>
      <div className="box box4">
        <ContactsBox />
      </div>
      <div
        style={{ cursor: "pointer" }}
        className="box box7"
        onClick={() => {
          console.log("click :>>");
          dispatch(redirectToRoute(AppRoute.AzsMap));
        }}
      >
        <Map mapConfig={{ ...mapConfig }} markers={markers} />
      </div>
    </div>
  );
};

export default Home;
