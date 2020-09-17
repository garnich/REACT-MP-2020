import React from 'react';
import PropTypes from 'prop-types'

import './movieCardFilter.css'

const MovieCardFilter = (props) => {

const { filter, onFilterChange, filterCategories } = props;

filterCategories.unshift('all');

  const button = filterCategories.map((item) => {
    const isActive = filter === item
    return (
      <button
        type="button"
        className={`filterBtn ${isActive ? 'active' : ''}`}
        key={item}
        onClick={() => onFilterChange(item)}
      >
        {item.toUpperCase()}
      </button>
    )
  })
  return <div className="btn-group">{button}</div>
}

MovieCardFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}

const MemoizedMovieCardFilter = React.memo(MovieCardFilter);

export default MemoizedMovieCardFilter
