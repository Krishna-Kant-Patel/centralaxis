import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DCManagement from './pages/DCManagement'
import HeroSection from './components/Hero/Herosection'
import NavBar from './components/NavBar/NavBar'
import AssetManagement from './pages/AssetManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/asset-management/:id" element={<AssetManagement />} />
          <Route path="/dc-management/:id" element={<DCManagement />} />
          <Route path="/:id/:name" element={<div>Dynamic Route with Name</div>} />
        </Route>
      </Routes>


    </>
  )
}

export default App
