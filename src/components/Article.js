import React from 'react';
import styles from './Article.module.css';       // CSS Module Stylesheet
import PropTypes from 'prop-types';

/** Component */
const Article = ({ article }) => {    // Destructuring Props

    const { title, description, source, urlToImage, url } = article; 

    /** Validate if you have an image */
    const image = urlToImage
        ?   <div className="card-image">
                <img src={ urlToImage } alt={ title } />
                <span className={ `card-title ${ styles .title }` }>{ source .name }</span>
            </div>
        :   null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                { image }
                <div className={ `card-content ${ styles .description }` }>
                    <p>{ description }</p>
                </div>
                <div className="card-action">
                    <a 
                        target="_blank"
                        rel="noopenner nofeferrer"
                        href={ url }
                        className="waves-effect waves-light btn-large amber darken-2"
                    >Ir al sitio</a>
                </div>
            </div>
        </div>
    );
}

/** Verificación de tipos */
Article .propTypes = {
    article: PropTypes .object .isRequired
}

export default Article;