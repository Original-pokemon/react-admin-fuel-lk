// import "./fuel-box.scss";
import { useAppSelector } from "../../../hooks/state.ts";
import { getTotalBalance } from "../../../store/selectors.ts";
import { FuelTypeLabel } from "../../../const/fuel-card.ts";
import InfoBox from "../info-box/info-box.tsx";

const FuelBox = () => {
  const cards = useAppSelector((state) => state.cards);
  const totalFuelBalance = useAppSelector(getTotalBalance);

  if (!cards) return null;

  return (
    <InfoBox
      title="Остатки на картах"
      data={Object.entries(totalFuelBalance).map(([key, value]) => ({
        [FuelTypeLabel[key as keyof typeof FuelTypeLabel]]: `${value} литров`,
      }))}
    />
  );
};

export default FuelBox;
