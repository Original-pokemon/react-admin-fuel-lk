import { APIRoute } from "#root/store/api-route";
import { asyncThunkConfig, TransactionType } from "#root/types";
import { createAsyncThunk } from "@reduxjs/toolkit";


type FetchTransactionsParams = {
  firmid: number;
  cardnum: number;
  day: string;
  fromday: string;
};

const COUNT = 1000000

export const fetchTransactions = createAsyncThunk<
  TransactionType[],
  FetchTransactionsParams,
  asyncThunkConfig
>(
  "transactions/fetchTransactions",
  async (params, { extra: api }) => {
    const { firmid, cardnum, day, fromday } = params;
    const { data } = await api.get<TransactionType[]>(APIRoute.Transaction, {
      params: {
        firmid,
        cardnum,
        day,
        fromday,
        count: COUNT,
      },
    });
    return data
  }
);