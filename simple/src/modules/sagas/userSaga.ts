import { call, delay, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import { AxiosResponse } from 'axios';
import { userActions } from 'modules/slices/userSlice';
import { fetchUsers } from 'modules/apis/userApi';


export function* fetchUsersSaga(){
    const { fetchUsersSuccess, fetchUsersFailure } = userActions
        try {
            const res:AxiosResponse = yield call(fetchUsers)
            console.log(`fetchUsersSaga : ${JSON.stringify(res.data)}`) 
            yield put(fetchUsersSuccess(res.data))
        } catch (error) {
            yield put(fetchUsersFailure(error))
        }
}

