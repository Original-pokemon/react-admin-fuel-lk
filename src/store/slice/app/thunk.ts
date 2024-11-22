import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from '../../api-route';
import { asyncThunkConfig } from "#root/types/thunk-config";
import { NameSpace } from "#root/const";
import { NomenclatureType } from "#root/types/nomenclature";

export const fetchNomenclatureData = createAsyncThunk<NomenclatureType[], undefined, asyncThunkConfig>(
  NameSpace.App + '/getNomenclatureData',
  async (_arg, { extra: api }) => {

    const { data } = await api.get<NomenclatureType[]>(APIRoute.NomenclatureData);

    // const data = await generateMockFirmData(1000);

    return data;
  },)