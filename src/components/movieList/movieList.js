import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movieCard';
import MovieCardFilter from '../movieCardFilter';
import MovieCardSorter from '../movieCardSorter';
import MockDataContext from '../../context';

import './movieList.css';

const MovieList = (props) => {

  const [filter, setFilter] = useState('all');
  const [sorter, setSorter] = useState('');

  const onFilterChange = (filter) => setFilter(filter);
  const onSorterChange = (sorter) => setSorter(sorter);

  const { onIdChange } = props;
  const movies = useContext(MockDataContext);

  if (!movies.length) return null;

  const filteredMovies = useMemo(
    () => filter === 'all' ? movies : movies.filter( 
      item => item.genre.toLowerCase() === filter),
    [filter, movies]);

  const sortedMovies = useMemo(
    () => sorter ? filteredMovies.sort(
      (a, b) =>  Date.parse(a.date) - Date.parse(b.date) ) : filteredMovies, 
    [sorter, filteredMovies]);

  return (
    <div className={"wrapper col-12 p-5 "}>
      <div className={'sort-filter'}>
        <MovieCardFilter 
          filter={filter}
          onFilterChange={onFilterChange}
        />
        <MovieCardSorter
          onSorterChange={onSorterChange}
        />
      </div>
      <p className={'my-3 h5 font-weight-light'}>{`${filteredMovies.length} movies found`}</p>
      <ul className={'d-flex p-0 m-0'}>
        {sortedMovies.map(({ id, title, date, year, genre, img }) => {
          return (
            <MovieCard 
              key={id}
              id={id}
              title={title}
              date={date}
              year={year}
              genre={genre}
              img={img}
              onIdChange={onIdChange}
            />
          )
        })}
      </ul>
    </div>
  )
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  )
}

const MemoizedMovieList = React.memo(MovieList);

export default MemoizedMovieList
