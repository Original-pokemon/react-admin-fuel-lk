import { FuelType, StateType } from "../types";
import { FuelTypeName } from '../const/fuel-card'

export const getTotalBalance = (state: StateType) => {
  const fuelStock: Record<string, number> = {
    Diesel: 0,
    NinetyFifth: 0,
    NinetySecond: 0,
    NinetyFifthProf: 0,
    HundredthProf: 0,
    Gas: 0,
  };

  state.cards?.forEach(card => {
  if (card.cardType === 1) {

    Object.entries(FuelTypeName).forEach(([key, value]) => {
      const fuelKey = key as FuelType
      
      if (!!card[value]) {
        fuelStock[fuelKey] =+ card[value]
      }
    })

  }
})
return fuelStock
}

export const getCards = (state: StateType) => state.cards