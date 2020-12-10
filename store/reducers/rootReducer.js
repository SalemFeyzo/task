import { combineReducers } from 'redux'
import { listUserReducer } from './userReducers'

const rootReducer = combineReducers({
  listUser: listUserReducer,
})

export default rootReducer
