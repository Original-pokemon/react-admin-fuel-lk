import { createReducer } from '@reduxjs/toolkit';
import { setCards } from './action';
import { FuelCardType } from '../types';
import { generateMockFuelCardList } from '../mock/fuel-card';

type InitialStateType = {
  cards: FuelCardType[] | null;
};

const initialState: InitialStateType = {
  cards: null,
};

const cards = generateMockFuelCardList(10)

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCards, (state) => {
      state.cards = cards;
    })
});

export { reducer };