import { useState } from 'react'

export const Status = () => {
  const [user, setUser] = useState(false)

  const toggleStatus = () => {
    setUser(!user)
  }

  return (
    <div className='status-container'>
      {user ? (
        <div onClick={toggleStatus}>user</div>
      ) : (
        <div onClick={toggleStatus}>
          <button>login</button>
        </div>
      )}
    </div>
  )
}
