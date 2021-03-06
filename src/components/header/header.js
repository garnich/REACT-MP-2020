import React, { useState, useCallback } from 'react';

import Logo from '../logo';
import Search from '../search';
import ModalWindow from '../modalWindows/modalWindow';
import AddMovie from '../modalWindows/addMovie';
import { Button } from 'react-bootstrap';

import './header.css'

const Header = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);

    return (
        <div className={'header mb-2'}>
            <div className={'header-background'}/>
            <div className={'header-content'}>
                <div className={'col-12 d-flex justify-content-between pt-4'}>
                    <Logo/>
                    <Button variant="basic" className={'addBtn mr-2'} onClick={handleShow}>{'+ ADD MOVIE'}</Button>
                    <ModalWindow 
                        handleClose={handleClose} 
                        show={show}
                    >
                        <AddMovie handleClose={handleClose}
                        />
                    </ModalWindow>
                </div>
                <Search/>
            </div>
        </div>
    )
}

const MemoizedHeader = React.memo(Header);
  
export default MemoizedHeader;
