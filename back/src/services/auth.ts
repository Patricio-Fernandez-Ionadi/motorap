import { MUser } from '../models'

const getUser = async (username: string) => {
  const user = await MUser.findOne({ username })

  if (!user?.username) return false

  return user
}

export { getUser }
