import { Link } from 'react-router-dom'

export const Controls = () => {
  return (
    <ul className='controls-container'>
      <Link to='/' className='control'>
        Inicio
      </Link>
      <Link to='/info' className='control'>
        Informacion
      </Link>
      <Link to='/vehiculo' className='control'>
        Vehiculo
      </Link>
    </ul>
  )
}
