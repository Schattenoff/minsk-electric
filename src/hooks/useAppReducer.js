import { useReducer } from "react";
import reducer, { initialState } from "../reducer/index"

export function useAppReducer() { return useReducer(reducer, initialState) }