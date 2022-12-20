import { ACTION } from "./types"

export const setWork = (payload) => ({
   type: ACTION.SET_WORK,
   payload
})

export const removeWork = (payload) => ({
   type: ACTION.REMOVE_WORK,
   payload
})