import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import SearchBar2 from './components/SearchBar/SearchBar2';
import { Routes, Route } from 'react-router-dom';
import PagContacto from './paginas/PagContacto.js';
import PagTramites from './paginas/PagTramites.js';
import PagHome from './paginas/PagHome.js';
import PagError from './paginas/PagError.js';
import ResponsiveNavbar from './components/Navbar/ResponsiveNavbar.js';



function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
     
<div>
<ResponsiveNavbar />
      <Routes>
        <Route path ="/inicio" element={<PagHome />} />
        <Route path ="/tramites"  element={<PagTramites />} />
        <Route path ="/contacto" element ={ <PagContacto />} />
        <Route path ="*" element={ <PagError />}/>
      </Routes>

      
      
      <h1>Agencia Digital de Baja California</h1>
      <SearchBar2 />
      
 </div>

 </div>
  );
}

export default App;
