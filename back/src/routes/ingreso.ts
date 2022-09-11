import { Router } from 'express'
import { crearIngreso } from '../controllers/ingreso'

const router = Router()

router.post('/ingreso/:user', crearIngreso)

export { router }
