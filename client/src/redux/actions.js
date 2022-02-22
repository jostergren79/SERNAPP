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

export const createPostStart = (post) => ({
    type: types.CREATE_POST_START,
    payload: post
})

export const createPostSuccess = (posts) => ({
    type: types.CREATE_POST_SUCCESS,
})

export const createPostError = (error) => ({
    type: types.CREATE_POST_ERROR,
    payload: error
})

export const deletePostStart = (postId) => ({
    type: types.DELETE_POST_START,
    payload: postId
})

export const deletePostSuccess = (postId) => ({
    type: types.DELETE_POST_SUCCESS,
    payload: postId
})

export const deletePostError = (error) => ({
    type: types.DELETE_POST_ERROR,
    payload: error
})