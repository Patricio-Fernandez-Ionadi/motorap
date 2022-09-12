import { Router } from 'express'
import { getMoto, newMotoKms } from '../controllers'

const router = Router()

router.get('/', getMoto)
// router.get('/', _createMoto)

router.post('/setkms', newMotoKms)

export { router }
