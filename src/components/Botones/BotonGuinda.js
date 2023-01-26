import React from 'react'
import { Button } from '@mui/material'

export default function BotonGuinda(props) {
  return (
    <div>
  
   <Button
        variant="outlined"
        sx={{ color: '#f8f8f8',
         backgroundColor: '#6a1c32',
          borderColor: '#6a1c32' , 
          width: 200,
           padding: 1,
            margin: 2,
            ':hover': {
              bgcolor: '#53152b', 
              color: '#f8f8f8',
            }
          }}   //Regla de colores del gobierno de Baja California
   >
      {props.text}

   </Button>
   </div>
  )
}