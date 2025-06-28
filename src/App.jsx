//este es un estilo global, este aplica a todo el proyecto
import './App.css'
//import Card from './components/Card'//
//import Pizza from './components/Pizza'//
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (//solo se puede retornar elementos padre, no puede retornar elementos etiquetas hijas
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>,
      <Route path="/Owner" element={<Owner />} />
    </Routes>
    </>
  )
}

export default App
