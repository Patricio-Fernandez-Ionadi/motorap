import { MenuProps } from '../model/menu.interface'
import { MenuPanelList } from './MenuPanelList'

export const MenuPanel = ({ isopen }: MenuProps) => {
  let menuByOpeness = isopen ? 'menu-open' : 'menu-close'
  return (
    <div className={menuByOpeness}>
      <MenuPanelList />
    </div>
  )
}
