import { useAppSelector } from "../../../hooks/state.ts";
import { getCards } from "../../../store/selectors.ts";
import InfoBox from "../info-box/info-box.tsx";

const CardsBox = () => {
  const cards = useAppSelector(getCards);
  const activeCards = cards?.filter((card) => !card.blocked);
  const blockCards = cards?.filter((card) => card.blocked);

  if (!cards) return null;

  return (
    <InfoBox
      title="Топливные карты"
      data={[
        { "Всего карт": cards.length },
        { "Активных карт": activeCards?.length || 0 },
        { "Заблокированных карт": blockCards?.length || 0 },
      ]}
    />
  );
};

export default CardsBox;
