import { MenuButton, MenuPanel } from './components'
import { MenuProps } from './model/menu.interface'

// import './style/index.css'

export const Menu = ({ isopen, onaction }: MenuProps) => {
  return (
    <>
      <MenuButton isopen={isopen} onaction={onaction} />
      <MenuPanel isopen={isopen} />
    </>
  )
}
