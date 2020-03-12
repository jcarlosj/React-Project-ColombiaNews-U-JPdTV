import React from 'react';

const SearchForm = () => {
    return (
        <div className="row">
            <div className="col s12 m8 offset">
                <form>
                    <h2>Noticia por categoría</h2>
                    <div className="input-field col s12">
                        <button 
                            type="button"
                            className="btn-large amber darken-2"
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchForm;