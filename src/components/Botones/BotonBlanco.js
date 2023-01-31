import React from 'react'
import { Button } from '@mui/material'

export default function BotonBlanco(props) {
  return (
    <div>
  
   <Button
        variant="outlined"
        sx={{ color: '#6a1c32',
         backgroundColor: '#f8f8f8',
          borderColor: '#6a1c32' , 
          width: 200,
           padding: 1,
            margin: 2,
             borderRadius: 28 ,
            ':hover': {
              bgcolor: '#6a1c32', 
              color: '#f8f8f8',
            }
          }}   //Regla de colores del gobierno de Baja California
   >
      {props.text}

   </Button>
   </div>
  )
}
