import React from 'react';
import styles from './SearchForm.module.css';       // CSS Module Stylesheet
import useSelect from '../hooks/useSelect';         // Custom Hook

const SearchForm = () => {

    /** Hooks Personalizados */
    const [ category, SelectNews ] = useSelect();   // State, Interface

    return (
        <div className={ `${ styles .search } row` }>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={ styles .heading }>Noticia por categoría</h2>
                    <div className="input-field col s12">
                        <SelectNews />
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