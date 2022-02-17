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

import { loadPostsSuccess, loadPostsError } from './Actions'
import { loadPostsAPI } from './api'

export function* onLoadPostsStartAsync() {

}

export function* onLoadPosts() {
    yield takeEvery(types.LOAD_POSTS_START, onLoadPostsStartAsync)
}

const postSagas = [fork(onLoadPosts)]

export default function* rootSaga() {
    yield all([...postSagas])
}