import * as types from './actionTypes'

const initialState = {
    posts: [],
    loading: false,
    error: null
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {

        case types.LOAD_POSTS_START:
        case types.CREATE_POST_START:
        return {
        ...state,
        loading: true    
        }

        case types.LOAD_POSTS_SUCCESS:
        return {
        ...state,
        loading: false,
        posts: action.payload
        }
        case types.CREATE_POST_SUCCESS:
        return {
        ...state,
        loading: false,
        }   
        case types.LOAD_POSTS_ERROR:
        case types.CREATE_POST_ERROR: 
        return {
        ...state,
        loading: false,
        error: action.payload
        }

        default:
            return state
    }
}

export default postReducer