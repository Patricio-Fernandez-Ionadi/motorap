import { Request, Response } from 'express'
import { IUser } from '../interfaces'
import { MUser } from '../models'
import { createNewUser, getUserByEmail, getUserByUsername } from '../services'
import { encrypt } from '../utils'

// Comprueba si el usuario o el email existen, procede a preparar el objeto para mandarlo al servicio que lo creará
const registerUser = async (req: Request, res: Response) => {
  const alreadyExistentUser = await getUserByUsername(req.body.username)
  const alreadyExistentEmail = await getUserByEmail(req.body.email)

  if (alreadyExistentUser) {
    // 406 not acceptable
    res.status(406).send('USUARIO_EXISTENTE')
  } else if (alreadyExistentEmail) {
    res.status(406).send('CORREO_EXISTENTE')
  } else {
    const { email, username, password, name, lastname, birth } = req.body
    const HPass = await encrypt(password)
    const defaultRole = 'user'

    const newUser = new MUser<IUser>({
      username,
      email,
      name,
      lastname,
      birth,
      password: HPass,
      role: defaultRole,
    })
    const userCreated = await createNewUser(newUser)

    // 201 created
    res.status(201).send(userCreated)
  }
}

const actualizarUsuario = async (req: Request, res: Response) => {}

export { registerUser, actualizarUsuario }
