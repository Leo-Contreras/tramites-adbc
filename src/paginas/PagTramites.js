import { Grid } from '@mui/material';
import React from 'react'
import Cards from '../components/ListadoTramites/Cards';
import SearchBar2 from '../components/SearchBar/SearchBar2';
import BotonBlanco from '../components/Botones/BotonBlanco';
import BotonGuinda from '../components/Botones/BotonGuinda';
import BotonDorado from '../components/Botones/BotonDorado';

const PagTramites = () => {
    return (

      <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh'
      }}
    >

      <BotonBlanco text= "Tramites"/>    
      <BotonGuinda text= "Categorais"/>
      <BotonDorado text= "Documentos" />

        <Grid container>
         <Grid item>
           <h1>Pagina de tramites y servcios.</h1>
         </Grid>
           
           <Grid item>
             <SearchBar2 />
           </Grid>
          
           <Grid item>
             <Cards />
           </Grid>
          
        
        </Grid>
      </div>
      );
    };

export default PagTramites
