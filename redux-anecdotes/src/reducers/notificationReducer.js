const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {

    switch(action.type){
        case 'NOTIFICATION':
            const notification = action.payload 
            return state.concat(notification)
        default: return state
    }
}

export default notificationReducer