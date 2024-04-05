import BalanceBox from "../../components/boxes/balance-box/balance-box";
import CardsBox from "../../components/boxes/cards-box/cards-box";
import ContactsBox from "../../components/boxes/contacts-box/contacts-box";
import Map from "../../components/map/map"

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <BalanceBox />
      </div>
      <div className="box box2">
        <CardsBox/>
      </div>
      <div className="box box2">
        <ContactsBox />
      </div>
      <div className="box box7">
        <Map/>
      </div>
      
    </div>
  );
};

export default Home;
