import Immutable from 'seamless-immutable'
import { userConstants } from '../constants/index.js'

const initialState = Immutable({
  user: null,
  userLoading: false,
})

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_PROFILE_REQUEST:
      return {
        ...state,
        userLoading: true,
      }

    case userConstants.USER_PROFILE_SUCCESS: {
      const { data: user } = action.response

      return {
        ...state,
        user,
        userLoading: false
      }
    }
    default:
      return state
  }
}

export default userReducer
