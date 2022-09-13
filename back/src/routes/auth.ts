import { Router } from 'express'
import { registrarUsuario, logUser } from '../controllers'

const router = Router()

router.post('/login', logUser)

router.post('/register', registrarUsuario)

export { router }
