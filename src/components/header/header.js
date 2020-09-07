import React from 'react';
import Logo from '../logo';
import Search from '../search';
import { Button } from 'react-bootstrap';

import './header.css'

const Header = () => {
    return (
        <div className={'header mb-2'}>
            <div className={'header-background'}/>
            <div className={'header-content'}>
                <div className={'col-12 d-flex justify-content-between pt-4'}>
                    <Logo/>
                    <Button variant="basic" className={'addBtn mr-2'}>{'+ ADD MOVIE'}</Button>
                </div>
                <Search/>
            </div>
        </div>
    )
}

export default Header
