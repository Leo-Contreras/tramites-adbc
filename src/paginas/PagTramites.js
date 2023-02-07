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


<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
  alignItems="center" >
         <Grid item xs={6} >
           <h1>Pagina de tramites y servcios.</h1>
         </Grid>
           
           <Grid item xs={12}>
             <SearchBar2 />
           </Grid>
          
           <Grid item xs = {12}>
             <Cards />
           </Grid>
            
           <Grid item xs ={4}>
            <BotonBlanco text= "Tramites"/>    
            
           </Grid>

            
           <Grid item xs ={4}>
            <BotonGuinda text= "Categorias"/>
    
           </Grid>

            
           <Grid item xs ={4}>
            <BotonDorado text= "Documentos" />
           </Grid>
          
        
        </Grid>
      </div>
      );
    };

export default PagTramites
