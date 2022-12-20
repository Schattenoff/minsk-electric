import { ACTION } from "./types"

export const addWork = (payload) => ({
   type: ACTION.ADD_WORK,
   payload
})

export const removeWork = (payload) => ({
   type: ACTION.REMOVE_WORK,
   payload
})