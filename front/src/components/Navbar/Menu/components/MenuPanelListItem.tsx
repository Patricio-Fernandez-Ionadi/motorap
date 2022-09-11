import { Link } from 'react-router-dom'

interface Props {
  route: string
  label: string
}

export const MenuPanelListItem = ({ route, label }: Props) => {
  return (
    <Link to={route} className='menu-panel-item'>
      {label}
    </Link>
  )
}
