import { Schema, model } from 'mongoose'
import { IMoto } from '../interfaces/moto.interface'

const motoSchema = new Schema<IMoto>({
  kms: {
    type: Number,
  },
  prev_kms: {
    type: Number,
  },
})

const MMoto = model('motoinformations', motoSchema)

export { MMoto }
