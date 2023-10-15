import { createWaiterAction, deleteWaiterAction, getWaitersSourceActionError, getWaitersSourceActionLoading, getWaitersSourceActionSuccess, updateWaiterAction } from './actions';
import { MockApiClient } from '../api/mockApiClient';
import { IWaiter } from '../type';

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
        MockApiClient.delete(id).then(() => {
            dispatch(deleteWaiterAction(id))
        })
    }
}

export function addWaiter(createdWaiter: IWaiter): any {
    return (dispatch: any) => {
        MockApiClient.create(createdWaiter).then(() => {
            dispatch(createWaiterAction(createdWaiter))
        })
    }
}

export function saveWaiter(waiter: IWaiter): any {
    return (dispatch: any) => {
        if (waiter.id) {
            MockApiClient.update(waiter.id, waiter).then((updatedWaiter) => {
                dispatch(updateWaiterAction(updatedWaiter))
            })
        }
        else {
            MockApiClient.create(waiter).then((createdWaiter) => {
                dispatch(createWaiterAction(createdWaiter))
            })
        }
    }
}