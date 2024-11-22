import { NameSpace, Status } from "#root/const";
import { AuthInfoType } from "#root/types";
import { createSelector } from "@reduxjs/toolkit";
import { InitialStateType } from '../../reducer'

type authStateType = Pick<InitialStateType, typeof NameSpace.Auth>;

export const getAuthStatus = createSelector(
  (state: authStateType) => state[NameSpace.Auth].status,
  (status) => ({
    status,
    isIdle: status === Status.Idle,
    isLoading: status === Status.Loading,
    isError: status === Status.Error,
    isSuccess: status === Status.Success
  })
);
export const getAuthData = (state: authStateType): AuthInfoType | undefined => state[NameSpace.Auth].authData
export const getFirmId = (state: authStateType): number | undefined => state[NameSpace.Auth].authData?.firmId
export const isAdmin = (state: authStateType): boolean | undefined => state[NameSpace.Auth].authData?.isAdmin
export const isCard = (state: authStateType): boolean | undefined => state[NameSpace.Auth].authData?.isCard
export const getCardNum = (state: authStateType): number | undefined => state[NameSpace.Auth].authData?.cardNum