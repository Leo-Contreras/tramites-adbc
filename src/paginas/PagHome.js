import React from 'react'
import SearchBar2 from '../components/SearchBar/SearchBar2';
import Tabcategorias from '../components/Tabcategorias/Tabcategorias';
import { Grid } from '@mui/material';
import BotonDorado from '../components/Botones/BotonDorado';


const PagHome = () => {
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                            <SearchBar2 />
                            </Grid>
                            <Grid item xs={12}>
                            <Tabcategorias />
                            </Grid>
                            <Grid item xs={12}>
                            <h1>Consulta de tramites</h1>
                            </Grid>
                            <Grid item xs={12} >
                            <BotonDorado text="CONSULTAR" />
                            </Grid>
                    </Grid>
          
         
        
          
        </div>
      );
    };
export default PagHome
