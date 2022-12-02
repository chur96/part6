import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        notify(state, action){
            const content = action.payload
            return state.concat(content)
        },
        removeNotify(state, action){
            state = ''
            return state
        }
    }

})

export const { notify, removeNotify } = notificationSlice.actions

export const setNotification = (content, sec) => {
    return async dispatch => {
        dispatch(notify(content))
        setTimeout(() => dispatch(removeNotify()), sec * 1000)
    }
}


export default notificationSlice.reducer 