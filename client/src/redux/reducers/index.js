import { combineReducers } from 'redux'

import merchantReducer from './merchant.reducers.js'
import userReducer from './user.reducers.js'

const rootReducer = combineReducers({
  merchantReducer,
  userReducer,
})

export default rootReducer
