export interface IMoto {
  kms: number
  prev_kms: number
  _id: string
  __v: number
}

export interface IService {
  oil_change: number
  last_oil_change: number
  next_oil_change: number
  oil_filter_change: number
  last_oil_filter_change: number
  next_oil_filter_change: number
  front_brakes_change: number
  next_front_brakes_change: number
  back_brakes_change: number
  next_back_brakes_change: number
}
