import  { combineReducers, createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import { employeeReducers } from './reducers/employeeReducers'

const reducers = combineReducers({ employeeReducers})

export const store = createStore(reducers, applyMiddleware(Thunk) ) 