import { reducer as waitersReducer } from '../features/waiters/store/reducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer : {
        waiters: waitersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch