// import './style/index.css'

import { Menu, MenuState } from './Menu'
import { Controls } from './Controls'
import { Status } from './Status'

const Navbar = () => {
  const { menuOpen, handleMenu } = MenuState()

  return (
    <>
      <nav className='navbar-container'>
        {/* LEFT */}
        <div className='navbar-section navbar-left'>
          <Menu isopen={menuOpen} onaction={handleMenu} />
        </div>
        {/* MIDDLE */}
        <div className='navbar-section navbar-middle'>
          <Controls />
        </div>
        {/* RIGHT */}
        <div className='navbar-section navbar-right'>
          <Status />
        </div>
      </nav>
    </>
  )
}
export default Navbar
