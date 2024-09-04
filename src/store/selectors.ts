import { FuelType, StateType } from "../types";
import { FuelTypeName } from "../const/fuel-card";

export const getTotalBalance = (state: StateType) => {
  const fuelStock: Record<string, number> = {
    Diesel: 0,
    NinetyFifth: 0,
    NinetySecond: 0,
    NinetyFifthProf: 0,
    HundredthProf: 0,
    Gas: 0,
  };

  if (state.cards)
    for (const card of state.cards) {
      if (card.cardType === 1) {
        for (const [key, value] of Object.entries(FuelTypeName)) {
          const fuelKey = key as FuelType;

          if (card[value]) {
            fuelStock[fuelKey] = +card[value];
          }
        }
      }
    }
  return fuelStock;
};

export const getCards = (state: StateType) => state.cards;
export const getFirm = (state: StateType) => state.firm;
export const getContracts = (state: StateType) => state.contracts;
