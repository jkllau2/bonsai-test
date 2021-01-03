import brandRouter from './brand.routes.js'
import merchantRouter from './merchant.routes.js'
import productRouter from './product.routes.js'
import userRouter from './user.routes.js'

const BASE_URL = '/api/v1'

export const setupRoutes = app => {
  app.use(`${BASE_URL}/user`, userRouter)
  app.use(`${BASE_URL}/merchant`, merchantRouter)
  // app.use(`${BASE_URL}/brand`, brandRouter)
  // app.use(`${BASE_URL}/product`, productRouter)
}
