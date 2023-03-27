import './App.css';
import NavBar from './Componentes/NavBar';
import DetailsProductos from './Componentes/DetailsProductos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Componentes/CartContext';
import Home from './Componentes/Home'
import Contacto from './Componentes/Contacto';
import SobreMi from './Componentes/SobreMi';

function App() {



  return (

  <CartProvider>
    <BrowserRouter>
      <NavBar />


        <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/SobreMi' element={<SobreMi />} />
        <Route path='/DetailsProductos/:id' element={ <DetailsProductos />} />

      </Routes>
    </BrowserRouter>
  </CartProvider>

  );
}

export default App;
