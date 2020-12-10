import axios from 'axios'
import {
  LIST_USER_FAIL,
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
} from '../constants/userConstants'

export const getUserList = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_USER_REQUEST })
    const { data } = await axios.get(
      'http://www.mocky.io/v2/5d889c8a3300002c0ed7da42'
    )
    dispatch({ type: LIST_USER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LIST_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
