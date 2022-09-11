import { useState } from 'react'

export const MenuState = () => {
  const [menuOpen, setOpen] = useState(true)
  const handleMenu = () => setOpen(!menuOpen)
  return { menuOpen, handleMenu }
}
