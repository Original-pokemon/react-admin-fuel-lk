import "./cards-box.scss";
import { useAppSelector } from "../../../hooks/state.ts";
import { getCards } from "../../../store/selectors.ts";

const CardsBox = () => {
  const cards = useAppSelector(getCards);
  const activeCards = cards?.filter((card) => !card.blocked);
  const blockCards = cards?.filter((card) => card.blocked);

  if (!cards) return null;

  return (
    <div className="topBox">
      <h1>Топливные карты</h1>
      <div className="list">
        <div className="listItem">
          <span className="name">Всего карт</span>
          <span className="value">{cards.length}</span>
        </div>
        <div className="listItem">
          <span className="name">Активных карт</span>
          <span className="value">{activeCards?.length}</span>
        </div>
        <div className="listItem">
          <span className="name">Заблокированых карт</span>
          <span className="value">{blockCards?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsBox;
