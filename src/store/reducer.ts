import { createReducer } from "@reduxjs/toolkit";
import { setCards } from "./action";
import { FuelCardType } from "../types";
import { generateMockFuelCardList } from "../mock/fuel-card";
import { FirmType } from "../types/firm";
import Firm from "../mock/firm";
import { ContractType } from "../types/contract";
import contracts from "../mock/contracts";

type InitialStateType = {
  cards: FuelCardType[] | null;
  firm: FirmType;
  contracts: ContractType[];
};

const initialState: InitialStateType = {
  cards: null,
  firm: Firm,
  contracts,
};

const cards = generateMockFuelCardList(10);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCards, (state) => {
    state.cards = cards;
  });
});

export { reducer };
