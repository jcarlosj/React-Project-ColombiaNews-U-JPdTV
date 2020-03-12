import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

/** Component */
const NewsList = ({ news }) => (    // Destructuring Props & Implicit return
        <div className="row">
            { news .map( ( article, index ) => (
                <Article 
                    key={ index } 
                    article={ article }
                />
            ))}
        </div>
    );

/** Verificación de tipos */
NewsList .propTypes = {
    news: PropTypes .array .isRequired
}

export default NewsList;