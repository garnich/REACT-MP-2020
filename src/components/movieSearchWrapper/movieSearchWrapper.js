import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../movieList';
import Header from '../header';
import NoMovies from './../noMovies';
import { fetchMovies } from '../../services/requests';

const MovieDetailsWrapper = (props) => {
  const { movies, match, loadMovies} = props;
  const { params: { query } } = match;

  useEffect(() => loadMovies(query), [query])

  return (
    <Fragment>
      <Header />
      { movies.length ? <MovieList /> : <NoMovies />}
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
  }
}

const mapDispatchToProps = {loadMovies: fetchMovies};

const MemoizedMovieDetailsWrapper = React.memo(MovieDetailsWrapper);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedMovieDetailsWrapper);
