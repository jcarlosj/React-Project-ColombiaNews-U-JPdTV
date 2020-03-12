import React, { Fragment } from 'react';
/** Components */
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <Fragment>
        <Header title="Buscador de noticias" />
        <div className="container">
            <SearchForm />
        </div>
    </Fragment>
  );

}

export default App;
