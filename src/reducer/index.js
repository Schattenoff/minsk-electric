import { ACTION } from "./types"

export const initialState = {
   1: [],
}

export default function reducer(state, action) {
   const { type, payload } = action

   switch (type) {
      case ACTION.ADD_WORK: {
         const currentTableData = state[payload.tableId] || []

         const existItemImdex = currentTableData.findIndex(item => item.id === payload.newItem.id)

         if (existItemImdex !== -1) {
            currentTableData[existItemImdex] = payload.newItem
         }

         state[payload.tableId] = [...currentTableData, payload.newItem]
         return {
            ...state
         }
      }
   }
}