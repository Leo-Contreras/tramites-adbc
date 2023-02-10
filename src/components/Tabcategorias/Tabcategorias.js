import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Categorias from './categorias';
import { Grid } from '@mui/material';

export default function Tabcategorias() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Ventanilla Unica" value="1" />
            <Tab label="Tramites B.C" value="2" />
            <Tab label="Tramites y servicios RETYS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />  
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />  
                            </Grid>
                    </Grid>
        </TabPanel>
        <TabPanel value="2">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />  
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias text ="CONSULTAR"/>  
                            </Grid>
                    </Grid>
        </TabPanel>
        <TabPanel value="3">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />  
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />
                            </Grid>
                            <Grid item xs={4}>
                            <Categorias />  
                            </Grid>
                    </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}