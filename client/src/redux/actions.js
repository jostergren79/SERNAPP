import * as types from './actionTypes'

export const loadPostsStart = () => ({
    type: types.LOAD_POSTS_START
})

export const loadPostsSuccess = (posts) => ({
    type: types.LOAD_POSTS_SUCCESS,
    payload: posts
})

export const loadPostsError = (error) => ({
    type: types.LOAD_POSTS_ERROR,
    payload: error
})