import { Router } from 'express'
import { logUser } from '../controllers/auth'

const router = Router()

router.post('/login', logUser)

export { router }
