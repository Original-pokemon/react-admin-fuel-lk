import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from '../../api-route';
import { asyncThunkConfig } from "#root/types/thunk-config";
import { NameSpace } from "#root/const";
import { FirmInfoType } from "#root/types";
import { getFirmId } from "../auth-data/selectors";
import generateMockFirmData from "#root/mock/firm";

export const fetchFirmData = createAsyncThunk<FirmInfoType, undefined, asyncThunkConfig>(
  NameSpace.Firm + '/getFirmData',
  async (_arg, { extra: api, getState }) => {
    const firmId = getFirmId(getState());

    if (!firmId) {
      throw Error('Firm id not found')
    }

    const { data } = await api.get<FirmInfoType[]>(APIRoute.FirmInfo(firmId));

    // const data = await generateMockFirmData(1000);

    return data[0];
  },)