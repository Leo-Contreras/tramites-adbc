import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


const SearchBar2 = () => {

    
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: option => option,
  });

  // LISTA DE TRAMITES , SE NECESITA UN ARREGLO DE LOS NOMBRES DE LOS TRAMITES


  const myOptions = ['Tramite 1', 'Tramite 2', 'Tramite 3',
    'Tramite 3', 'Tramite 4', 'Tramite 5',
    'CURP', 'ACTA NACIMIENTO'];

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
    <Autocomplete
      style={{ width: 500 }}
      freeSolo
      filterOptions={filterOptions}
      options={myOptions}
      renderInput={(params) => (
        <TextField {...params}
          variant="outlined"
          label="Encuentra tu tramite o servicio."
        />
      )}
    />
  </div>
  )
}

export default SearchBar2
