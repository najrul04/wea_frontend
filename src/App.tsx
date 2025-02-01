
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forest from './components/Forest/Forest'
import Map from './components/Map/Map'
import Nav from './components/Shared/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import WildFire from './components/WorldEvents/WildFire/WildFire'

function App() {
  return (
    
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/forest" element={<Forest/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/wildfire" element={<WildFire/>} />
        </Routes>
      </div>
   
  )
}

export default App
