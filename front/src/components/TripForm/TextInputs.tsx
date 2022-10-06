export const TextInputs = () => {
  return (
    <div className='inputs-container'>
      <div className='input-container'>
        <label htmlFor='begining' className='input-label'>
          Origen:
        </label>
        <input
          type='text'
          id='begining'
          className='input-element'
          placeholder='Direccion de origen'
        />
      </div>
      <div className='input-container'>
        <label htmlFor='luck' className='input-label'>
          Destino:
        </label>
        <input
          type='text'
          id='luck'
          className='input-element'
          placeholder='Direccion de destino'
        />
      </div>
    </div>
  )
}
