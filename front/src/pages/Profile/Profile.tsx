export const Profile = () => {
  return (
    <div>
      <p>User : 'username'</p>
      <p>Email : 'user email'</p>
      <p>tickets expendidos: 48</p>
      <p>
        agregar viaje +{' '}
        <span>
          <small>- viajes ingresados : 4 </small>
        </span>
        <span>
          <small>- finalizar jornada</small>
        </span>
      </p>
      <p>ingresar final de jornada +</p>

      <p>calcular viaje</p>

      <div>
        <h2>calcular viaje rapido</h2>
        <div>
          <label>origen</label>
          <input type='text' />
        </div>

        <div>
          <label>destino</label>
          <input type='text' />
        </div>

        <div>
          <label>vuleta</label>
          <input type='checkbox' name='' id='' />
        </div>

        <div>
          <img src='#' alt='imagen con el mapa del recorrido' />
        </div>

        <div>
          <p>kilometros</p>
          <p>valor del kilometro</p>
          <p>adicional por lluvia</p>
          <p>espera en minutos</p>
          <p>total</p>
          <p>agregar viaje a la lista +</p>
        </div>
      </div>
    </div>
  )
}
