import { configureStore } from "@reduxjs/toolkit";

import reducer from "./anecdoteReducer";
import notificationReducer from "./notificationReducer";

const store = configureStore({
    reducer: {
        anecdotes: reducer,
        notification: notificationReducer
        }
    }
)

export default store