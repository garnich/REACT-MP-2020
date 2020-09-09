import React, { useState, useEffect, useContext } from 'react';
import Logo from '../logo';
import Search from '../search';
import ModalWindow from '../modalWindows/modalWindow';
import AddMovie from '../modalWindows/addMovie';
import MovieDetails from '../movieDetails';
import MockDataContext from '../../context';
import { Button } from 'react-bootstrap';

import './header.css'

const Header = (props) => {
    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowDetails = () => setShowDetails(!!id);
    const handleCloseDetails = () => setShowDetails(false);
    
    const movies = useContext(MockDataContext);

    const { id } = props;

    useEffect(() => {
        handleShowDetails();
      }, [id]);

    const movieDetailsData = movies.find(item => item.id === id);

    return (
        <div className={'header mb-2'}>
            {showDetails && <MovieDetails handleDetails={handleCloseDetails} data={movieDetailsData}/>}
            <div className={'header-background'}/>
            {!showDetails && 
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
            }
        </div>
    )
}

export default Header
