import { ACTION } from "./types"

export const initialState = {
   1: [],
   2: [],
   3: [],
   4: [],
   5: [],
   6: [],
   7: [],
}

export default function reducer(state, action) {
   const { type, payload } = action

   switch (type) {
      case ACTION.ADD_WORK: {
         const { tableId, newItem } = payload;
         console.log(tableId);
      }
   }
}