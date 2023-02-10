import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Categorias() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/512/5360/5360936.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CATEGORIA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TEXTO PRUEBA PARA CATEGORIA
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
