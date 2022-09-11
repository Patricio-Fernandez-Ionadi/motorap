import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './theme/index.css'
import { Navbar } from './components'
import { Info, Profile, Vehiculo } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/info' element={<Info />} />
        <Route path='/vehiculo' element={<Vehiculo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
