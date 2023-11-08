import { IWaiter } from "../type";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IWaitersReducerInitial {
    waitersSource: IWaiter[],
    editedWaiterBuffer: IWaiter,
    sourceLoading: boolean,
    sourceLoadingError?: Error
    saveWaiterLoading: boolean,
    saveWaiterLoadingError?: Error
    deleteWaiterLoading: boolean,
    deleteWaiterError?: Error,
    getWaiterLoading: boolean,
    getWaiterLoadingError?: Error
}

export const DEFAULT_WAITER: IWaiter = {
    firstName: '',
    phone: ''
}

const initialState: IWaitersReducerInitial = {
    waitersSource: [],
    editedWaiterBuffer: {...DEFAULT_WAITER},
    sourceLoading: false,
    sourceLoadingError: undefined,
    saveWaiterLoading: false,
    saveWaiterLoadingError: undefined,
    deleteWaiterLoading: false,
    deleteWaiterError: undefined,
    getWaiterLoading: false,
    getWaiterLoadingError: undefined
}

export const waitersSlice = createSlice({
    name: 'waiters',
    initialState,
    reducers: {
        getWaitersSourceActionLoading: (state: IWaitersReducerInitial) => {
            state.sourceLoading = true
            state.sourceLoadingError = undefined
        },
        getWaitersSourceActionSuccess: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter[]>) => {
            state.waitersSource = action.payload
            state.sourceLoading = false
            state.sourceLoadingError = undefined
        },
        getWaitersSourceActionError: (state: IWaitersReducerInitial, action: PayloadAction<Error>) => {
            state.sourceLoadingError = action.payload
            state.sourceLoading = false
        },
        setEditedWaiterBufferAction: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter>) => {
            state.editedWaiterBuffer = action.payload
        },
        saveWaiterLoadingAction: (state: IWaitersReducerInitial) => {
            state.saveWaiterLoading = true
            state.saveWaiterLoadingError = undefined
        },
        updateWaiterAction: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter>) => {
            state.waitersSource = state.waitersSource.map((waiter: IWaiter) => waiter.id === action.payload.id ? action.payload : waiter)
            state.editedWaiterBuffer = { ... DEFAULT_WAITER }
            state.saveWaiterLoading = false
            state.saveWaiterLoadingError = undefined
        },
        createWaiterAction: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter>) => {
            state.waitersSource = [...state.waitersSource, action.payload]
            state.editedWaiterBuffer = { ... DEFAULT_WAITER }
            state.saveWaiterLoading = false
            state.saveWaiterLoadingError = undefined
        },
        saveWaiterLoadingActionError: (state: IWaitersReducerInitial, action: PayloadAction<Error>) => {
            state.saveWaiterLoading = false
            state.saveWaiterLoadingError = action.payload
        },
        deleteWaiterLoadingAction: (state: IWaitersReducerInitial) => {
            state.deleteWaiterLoading = true
            state.getWaiterLoadingError = undefined
        },
        deleteWaiterAction: (state: IWaitersReducerInitial, action: PayloadAction<number>) => {
            state.waitersSource = state.waitersSource.filter((x: IWaiter) => x.id !== action.payload)
            state.deleteWaiterLoading = false
            state.deleteWaiterError = undefined
        },
        deleteWaiterActionError: (state: IWaitersReducerInitial, action: PayloadAction<Error>) => {
            state.deleteWaiterLoading = false
            state.deleteWaiterError = action.payload
        },
        getWaiterActionLoading: (state: IWaitersReducerInitial) => {
            state.getWaiterLoading = true
            state.getWaiterLoadingError = undefined
        },
        getWaiterActionSuccess: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter>) => {
            state.getWaiterLoading = false
            state.getWaiterLoadingError = undefined
            state.editedWaiterBuffer = action.payload
        },
        getWaiterActionError: (state: IWaitersReducerInitial, action: PayloadAction<IWaiter>) => {
            state.getWaiterLoading = false
            state.getWaiterLoadingError = undefined
            state.editedWaiterBuffer = action.payload
        }
    },
})

export const { actions, reducer } = waitersSlice
export const {
    getWaitersSourceActionLoading,
    getWaitersSourceActionSuccess,
    getWaitersSourceActionError,
    setEditedWaiterBufferAction,
    updateWaiterAction,
    createWaiterAction,
    deleteWaiterAction,
    saveWaiterLoadingActionError,
    saveWaiterLoadingAction,
    deleteWaiterLoadingAction,
    deleteWaiterActionError,
    getWaiterActionLoading,
    getWaiterActionSuccess,
    getWaiterActionError
} = actions