import { useAppSelector } from "../../../hooks/state";
import { getContracts } from "../../../store/selectors";
import calculateBalance from "../../../utils/balance";
import InfoBox from "../info-box/info-box";

const BalanceBox = () => {
  const contracts = useAppSelector(getContracts);

  const balance = calculateBalance(contracts);
  return (
    <InfoBox
      key={1}
      title="Баланс организации"
      data={[{ Всего: balance.toString() }]}
    />
  );
};

export default BalanceBox;
