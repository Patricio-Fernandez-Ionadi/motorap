export const Home = () => {
  return (
    <div>
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
      <small>-------###### imagen con mapa y recorrido ######-------</small>
      <div className='informacion-container'>
        <p>
          kilometros:
          <span> 132 kms</span>
        </p>
        <p>
          precio/km: $<span> 65</span>
        </p>
        <p>
          ad/lluvia 20%:<span> 0</span>
        </p>
        <p>
          espera/hora $1200:<span> 0</span>
        </p>
        <p>
          total: $<span> 8580</span>
        </p>

        <div>
          <button>agregar viaje</button>
        </div>
      </div>
    </div>
  )
}
