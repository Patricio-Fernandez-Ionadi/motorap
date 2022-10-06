import { DiaryTable, TripForm } from '../../components'

export const Home = () => {
  return (
    <div>
      <div className='informacion-container'>
        <TripForm />
        <DiaryTable />
      </div>
    </div>
  )
}
