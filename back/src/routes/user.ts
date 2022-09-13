import { Router } from 'express'
import { obtenerUsuarioPorId } from '../controllers'

const router = Router()

router.get('/:id', obtenerUsuarioPorId)

export { router }
