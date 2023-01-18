import React, { useState } from 'react';

const SearchBar = () => {

    const [search, setSearch] = useState(``);
    const [list, setList] = useState([
      'Carta antecedentes penales',
      'Cita para cambiar de nombre en CESPT',
      'Beca de amlo o algo asi',
      'Sacar el CURP'
    ]);

 
    return (
        <div className='content'>
          <div className='container'>
            <section className='section'>
              <input
                type='text'
                className='input'
                onChange={e => setSearch(e.target.value)}
                placeholder='Search...'
              />
              <ul>
                {list
                  .filter(li => li.toLowerCase().includes(search.toLowerCase()))
                  .map((item, key) => (
                    <li key={key}>
                      {item}{' '}
                    </li>
                  ))}
              </ul>
            </section>
            <hr />
            
          </div>
        </div>
      );
}

export default SearchBar
