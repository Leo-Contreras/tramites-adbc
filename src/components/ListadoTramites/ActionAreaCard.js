import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 , minWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/512/5064/5064889.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tramite 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripcion del tramite
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}