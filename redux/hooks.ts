import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

import { Action, ThunkAction } from "@reduxjs/toolkit";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
