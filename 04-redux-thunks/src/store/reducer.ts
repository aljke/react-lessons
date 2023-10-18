import { combineReducers } from 'redux'
import { reducer as waitersReducer } from '../features/waiters/store/reducer'

export const reducer = combineReducers({
    waiters: waitersReducer
})