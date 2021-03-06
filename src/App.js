import React, { Fragment, useState, useEffect } from 'react';
/** Components */
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import NewsList from './components/NewsList';

function App() {

  /** Hook: Define State */
  const 
    [ category, setCategory ] = useState( '' ),
    [ news, setNews ] = useState( [] );

  /** Hook: Tracking the state 'category' */
  useEffect( () => {

    const getApiData = async () => {

        const
            countryKey = 'co',      // Colombia
            apiKey = '86c99ab8ccd742169c4cc39b5d28e0be',
            url = `https://newsapi.org/v2/top-headlines?country=${ countryKey }&category=${ category }&apiKey=${ apiKey }`,
            response = await fetch( url ),
            news = await response .json();

            console .log( 'News', news );
            setNews( news .articles );        // Asigna datos de respuesta de News API al State 'news'

    }
    getApiData();

  }, [ category ] );

  return (
    <Fragment>
        <Header title="Buscador de noticias" />
        <div className="container">
            <SearchForm 
              setCategory={ setCategory }
            />
            <NewsList 
              news={ news }
            />
        </div>
    </Fragment>
  );

}

export default App;
