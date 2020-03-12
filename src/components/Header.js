import React from 'react';

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

export default Header;