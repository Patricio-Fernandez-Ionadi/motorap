import { IUser } from '../interfaces'
import { MUser } from '../models'

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

const getUserById = async (id: string) => {
  const [user] = await MUser.find({ _id: id })

  if (!user.username) return

  return user
}

// Recibe un objeto listo y lo crea en la DB
const createNewUser = async (user: IUser) => {
  const { email, username, password, name, lastname, birth, role } = user

  const newUser = new MUser<IUser>({
    username,
    email,
    name,
    lastname,
    birth,
    password,
    role,
  })

  // save
  const userCreated = await MUser.create(newUser)
  return userCreated
}

export { getUserByUsername, getUserByEmail, getUserById, createNewUser }
