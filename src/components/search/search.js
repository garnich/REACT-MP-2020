import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchMovies } from './../../services/requests';
import { Button } from 'react-bootstrap';

import './search.css';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [redirector, setRedirector] = useState(false);

    const {movies, loadMovies} = props;

    const handleInputChange = useCallback((event) => {
      setSearch(event.target.value);
      setRedirector(false);
    }, []);
    const searchHandler = useCallback(() => {
      loadMovies(search);
      setRedirector(true);
    }, [search]);

    return (
        <div className={'search px-5 py-5'}>
            {movies.length && redirector ? <Redirect push to={`/search/${search}`} /> : null}
            <h1 className={'px-5 mb-5 d-flex justify-content-start'}>Find your movie</h1>
            <div className={'search d-flex justify-content-start px-5'}> 
                <input 
                    className={'input mr-3'} 
                    placeholder={'What do you want to watch?'}
                    onChange={handleInputChange}
                />
                <Button 
                    variant="basic" 
                    className={'search-btn px-5 py-3'}
                    onClick={searchHandler}
                    >
                    {'SEARCH'}
                </Button>
            </div>
        </div>
    )
}

Search.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.string,
        ]).isRequired,
        poster_path: PropTypes.string.isRequired,
      })
    ),
    loadMovies: PropTypes.func.isRequired,
  }

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    }
  }

const mapDispatchToProps = {loadMovies: fetchMovies};

const MemoizedSearch = React.memo(Search);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedSearch)
