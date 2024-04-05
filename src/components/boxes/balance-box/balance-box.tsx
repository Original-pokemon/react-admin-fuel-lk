import "./balance-box.scss"
import { useAppSelector } from "../../../hooks/state.ts"
import { getTotalBalance } from "../../../store/selectors.ts"
import { FuelTypeLabel } from "../../../const/fuel-card.ts"

const BalanceBox = () => {
  const cards = useAppSelector(state => state.cards)
  const totalFuelBalance = useAppSelector(getTotalBalance)

  if (!cards) return null

  return (
    <div className="topBox">
      <h1>Баланс</h1>
      <div className="list">
        {
          Object.entries(totalFuelBalance).map(([key, value]) => (
            <div className="listItem" key={key}>
              <div className="fuelType">
                <span className="value">{FuelTypeLabel[key as keyof typeof FuelTypeLabel]}</span>
              </div>
              <div className="fuelData">
                <span className="value">{value} литров</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BalanceBox