import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = preloadState => {
  const store = createStore(
    rootReducer,
    preloadState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  return store
}

export default configureStore
