import Immutable from 'seamless-immutable'
import { merchantConstants } from '../constants/index.js'

const initialState = Immutable({
  merchantsLoading: false,
  addingToCart: false,
  merchants: [],
  cart: [],
})

const merchantReducer = (state = initialState, action) => {
  switch (action.type) {
    case merchantConstants.MERCHANTS_REQUEST: {
      return {
        ...state,
        merchantsLoading: true
      }
    }

    case merchantConstants.MERCHANTS_SUCCESS: {
      const { data: merchants } = action.response

      return {
        ...state,
        merchants,
        merchantsLoading: false,
      }
    }

    case merchantConstants.MERCHANTS_ADD_CART_REQUEST: {
      console.log(action)
      const { body } = action
      const { cart } = state

      // if it is already in cart, we do nothing
      if (cart.some(ele => ele.guid === body.guid)) {
        return {
          ...state,
        }
      }

      return {
        ...state,
        cart: cart.concat(body),
      }
    }

    default:
      return state
  }
}

export default merchantReducer
