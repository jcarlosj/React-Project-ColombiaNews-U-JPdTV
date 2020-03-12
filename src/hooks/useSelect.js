import React, { useState } from 'react';

const useSelect = ( initialState, options ) => {

    /** Hooks: Define State */
    const [ state, setState ] = useState( '' );

    /** Elemento de la Interface */
    const SelectNews = () => {
        return (
            <select
                className="browser-default"
            >
                <option value="">Seleccione...</option>
            </select>
        );
    }

    return [ state, SelectNews ];
}

export default useSelect;