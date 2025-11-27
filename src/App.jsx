
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home.jsx'
import Menu from './pages/menu.jsx'
import Contact from './pages/contact.jsx'
import Panier from './pages/panier.jsx'
import Filtres from './pages/filtres.jsx'
import CartProvider from './context/CartContext'

function App() {

  return (
    <Router>
      <CartProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: '1' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/filtres" element={<Filtres />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}export default App
