import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StatusType, TransactionType } from "#root/types";
import { NameSpace, Status } from "#root/const";
import { fetchTransactions } from './thunk'


type InitialStateType = {
  status: StatusType,
}

const transactionsAdapter = createEntityAdapter<TransactionType, string>({
  selectId: (transaction) => `${transaction.dt}-${transaction.cardnum}`,
  sortComparer: (a, b) => new Date(b.dt).getTime() - new Date(a.dt).getTime(),
});

const initialState: InitialStateType = {
  status: Status.Idle,
}

const transactionDataSlice = createSlice({
  name: NameSpace.Transaction,
  initialState: transactionsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = Status.Success;
        transactionsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = Status.Error;
      })
  }
})

export { transactionsAdapter, transactionDataSlice }