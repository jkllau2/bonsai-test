import { User } from '../models/index.js'

export default class UserService {
  static async getUserById(id) {
    return User.findOne({
      where: {
        id
      }
    })
  }

  static async getUserByEmail(email) {
    return User.findOne({
      where: {
        email
      }
    })
  }

  static async updateEmail(userPayload, newEmail) {
    const { id } = userPayload
    const userCheck = User.findOne({
      where: {
        id
      }
    })

    if (!userCheck) {
      throw new Error('Invalid user')
    }

    if (newEmail === userCheck.email) {
      throw new Error('Email cannot be the same')
    }

    try {
      await User.update({
        email: newEmail
      }, {
        where: {
          id
        }
      })
    } catch (error) {
      throw error
    }
  }
}
