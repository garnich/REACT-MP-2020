import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MovieCardSorter = (props) => {
  const options = [
    {
      name: 'Select…',
      value: null,
    },
    {
      name: 'RELEASE DATE',
      value: 'RELEASE DATE',
    },
  ];

  const [value, setValue] = useState('?');

  const onFilterChange = (value) => setValue(value);
  
  const handleChange = (event) => {
    onFilterChange(event.target.value);
    props.onSorterChange(event.target.value)
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
    onSorterChange: PropTypes.func.isRequired,
}

const MemoizedMovieCardSorter = React.memo(MovieCardSorter);

export default MemoizedMovieCardSorter
