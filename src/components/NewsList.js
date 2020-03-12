import React from 'react';
import Article from './Article';

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


export default NewsList;