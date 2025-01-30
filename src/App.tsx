
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forest from './components/Forest/Forest'
import Map from './components/Map/Map'
import Nav from './components/Shared/Nav/Nav'
import Home from './components/Home/Home'

function App() {

  return (
    
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="forest" element={<Forest/>} />
          <Route path="map" element={<Map/>} />
        </Routes>
      </div>
   
  )
}

export default App
