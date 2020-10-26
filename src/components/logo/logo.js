import React from 'react';
import { Link } from 'react-router-dom';

import './logo';

const Logo = () => {
    return (
        <Link to="/">
            <span className={'logo'}><strong>{'netflix'}</strong>{'roulette'}</span>
        </Link> 
    )
}

export default Logo
