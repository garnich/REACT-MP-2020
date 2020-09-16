import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
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
    
    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);
    const handleCloseDetails = useCallback(() => setShowDetails(false), []);
    
    const movies = useContext(MockDataContext);

    const { id } = props;

    useEffect(() => {
        if(id !== ''){
            setShowDetails(true);
        }
    }, [id]);

    const movieDetailsData = useMemo(() => movies.find(item => item.id === id), [movies, id]);

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

Header.propTypes = {
    id: PropTypes.string.isRequired
  }

Header.defaultProps = {
    id: '',
}

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader
