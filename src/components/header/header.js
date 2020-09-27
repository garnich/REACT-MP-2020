import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../logo';
import Search from '../search';
import ModalWindow from '../modalWindows/modalWindow';
import AddMovie from '../modalWindows/addMovie';
import MovieDetails from '../movieDetails';
import { Button } from 'react-bootstrap';

import './header.css'

const Header = (props) => {
    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(null);
    
    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);
    const handleCloseDetails = useCallback(() => setShowDetails(null), [activeId]);

    const { movies, activeId } = props;

    useEffect(() => setShowDetails(activeId), [activeId]);

    const movieDetailsData = useMemo(() => movies.find(item => item.id === activeId), [movies, activeId]);

    return (
        <div className={'header mb-2'}>
            {showDetails && activeId && <MovieDetails handleDetails={handleCloseDetails} data={movieDetailsData}/>}
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
    id: PropTypes.number
  }

Header.defaultProps = {
    id: null,
    showMovieDetails: false
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        activeId: state.activeId,
    }
  }

const MemoizedHeader = React.memo(Header);
  
export default connect(mapStateToProps)(MemoizedHeader)
