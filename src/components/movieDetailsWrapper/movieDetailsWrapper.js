import React, { Fragment, useMemo } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './../movieDetails';
import MovieList from './../movieList';

const MovieDetailsWrapper = (props) => {
  const {match, movies} = props;
  const movieDetailsData = useMemo(() => movies.find(item => item.id === parseInt(match.params.id)), [movies, match.params.id]);

  return (
    <Fragment>
      <MovieDetails data={movieDetailsData}/>
      <MovieList />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
  }
}
const MemoizedMovieDetailsWrapper = React.memo(MovieDetailsWrapper);

export default connect(mapStateToProps)(MemoizedMovieDetailsWrapper);
