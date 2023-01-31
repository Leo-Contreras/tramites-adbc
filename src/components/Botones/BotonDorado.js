import React from 'react'
import { Button } from '@mui/material'

export default function BotonDorado(props) {
  return (
    <div>
  
   <Button
        variant="outlined"
        sx={{ color: '#f8f8f8',
         backgroundColor: '#b17a45',
          borderColor: '#b17a45' , 
          width: 200,
           padding: 1,
            margin: 2,
            borderRadius: 28 ,
            ':hover': {
              bgcolor: '#a07545', 
              color: '#f8f8f8',
            }
          }}   //Regla de colores del gobierno de Baja California
   >
      {props.text}

   </Button>
   </div>
  )
}