import { TextInputs } from './TextInputs'

export const TripForm = () => {
  return (
    <form>
      <TextInputs />

      {/* <div>
            <label htmlFor='viaje'>Viaje: </label>
            <input id='viaje' />
          </div> */}
      <div>
        <label htmlFor='kms'>Kilometros: </label>
        <input id='kms' placeholder='0' type='number' required />
      </div>
      <div>
        <label htmlFor='precio'>Valor: </label>
        <input id='precio' placeholder='0' type='number' />
      </div>
      <div>
        <label htmlFor='lluvia'>Lluvia: </label>
        <input type='checkbox' id='lluvia' />
      </div>
      <div>
        <label htmlFor='espera'>Espera: </label>
        <input id='espera' type='float' placeholder='0' />
        <span>hs</span>
      </div>
      <button>+ nuevo ingreso</button>
    </form>
  )
}
