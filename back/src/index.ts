import 'dotenv/config'

import express, { json } from 'express'

import cors from 'cors'

import { router } from './routes'
import dbConnect from './config/connection'

const PORT = process.env.PORT || 1234
const app = express()

app.use(cors())
app.use(json())

app.use('/api', router)

dbConnect().then(() => {
  console.log('DB ON')
})

app.listen(PORT, () => {
  console.log('server ON')
})

/* 
const MOTO = {
  km_totales: 3657,
  ultimo_cambio_aceite_kms: 2048,
}

const CuentaDiaria = {
  _id: 'kasbd167t17sdb23ui',
  user: 'pepin',
  ingreso: 4500,
  gasto: {
    description: 'almuerzo',
    monto: 600,
  },
  date: new Date().toLocaleString(),
}

const User = {
  _id: '123nqsdbj12',
  type: 3,
  email: 'asdas@123.com',
  username: 'locomotoraiwin',
  profile: {
    avatar: 'hhtps://asdqw.image.com',
    phone: '1231497673',
    name: 'asda',
    lastname: 'asjda nw awqe',
    birth: {
      day: 6,
      month: 8,
      year: 1998,
    },
  },
  creationDate: Date(),
  updatedate: Date(),
  entries: ['CuentaDiaria'],
}
*/
