import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PagContacto from './paginas/PagContacto.js';
import PagTramites from './paginas/PagTramites.js';
import PagHome from './paginas/PagHome.js';
import PagError from './paginas/PagError.js';
import ResponsiveNavbar from './components/Navbar/ResponsiveNavbar.js';
import Footer from './components/Footer/Footer.js';
import Footer2 from './components/Footer/Footer2.js';
import FooterGob from './components/Footer/FooterGob.js';




function App() {
  return (
    <div /*style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}*/>
     
<div>
<ResponsiveNavbar />

      <Routes>
        <Route path ="/inicio" element={<PagHome />} />
        <Route path ="/tramites"  element={<PagTramites />} />
        <Route path ="/contacto" element ={ <PagContacto />} />
        <Route path ="*" element={ <PagError />}/>
      </Routes>

      
      
   {/*<h1>Agencia Digital de Baja California</h1>*/}
    
 </div>
   
    <FooterGob />

 </div>
  );
}

export default App;
