import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "modules/types";

export interface UserState {
    data: User[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: UserState = {
    data: [],
    status: 'idle'
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsersRequest(state: UserState) {
            console.log(`진행 2 : fetchUsersRequest  ${JSON.stringify(state)} `)
            state.status = 'loading';
        },
        fetchUsersSuccess(state: UserState, { payload }) {
            console.log(`진행 2 : fetchUsersSuccess ${JSON.stringify(state)} `)
            state.status = 'idle'
            state.data = [...state.data, payload]
            console.log(`서버 payload: ${JSON.stringify(state.data)}`)
        },
        fetchUsersFailure(state: UserState, { payload }) {
            console.log(`진행 2 : fetchUsersFailure ${JSON.stringify(state)} `)
            state.status = 'failed'
            state.data = payload
        }
    }
})
    const {reducer, actions} = userSlice
    export const userActions = actions
    export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, } = userSlice.actions;
    export default reducer;