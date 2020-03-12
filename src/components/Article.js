import React from 'react';

const Article = ({ article }) => {    // Destructuring Props

    const { title, description, source, urlToImage, url } = article; 

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={ urlToImage } alt={ title } />
                    <span className="card-title">{ source .name }</span>
                </div>
                <div className="card-content">
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

export default Article;