import { MockApiClient } from '../api/mockApiClient';
import { IWaiter } from '../type';
import { /*getWaitersSourceActionLoading, getWaitersSourceActionSuccess, getWaitersSourceActionError,*/ deleteWaiterAction, updateWaiterAction, createWaiterAction, saveWaiterLoadingAction, saveWaiterLoadingActionError, deleteWaiterLoadingAction, deleteWaiterActionError, getWaiterActionSuccess, getWaiterActionError, getWaiterActionLoading } from './reducer';

/*
export function getWaitersSource(): any {
    return (dispatch: any) => {
        dispatch(getWaitersSourceActionLoading())

        MockApiClient.getItems<IWaiter>()
            .then((waiters) => {
                dispatch(getWaitersSourceActionSuccess(waiters))
            })
            .catch((error) => {
                dispatch(getWaitersSourceActionError(error))
            })
    }
}*/

export function removeWaiter(id: number): any {
    return (dispatch: any) => {
        dispatch(deleteWaiterLoadingAction())

        MockApiClient.delete(id).then(() => {
            dispatch(deleteWaiterAction(id))
        })
        .catch((error) => {
            dispatch(deleteWaiterActionError(error))
        })
    }
}

export function saveWaiter(waiter: IWaiter, onSuccess: () => void): any {
    return (dispatch: any) => {
        dispatch(saveWaiterLoadingAction())

        if (waiter.id) {
            MockApiClient.update(waiter.id, waiter).then((updatedWaiter) => {
                dispatch(updateWaiterAction(updatedWaiter))
                onSuccess()
            })
            .catch((error) => {
                dispatch(saveWaiterLoadingActionError(error))
            })
        }
        else {
            MockApiClient.create(waiter).then((createdWaiter) => {
                dispatch(createWaiterAction(createdWaiter))
                onSuccess()
            })
            .catch((error) => {
                dispatch(saveWaiterLoadingActionError(error))
            })
        }
    }
}

export function getWaiterById(id: number): any {
    return (dispatch: any) => {
        dispatch(getWaiterActionLoading())

        MockApiClient.getItem<IWaiter>(id).then((waiter) => {
            dispatch(getWaiterActionSuccess(waiter))
        })
        .catch((error) => {
            dispatch(getWaiterActionError(error))
        })
    }
}