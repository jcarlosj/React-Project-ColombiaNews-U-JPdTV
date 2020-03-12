import React from 'react';
import styles from './SearchForm.module.css';       // CSS Module Stylesheet
import useSelect from '../hooks/useSelect';         // Custom Hook

const SearchForm = () => {

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