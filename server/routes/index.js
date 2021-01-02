import userRouter from './user.routes.js'

const BASE_URL = '/api/v1'

export const setupRoutes = app => {
  app.use(`${BASE_URL}/user`, userRouter)
}
