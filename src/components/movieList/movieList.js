import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movieCard';
import MovieCardFilter from '../movieCardFilter';
import MovieCardSorter from '../movieCardSorter';

import './movieList.css';

class MovieList extends Component {
  constructor(props) {
    super()

    this.state = {
      filter: 'all',
      sorter: '',
    }

    this.onFilterChange = filter => {
      this.setState({ filter })
    }

    this.onSorterChange = sorter => {
      this.setState({ sorter })
    }
  }

  render() {
    const { filter, sorter } = this.state;
    const { movies } = this.props;

    if (!movies.length) return null;

    const filteredMovies = filter === 'all' ? movies : movies.filter( item => item.genre.toLowerCase() === filter);
    const sortedMovies = sorter ? filteredMovies.sort((a, b) =>  a.date - b.date ) : filteredMovies;
// debugger;
    return (
      <div className={"wrapper col-12 p-5 "}>
        <div className={'sort-filter'}>
          <MovieCardFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
          <MovieCardSorter
            onSorterChange={this.onSorterChange}
          />
        </div>
      <p className={'my-3 h5 font-weight-light'}>{`${filteredMovies.length} movies found`}</p>
      <ul className="d-flex p-0 m-0 justify-content-between flex-wrap">
        {sortedMovies.map(({ id, title, date, genre, img }) => {
          return (
            <MovieCard 
              key={id}
              title={title}
              date={date}
              genre={genre}
              img={img}
            />
          )
        })}
      </ul>
    </div>
    )
  }
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

export default MovieList
