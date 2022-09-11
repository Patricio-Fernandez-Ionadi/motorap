import { hash, compare } from 'bcryptjs'

const encrypt = async (pass: string) => {
  const hashPassword = await hash(pass, 10)
  return hashPassword
}

const validatePass = async (pass: string, hpass: string) => {
  const isCorrect = await compare(pass, hpass)
  return isCorrect
}

export { encrypt, validatePass }
