import { IMoto } from '../interfaces/moto.interface'
import { MMoto } from '../models/moto'

// moto id : 631e51dcce7fef88f57b9ea1

const _initializeMoto = async (moto: object) => {
  const motoInit = await MMoto.create(moto)
  return motoInit
}

const readMotoInfo = async () => {
  const [motoInfo] = await MMoto.find({ _id: '631e51dcce7fef88f57b9ea1' })
  return motoInfo
}

const updateMotoKms = async (recivedKms: number) => {
  const currentMoto = await readMotoInfo()

  // const updatedInfo: IMoto = {
  //   ...currentMoto,
  //   prev_kms: currentMoto.kms,
  //   kms: recivedKms,
  // }
  // console.log('updatedInfo: service ', updatedInfo)

  const { _id } = currentMoto

  // NO ESTA ACTUALIZANDO EL OBJETO
  const newInfo = await MMoto.findOneAndUpdate(
    { _id },
    {
      ...currentMoto,
      prev_kms: currentMoto.kms,
      kms: recivedKms,
    },
    {
      new: true,
    }
  )

  return newInfo
}

export { _initializeMoto, readMotoInfo, updateMotoKms }
