import { createAction } from "@reduxjs/toolkit";
import { NameSpace } from "../const/store";
import { AppRouteType } from "../types/app-route";

export const setCards = createAction(`${NameSpace.Card}/getCards`);
export const fetchCurrentLocation = createAction(
  `${NameSpace.App}/fetchCurrentLocation`,
);
export const redirectToRoute = createAction<AppRouteType>(
  `${NameSpace.App}/redirectToRoute`,
);
