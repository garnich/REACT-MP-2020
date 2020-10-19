import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../logo';


import './noMatch.css';

const NoMatch = () => {
    return (
        <div className={'wrapper-nomatch px-4 py-3'}>
            <Logo />
            <div className={'content'}>    
                <p>Page not found</p>
                <p>404</p>
                <button>
                    <Link to="/">Go back to home</Link> 
                </button>
            </div>
        </div>
    )
}

export default NoMatch
