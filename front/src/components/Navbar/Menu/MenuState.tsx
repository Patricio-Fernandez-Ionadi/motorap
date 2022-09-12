import { useState } from 'react'

export const MenuState = () => {
  const [menuOpen, setOpen] = useState(false)
  const handleMenu = () => setOpen(!menuOpen)
  return { menuOpen, handleMenu }
}
