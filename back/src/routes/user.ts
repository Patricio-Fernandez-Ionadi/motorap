import { Router } from 'express'
import { registerUser } from '../controllers'

const router = Router()

router.post('/new', registerUser)

export { router }
