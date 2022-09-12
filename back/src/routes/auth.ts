import { Router } from 'express'
import { createUser, logUser } from '../controllers'

const router = Router()

router.post('/login', logUser)

router.post('/register', createUser)

export { router }
