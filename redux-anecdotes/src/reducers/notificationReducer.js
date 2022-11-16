import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        notify(state, action){
            const content = action.payload
            state = ''
            return state.concat(content)
        },
        removeNotify(state, action){
            state = ''
            return state
        }
    }

})

export const { notify, removeNotify } = notificationSlice.actions
export default notificationSlice.reducer 