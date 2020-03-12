import React, { Fragment, useState } from 'react';
/** Components */
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {

  /** Hook: Define State */
  const [ category, setCategory ] = useState( '' );

  return (
    <Fragment>
        <Header title="Buscador de noticias" />
        <div className="container">
            <SearchForm 
              setCategory={ setCategory }
            />
        </div>
    </Fragment>
  );

}

export default App;
