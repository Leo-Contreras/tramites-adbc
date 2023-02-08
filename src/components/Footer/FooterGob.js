import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const FooterGob = () => {
  return (
    <div>
        <Box sx={{backgroundColor: '#3F3F3D'}}>
        <Grid container spacing={2} justifyItems="center" columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs = {6}   style={{textAlign: "center"}}>

                <img src='https://gestion.bajacalifornia.gob.mx/adbc/assets/img/logo.png' width={"500px"} height={"150px"}></img>

            </Grid>
            <Grid item xs ={2}>
                 
                  <h4 style={{color: 'white'}} >Baja California</h4>   
                <ul>
                    <li style={{color: 'white'}}> Mexicali </li>
                    <li style={{color: 'white'}}> Tijuana </li>
                    <li style={{color: 'white'}}> Ensenada </li>
                    <li style={{color: 'white'}}> Tecate </li>
                    <li style={{color: 'white'}}> Rosarito </li>
                </ul>
         
  
            </Grid>

            <Grid item xs={2}>
                <h4 style={{color: 'white'}} > Contacto </h4>   
                <ul>
                    <li style={{color: 'white'}}> Oficians de Gobierno </li>
                    <li style={{color: 'white'}}> Directorio de Funcionarios </li>
                    <li style={{color: 'white'}}> Cajeros electronicos </li>
                    <li style={{color: 'white'}}> Preguntas frecuentes </li>
                    <li style={{color: 'white'}}> Tramites, Pagos y Apoyos frecuentes </li>

                </ul>

            </Grid>
            <Grid item xs={2}>
                <h4 style={{color: 'white'}} >Enlaces </h4>   
                <ul>
                    <li style={{color: 'white'}}> Estadisticas e indicadores </li>
                    <li style={{color: 'white'}}> Compras, Proveedores y Licitaciones </li>
                    <li style={{color: 'white'}}> Impuestos Federales </li>
                    <li style={{color: 'white'}}> Acerca del Portal </li>
                    <li style={{color: 'white'}}> Mapa del Sitio </li>

                </ul>

            </Grid>
        </Grid>
        </Box>
        <Box sx={{backgroundColor: '#6a1c32'}}>
        <Grid container spacing={1} justifyItems="center" >
           <Grid item xs = {12}>
           <h3 style={{color: 'white' , textAlign: "center"}}  > Agencia Digital del Estado de Baja California 2023 </h3>
           </Grid>
           <Grid item xs = {12}>
           <h4 style={{color: 'white' , textAlign: "center"}}> Ultima fecha de actualizacion Febrero 2023 </h4>
           </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default FooterGob
