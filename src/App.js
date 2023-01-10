import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Error from './pages/Error/Error'
import History from './pages/History/History'
import Home from './pages/Home/Home'
import Videos from './pages/Videos/Videos'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="videos" element={<Videos />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
