import { userService } from '../../services/index.js'
import { userConstants } from '../constants/index.js'
import { request, success, failure } from './helper.js'

function getUserProfile() {
  return async dispatch => {
    dispatch(request(userConstants.USER_PROFILE_REQUEST))

    try {
      const response = await userService.getUserProfile()
      const { data } = response
      dispatch(success(userConstants.USER_PROFILE_SUCCESS, { data }))
    } catch (error) {
      dispatch(failure(userConstants.USER_PROFILE_FAILURE), error)
    }
  }
}
export default {
  getUserProfile,
}
