import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Homepage from './pages/home/Homepage'
import SingleClaim from './pages/singleClaim/SingleClaim'
import SinglePile from './pages/singlePile/SinglePile'
import VetClaims from './pages/vetClaims/VetClaims'

function App() {
  return (
    <BrowserRouter>
      <div className='pageWrapper'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/vetclaims' element={<VetClaims />} />
          <Route path='/singlepile' element={<SinglePile />} />
          <Route path='/viewclaim' element={<SingleClaim />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
