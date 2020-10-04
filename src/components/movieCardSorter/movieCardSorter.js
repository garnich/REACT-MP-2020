import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortMovies } from './../../actions/actions';

const options = [
  {
    name: 'Select…',
    value: null,
  },
  {
    name: 'RELEASE DATE',
    value: 'RELEASE DATE',
  },
  {
    name: 'GENRE',
    value: 'GENRE',
  },
  {
    name: 'RAITING',
    value: 'RAITING',
  },
];

const MovieCardSorter = (props) => {
  
  const [value, setValue] = useState('?');

  const onFilterChange = (value) => setValue(value);
  
  const handleChange = (event) => {
    onFilterChange(event.target.value);
    props.movieSorter(event.target.value)
  };

  return (
    <div className={'d-flex align-items-center'}>
      <label>SORT BY </label>
      <select onChange={handleChange} value={value}>
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

MovieCardSorter.propTypes = {
  movieSorter: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    movieSorter: sortMovies,
};

const MemoizedMovieCardSorter = React.memo(MovieCardSorter);

export default connect(null, mapDispatchToProps)(MemoizedMovieCardSorter);

