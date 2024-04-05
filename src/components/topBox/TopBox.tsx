import "./topBox.scss"
import { useAppSelector } from "../../hooks/state.ts"
import { getTotalBalance } from "../../store/selectors.ts"
import { FuelTypeLabel } from "../../const/fuel-card.ts"

const TopBox = () => {
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
                <div className="userTexts">
                  <span className="name">{FuelTypeLabel[key as keyof typeof FuelTypeLabel]}</span>
                </div>
              </div>

              <span className="value">{value}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopBox