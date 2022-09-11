import { IUser } from '../interfaces/user.interface'
import { MUser } from '../models/user'
import { encrypt } from '../utils/bcrypt'

const getUserByUsername = async (username: string) => {
  const [userToFind] = await MUser.find({ username })

  if (!userToFind) {
    return false
  } else {
    return userToFind
  }
}

const getUserByEmail = async (email: string) => {
  const [userToFind] = await MUser.find({ email })

  if (!userToFind) {
    return false
  } else {
    return userToFind
  }
}

const createNewUser = async (user: IUser) => {
  const { username, email } = user

  // hash pass
  const HPass = await encrypt(user.password)

  // user
  const newUser = {
    username,
    email,
    password: HPass,
  }

  // save
  const userCreated = await MUser.create(newUser)

  return userCreated
}

export { getUserByUsername, getUserByEmail, createNewUser }
