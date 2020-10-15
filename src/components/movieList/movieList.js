import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import MovieCard from '../movieCard';
import MovieCardFilter from '../movieCardFilter';
import MovieCardSorter from '../movieCardSorter';
import { fetchMovies } from './../../services/requests';
import { creatingFilterCategories } from './../../utils/helper';

import './movieList.css';

const MovieList = (props) => {
  
  const { movies, sortedAndFilteredMovies } = props;

  if (!movies.length) return <Redirect to={"/no-movies-found"} />;
  
  return (
    <div className={"wrapper col-12 p-5 "}>
      <div className={'sort-filter'}>
        <MovieCardFilter filterCategories={creatingFilterCategories(movies)} />
        <MovieCardSorter />
      </div>
      <p className={'my-3 h5 font-weight-light'}>{`${sortedAndFilteredMovies.length} movies found`}</p>
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
      filter: state.filter,
      sorter: state.sorter,
      sortedAndFilteredMovies: state.sortedAndFilteredMovies,
  }
}

const mapDispatchToProps = {loadMovies: fetchMovies};

const MemoizedMovieList = React.memo(MovieList);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedMovieList)
