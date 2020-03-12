import React from 'react';
import styles from './SearchForm.module.css';       // CSS Module Stylesheet
import useSelect from '../hooks/useSelect';         // Custom Hook
import PropTypes from 'prop-types';

/** Component */
const SearchForm = ({ setCategory }) => {           // Destructuring Props

    const OPTIONS = [
        /** 'value' va de acuerdo a los valores ofrecidos por News API 
         *          (business, entertainment, general, health, science, sports, technology) */
        { option: 'Negocios', value: 'business' }, 
        { option: 'Entretenimiento', value: 'entertainment' }, 
        { option: 'General', value: 'general' }, 
        { option: 'Salud', value: 'health' }, 
        { option: 'Ciencia', value: 'science' }, 
        { option: 'Deportes', value: 'sports' }, 
        { option: 'Tecnología', value: 'technology' }
    ];

    /** Hooks Personalizados */
    const [ category, SelectNews ] = useSelect( 'general', OPTIONS );   // State, Interface

    /** Methods */
    const submitSearchNews = event => {
        event .preventDefault();

        setCategory( category );      // Actualizar State del Componente Padre

    }

    return (
        <div className={ `${ styles .search } row` }>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={ submitSearchNews }
                >
                    <h2 className={ styles .heading }>Noticia por categoría</h2>
                    <div className="input-field col s12">
                        <SelectNews />
                        <button 
                            type="submit"
                            className={ `${ styles[ 'btn-block' ] } btn-large amber darken-2` }
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/** Verificación de tipos */
SearchForm .propTypes = {
    setCategory: PropTypes .func .isRequired
}

export default SearchForm;