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

import { loadPostsSuccess, loadPostsError, createPostSuccess, createPostError, deletePostSuccess, deletePostError } from './Actions'
import { loadPostsAPI, createPostAPI, deletePostAPI } from './api'

function* onLoadPostsStartAsync() {
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

function* onCreatePostStartAsync({payload}) {
    try {
        const response = yield call(createPostAPI, payload) 
        if(response.status === 200) {
        yield put(createPostSuccess(response.data))
        }
    } catch (error) {
        yield put(createPostError(error.response.data))
    } 
}

function* onDeletePostStartAsync({postId}) {
    try {
        const response = yield call(deletePostAPI, postId) 
        if(response.status === 200) {
        yield delay(500)
        yield put(deletePostSuccess(postId))
        }
    } catch (error) {
        yield put(deletePostError(error.response.data))
    } 
}

function* onLoadPosts() {
    yield takeEvery(types.LOAD_POSTS_START, onLoadPostsStartAsync)
}

function* onCreatePost() {
    yield takeLatest(types.CREATE_POST_START, onCreatePostStartAsync)
}

function* onDeletePost() {
    while(true) {
        const {payload: postId} = yield take(types.DELETE_POST_START)
        yield call(onDeletePostStartAsync, postId)
    }
}

const postSagas = [fork(onLoadPosts), fork(onCreatePost), fork(onDeletePost)]

export default function* rootSaga() {
    yield all([...postSagas])
}