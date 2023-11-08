import createSagaMiddleware from 'redux-saga';
import { reducer as waitersReducer } from '../features/waiters/store/reducer';
import { configureStore } from '@reduxjs/toolkit'
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer : {
        waiters: waitersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch