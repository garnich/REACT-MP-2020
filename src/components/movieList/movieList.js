import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieCard from '../movieCard';
import MovieCardFilter from '../movieCardFilter';
import MovieCardSorter from '../movieCardSorter';
import { fetchMovies } from './../../services/requests';
import { sortMovies, filterMovies } from './../../actions/actions';
import { creatingFilterCategories } from './../../utils/helper';

import './movieList.css';

const MovieList = (props) => {

  const [filter, setFilter] = useState('all');
  const [sorter, setSorter] = useState('');

  const onFilterChange = useCallback((filter) => {
    setFilter(filter);
    movieFilter(filter)
  }, [filter]);
  const onSorterChange = useCallback((sorter) => {
    setSorter(sorter);
    movieSorter(sorter)
  }, [sorter]);
  
  const { movies, loadMovies, movieSorter, movieFilter, sortedAndFilteredMovies } = props;

  useEffect(() => {loadMovies()}, []);

  if (!movies.length) return null;
  
  return (
    <div className={"wrapper col-12 p-5 "}>
      <div className={'sort-filter'}>
        <MovieCardFilter 
          filter={filter}
          onFilterChange={onFilterChange}
          filterCategories={creatingFilterCategories(movies)}
        />
        <MovieCardSorter
          onSorterChange={onSorterChange}
        />
      </div>
      <p className={'my-3 h5 font-weight-light'}>{`${movies.length} movies found`}</p>
      <ul className={'d-flex p-0 m-0'}>
        {sortedAndFilteredMovies.map(({ id, title, release_date, genres, poster_path, ...rest }) => {
          return (
            <MovieCard 
              key={id}
              id={id}
              title={title}
              release_date={release_date}
              year={new Date(release_date).getFullYear()}
              genres={typeof genres === 'object' ? [genres[0], genres[1]].join(',') : genres}
              poster_path={poster_path}
              restData={rest}
            />
          )
        })}
      </ul>
    </div>
  )
}

MovieList.propTypes = {
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
      sortedAndFilteredMovies: state.sortedAndFilteredMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => {dispatch(fetchMovies())},
    movieSorter: (sorter) => {dispatch(sortMovies(sorter))},
    movieFilter: (filter) => {dispatch(filterMovies(filter))}
  }
}

const MemoizedMovieList = React.memo(MovieList);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedMovieList)
