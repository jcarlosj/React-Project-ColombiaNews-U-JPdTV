import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = () => {
    return (
        <div className={ `${ styles .search } row` }>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={ styles .heading }>Noticia por categoría</h2>
                    <div className="input-field col s12">
                        <button 
                            type="button"
                            className={ `${ styles[ 'btn-block' ] } btn-large amber darken-2` }
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchForm;