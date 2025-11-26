
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home.jsx'
import Menu from './pages/menu.jsx'
import Contact from './pages/contact.jsx'
import Panier from './pages/panier.jsx'
import Filtres from './pages/filtres.jsx'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/filtres" element={<Filtres />} />
      </Routes>
      <Footer />
    </Router>
  )
}export default App
