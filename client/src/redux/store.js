import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

import rootSaga from './postSagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store

sagaMiddleware.run(rootSaga)