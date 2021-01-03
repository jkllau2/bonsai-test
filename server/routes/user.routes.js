import express from 'express'
import UserService from '../services/user.service.js'

const router = express.Router()

router.get('/', async (req, res) => {
  /*
    ideally we would get the id from the req,
    hardcoded for now because of time constraint
  */
  const id = '20b80876-24dc-44d3-9925-9c49328f3f59'
  const user = await UserService.getUserById(id)

  return res.status(200).json(user)
})

router.post('/update-email', async (req, res) => {
  const { email } = req.body
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'email not provided' })
  }
  await UserService.updateEmail(payload)

  return res.sendStatus(200)
})

export default router