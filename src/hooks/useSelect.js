import React, { useState } from 'react';

const useSelect = ( initialState, options ) => {

    /** Hooks: Define State */
    const [ state, setState ] = useState( initialState );

    /** Elemento de la Interface */
    const SelectNews = () => {
        return (
            <select
                className="browser-default"
                value={ state }
                onChange={ event => setState( event .target .value ) /** Actualiza State */ }
            >
                { options .map( ( option ) => (     // Implicit return
                    <option key={ option .value } value={ option .value }>{ option .option }</option>
                ))}
            </select>
        );
    }

    return [ state, SelectNews ];
}

export default useSelect;