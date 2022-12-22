import { ACTION } from "./types"

export const setWork = (payload) => ({
   type: ACTION.SET_WORK,
   payload
})

export const resetWork = () => ({
   type: ACTION.RESET_WORKS,
})