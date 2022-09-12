import { Request, Response } from 'express'
import { readMotoInfo, updateMotoKms } from '../services/moto'
import { _initializeMoto } from '../services/moto'

const _createMoto = async (req: Request, res: Response) => {
  const moto = {
    kms: 14148,
    prev_kms: 14148,
  }
  const createdMoto = await _initializeMoto(moto)
  res.json(createdMoto)
}

const getMoto = async (req: Request, res: Response) => {
  const motoInfo = await readMotoInfo()
  res.json(motoInfo)
}

const newMotoKms = async ({ body }: Request, res: Response) => {
  const kms = Number(body.kms)
  const newMotoKms = await updateMotoKms(kms) // esto deberia devolver el unico objeto moto ya actualizado

  res.json(newMotoKms)
}

const updateMoto = async (req: Request, res: Response) => {}

const _deleteMoto = async (req: Request, res: Response) => {}

// export { getMoto, newMotoKms, _createMoto }
export { getMoto, newMotoKms }
