import { Request, Response } from 'express'
import { getUser } from '../services'
import { validatePass } from '../utils'

const logUser = async ({ body }: Request, res: Response) => {
  const { username, password } = body
  const checkUser = await getUser(username)

  if (!checkUser) return res.send('USER_NOT_FOUND')
  const { password: hpass } = checkUser

  const verifyPass = await validatePass(password, hpass)

  if (!verifyPass) return res.send('PASSWORD_INCORRECT')

  res.send(checkUser)
}

export { logUser }
