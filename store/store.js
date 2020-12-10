import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
const initialState = {}
export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
)
