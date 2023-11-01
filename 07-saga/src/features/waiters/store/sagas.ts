import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getWaitersSourceActionError, getWaitersSourceActionLoading, getWaitersSourceActionSuccess } from './reducer';
import { IWaiter } from '../type';
import { MockApiClient } from '../api/mockApiClient';

function* getWaitersSourceWorker() {
    try {
        const waitersSource: IWaiter[] = yield call([MockApiClient, 'getItems'])
        yield put(getWaitersSourceActionSuccess(waitersSource))
    }
    catch (error: any) {
        yield put(getWaitersSourceActionError(error))
    }
}

export function* waitersWatch() {
    yield all([
        takeEvery(getWaitersSourceActionLoading, getWaitersSourceWorker)
    ])
}