import { ACTION } from "./types"

export const initialState = {}

export default function reducer(state, action) {
   const { type, payload } = action

   switch (type) {
      case ACTION.ADD_WORK: {
         const currentTableData = state[payload.tableId] || []

         // const existItemImdex =

         state[payload.tableId] = [...currentTableData, payload.newItem]
         return {
            ...state
         }
      }
   }
}