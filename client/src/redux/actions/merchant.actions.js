import { merchantService } from '../../services/index.js'
import { merchantConstants } from '../constants/index.js'
import { request, success, failure } from './helper.js'

function getMerchants() {
  return async dispatch => {
    dispatch(request(merchantConstants.MERCHANTS_REQUEST))

    try {
      const response = await merchantService.getAllMerchants()
      const { data } = response
      dispatch(success(merchantConstants.MERCHANTS_SUCCESS, { data }))
    } catch (error) {
      console.log('error', error)
      dispatch(failure(merchantConstants.MERCHANTS_FAILURE), error)
    }
  }
}

function addMerchantToCart(data) {
  return async dispatch => {
    dispatch(request(merchantConstants.MERCHANTS_ADD_CART_REQUEST, data))
  }
}

function saveAllCart(payload) {
  return async dispatch => {
    dispatch(request(merchantConstants.MERCHANT_USER_SAVE_CART_REQUEST))
    try {
      await merchantService.saveUserMerchants(payload)
      dispatch(success(merchantConstants.MERCHANT_USER_SAVE_CART_SUCCESS))
    } catch (err) {
      console.log(err)
      dispatch(failure(merchantConstants.MERCHANT_USER_SAVE_CART_FAILURE))
    }
  }
}

export default {
  getMerchants,
  addMerchantToCart,
  saveAllCart
}
