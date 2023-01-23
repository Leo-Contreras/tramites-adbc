import React from 'react'
import ActionAreaCard from './ActionAreaCard';
import { Grid } from '@mui/material';

const Cards = () => {
  return (

    //Aqui va la lista de tramites

    <Grid container spacing={2} justifyItems = "center">
        <Grid item >
        <ActionAreaCard />
        </Grid>

        <Grid item >
        <ActionAreaCard />
        </Grid>

        <Grid item >
        <ActionAreaCard />
        </Grid>

        <Grid item >
        <ActionAreaCard />
        </Grid>
       

    </Grid>
  )
}

export default Cards
