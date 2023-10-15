import { IWaiter } from "../type";
import { ACTION_WAITER_GET_SOURCE_SUCCESS, ACTION_WAITER_SET_EDITED_WAITER_BUFFER, ACTION_WAITER_UDPATE_ITEM, ACTION_WAITER_CREATE_ITEM, ACTION_WAITER_DELETE_ITEM, ACTION_WAITER_GET_SOURCE_LOADING, ACTION_WAITER_GET_SOURCE_FAILED } from './actions';

interface IWaitersReducerInitial {
    waitersSource: IWaiter[],
    editedWaiterBuffer: IWaiter,
    sourceLoading: boolean,
    sourceLoadingError?: Error
}

const DEFAULT_WAITER: IWaiter = {
    firstName: '',
    phone: ''
}

const INITIAL_STATE: IWaitersReducerInitial = {
    waitersSource: [],
    editedWaiterBuffer: {...DEFAULT_WAITER},
    sourceLoading: false,
}

export const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
    switch(type) {
        case ACTION_WAITER_GET_SOURCE_LOADING:
            return { ...state, sourceLoading: true, sourceLoadingError: undefined }
        case ACTION_WAITER_GET_SOURCE_SUCCESS:
            return { ...state, waitersSource: payload, sourceLoading: false }
        case ACTION_WAITER_GET_SOURCE_FAILED:
            return {...state, sourceLoading: false, sourceLoadingError: payload }
        case ACTION_WAITER_SET_EDITED_WAITER_BUFFER:
            return { ...state, editedWaiterBuffer: payload}
        case ACTION_WAITER_UDPATE_ITEM:
            return {
                ...state,
                waitersSource: state.waitersSource.map((waiter: IWaiter) => waiter.id === payload.id ? payload : waiter),
                editedWaiterBuffer: { ...DEFAULT_WAITER }
            }
        case ACTION_WAITER_CREATE_ITEM:
            return {
                ...state,
                waitersSource: [...state.waitersSource, payload],
                editedWaiterBuffer: { ...DEFAULT_WAITER }
            }
        case ACTION_WAITER_DELETE_ITEM:
            return {
                ...state,
                waitersSource: state.waitersSource.filter((x: IWaiter) => x.id !== payload)
            }
        default:
            return state
    }
}