import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../logo';
import Search from '../search';
import ModalWindow from '../modalWindows/modalWindow';
import AddMovie from '../modalWindows/addMovie';
import MovieDetails from '../movieDetails';
import { movieShowDetails, movieHideDetails } from './../../actions/actions';
import { Button } from 'react-bootstrap';

import './header.css'

const Header = (props) => {
    const [show, setShow] = useState(false);
    
    const handleClose = useCallback(() => setShow(false), []);
    const handleShow = useCallback(() => setShow(true), []);
    const handleCloseDetails = useCallback(() => hideDetails(), []);

    const { movies, id, showMovieDetails, hideDetails } = props;

    const movieDetailsData = useMemo(() => movies.find(item => item.id === id), [movies, id]);

    return (
        <div className={'header mb-2'}>
            {showMovieDetails && <MovieDetails handleDetails={handleCloseDetails} data={movieDetailsData}/>}
            <div className={'header-background'}/>
            {!showMovieDetails && 
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
        id: state.id,
        showMovieDetails: state.showMovieDetails,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      hideDetails: () => {dispatch(movieHideDetails())},
    }
  }

const MemoizedHeader = React.memo(Header);
  
export default connect(mapStateToProps, mapDispatchToProps)(MemoizedHeader)
