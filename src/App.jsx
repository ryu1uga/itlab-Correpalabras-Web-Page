import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import AcercaDe from './pages/AcercaDe/AcercaDe';
import Investigaciones from './pages/Investigaciones/Investigaciones';
import FichasComprension from './pages/FichasComprension/FichasComprension';
import CreaCuentos from './pages/CreaCuentos/CreaCuentos';

import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acerca-de' element={<AcercaDe />} />
          <Route path='/investigaciones' element={<Investigaciones />} />
          <Route path='/comprension-lectora' element={<FichasComprension />} />
          <Route path='/creacuentos' element={<CreaCuentos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
