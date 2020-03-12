import React from 'react';
import PropTypes from 'prop-types';

/** Component */
const Header = ({ title }) => {
    return(
        <nav>
            <div className="nav-wrapper black   ">
                <a href="#" className="brand-logo center">
                    <h1>{ title }</h1>
                </a>
            </div>
        </nav>
    );
}

/** Verificación de tipos */
Header .propTypes = {
    title: PropTypes .string .isRequired
}

export default Header;