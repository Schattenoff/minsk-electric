import { ACTION } from "./types"

export const initialState = new Array(7).fill([])

export default function reducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case ACTION.SET_WORK: {
      return [...payload]
    }

    case ACTION.RESET_WORKS: {
      return new Array(7).fill([])
    }
    default: {
      return initialState;
    }
  }
}