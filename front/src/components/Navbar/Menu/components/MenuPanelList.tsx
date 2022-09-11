import { MenuPanelListItem } from './MenuPanelListItem'

export const MenuPanelList = () => {
  return (
    <ul className='menu-panel-list'>
      <MenuPanelListItem route='/' label='Inicio' />
      <MenuPanelListItem route='/info' label='Informacion' />
      <MenuPanelListItem route='/vehiculo' label='Vehiculo' />
    </ul>
  )
}
