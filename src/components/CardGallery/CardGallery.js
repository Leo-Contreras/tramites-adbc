import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 345,
    maxHeight: 345,
    margin: 20,
  },
});

export default function CardGallery() {
  const classes = useStyles();
  const cards = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Ventanilla Unica',
      description: ''
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Tramites BC',
      description: ''
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Tramites y Servicios RETYS',
      description: ''
    }
  ];


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {cards.map((card, index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={card.title}
              height="140"
              image={card.image}
              title={card.title}
              width = "280"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}