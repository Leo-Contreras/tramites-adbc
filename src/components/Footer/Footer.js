import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import logoADBC from'./logoADBC.png';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: null, width: 220 },
    'copy': '© 2023 Agencia Digital del Estado de Baja California',
    'link1': 'Tramites y Servicios',
    'link2': 'Contacto',
    'link3': 'Agencia Digital',
    'link4': 'Ayuda',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="brand" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    
      <Container sx={{backgroundColor: '#6a1c32'}} maxWidth="lg">
        <Box sx={{backgroundColor: '#6a1c32'}} py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box  component="nav" className={classes.footerNav}>
            <Link href="http://localhost:3000/tramites" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="http://localhost:3000/contacto" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="http://localhost:3000/inicio" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="http://localhost:3000/ayuda" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
        </Box>
      </Container>
  );
}