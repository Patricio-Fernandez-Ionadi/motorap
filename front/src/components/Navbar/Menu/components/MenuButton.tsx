import { MenuProps } from '../model/menu.interface'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const MenuButton = ({ isopen, onaction }: MenuProps) => {
  return (
    <button className='menu-button' onClick={onaction}>
      {isopen ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}
