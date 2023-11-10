import { MockApiClient } from '../api/mockApiClient';
import { IWaiter } from '../type';
import { getWaitersSourceActionLoading, getWaitersSourceActionSuccess, getWaitersSourceActionError, deleteWaiterAction, updateWaiterAction, createWaiterAction, saveWaiterLoadingAction, saveWaiterLoadingActionError, deleteWaiterLoadingAction, deleteWaiterActionError } from './reducer';

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
}

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

export function saveWaiter(waiter: IWaiter): any {
    return (dispatch: any) => {
        dispatch(saveWaiterLoadingAction())

        if (waiter.id) {
            MockApiClient.update(waiter.id, waiter).then((updatedWaiter) => {
                dispatch(updateWaiterAction(updatedWaiter))
            })
            .catch((error) => {
                dispatch(saveWaiterLoadingActionError(error))
            })
        }
        else {
            MockApiClient.create(waiter).then((createdWaiter) => {
                dispatch(createWaiterAction(createdWaiter))
            })
            .catch((error) => {
                dispatch(saveWaiterLoadingActionError(error))
            })
        }
    }
}