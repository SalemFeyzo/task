import {
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
  LIST_USER_FAIL,
} from '../constants/userConstants'

export const listUserReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case LIST_USER_REQUEST:
      return { loading: true }
    case LIST_USER_SUCCESS:
      return { loading: false, users: action.payload }
    case LIST_USER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
