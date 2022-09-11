import { Request, Response } from 'express'
import {
  getUserByEmail,
  getUserByUsername,
  createNewUser,
} from '../services/user'

const createUser = async (req: Request, res: Response) => {
  const alreadyExistentUser = await getUserByUsername(req.body.username)
  const alreadyExistentEmail = await getUserByEmail(req.body.email)

  if (alreadyExistentUser || alreadyExistentEmail) {
    res.send('USUARIO_EXISTENTE')
  } else {
    const newUser = await createNewUser(req.body)

    res.send(newUser)
  }
}

const actualizarUsuario = async (req: Request, res: Response) => {}

export { createUser, actualizarUsuario }
