import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Homepage from './pages/home/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div className='pageWrapper'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
