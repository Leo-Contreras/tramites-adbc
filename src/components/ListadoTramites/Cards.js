import React from 'react'
import ActionAreaCard from './ActionAreaCard';
import { Grid } from '@mui/material';
import tramitesLista from "./listadoTramites.json";

const Cards = () => {

  const tramites = tramitesLista.tramites;

  return (

    //Aqui va la lista de tramites
    
         
      
        <Grid container spacing={2} justifyItems="center" >
          {tramites.map((tramite) => (
            <Grid item> 
            <ActionAreaCard 
                            key = {tramite.id}
                            nombreTramite ={tramite.NombreTramite}
                            descripcion = {tramite.Descripcion}
            />
            </Grid>
            
          ))}
        
        </Grid>
      


  )
}

export default Cards
