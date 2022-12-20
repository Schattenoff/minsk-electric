import { ACTION } from "./types"

export const initialState = new Array(7).fill([])

export default function reducer(state, action) {
   const { type, payload } = action

   switch (type) {
      case ACTION.SET_WORK: {
         return [...payload]
      }
   }
}