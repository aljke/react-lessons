import { IWaiter } from "../type";

export const ACTION_WAITER_GET_SOURCE_LOADING = 'ACTION_WAITER_GET_SOURCE_LOADING';
export const ACTION_WAITER_GET_SOURCE_SUCCESS = 'ACTION_WAITER_GET_SOURCE_SUCCESS';
export const ACTION_WAITER_GET_SOURCE_FAILED = 'ACTION_WAITER_GET_SOURCE_FAILED';


export const ACTION_WAITER_SET_EDITED_WAITER_BUFFER = 'ACTION_WAITER_SET_EDITED_WAITER_BUFFER'
export const ACTION_WAITER_UDPATE_ITEM = 'ACTION_WAITER_UDPATE_ITEM'
export const ACTION_WAITER_CREATE_ITEM = 'ACTION_WAITER_CREATE_ITEM'
export const ACTION_WAITER_DELETE_ITEM = 'ACTION_WAITER_DELETE_ITEM'

export function getWaitersSourceActionLoading() {
    return { type: ACTION_WAITER_GET_SOURCE_LOADING }
}

export function getWaitersSourceActionSuccess(source: IWaiter[]) {
    return { type: ACTION_WAITER_GET_SOURCE_SUCCESS, payload: source }
}

export function getWaitersSourceActionError(error: Error) {
    return { type: ACTION_WAITER_GET_SOURCE_FAILED, payload: error }
}

export function setEditedWaiterBufferAction(buffer: IWaiter) {
    return { type: ACTION_WAITER_SET_EDITED_WAITER_BUFFER, payload: buffer }
}

export function updateWaiterAction(updatedWaiter: IWaiter) {
    return { type: ACTION_WAITER_UDPATE_ITEM, payload: updatedWaiter }
}

export function createWaiterAction(createdWaiter: IWaiter) {
    return { type: ACTION_WAITER_CREATE_ITEM, payload: createdWaiter }
}

export function deleteWaiterAction(waiterId: number) {
    return { type: ACTION_WAITER_DELETE_ITEM, payload: waiterId }
}