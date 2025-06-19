import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/todoSlice'

const rootReducer = combineReducers({
    todoCounter: counterReducer
});

export const store = configureStore({
    reducer: rootReducer
})

