import * as types from './actionTypes'

import  { 
    take, 
    takeEvery, 
    takeLatest, 
    put, 
    all, 
    delay, 
    fork, 
    call,
} from 'redux-saga/effects'

import { loadPostsSuccess, loadPostsError, createPostSuccess, createPostError } from './Actions'
import { loadPostsAPI, createPostAPI } from './api'

export function* onLoadPostsStartAsync() {
    try {
        const response = yield call(loadPostsAPI)
        if(response.status === 200) {
        yield delay(500)
        yield put(loadPostsSuccess(response.data))
        console.log(response.data)
        } 
    } catch (error) {
        yield put(loadPostsError(error.response.data))
    } 
}

export function* onCreatePostStartAsync(payload) {
    try {
        const response = yield call(createPostAPI, payload) 
        if(response.status === 200) {
        yield put(createPostSuccess(response.data))
        }
    } catch (error) {
        yield put(createPostError(error.response.data))
    } 
}

export function* onLoadPosts() {
    yield takeEvery(types.LOAD_POSTS_START, onLoadPostsStartAsync)
}

export function* onCreatePost() {
    yield takeLatest(types.CREATE_POST_START, onCreatePostStartAsync)
}

const postSagas = [fork(onLoadPosts), fork(onCreatePost)]

export default function* rootSaga() {
    yield all([...postSagas])
}