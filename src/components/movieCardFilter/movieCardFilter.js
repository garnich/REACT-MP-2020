import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMovies } from './../../actions/actions';

import './movieCardFilter.css'

const MovieCardFilter = (props) => {

const { filter, movieFilter, filterCategories } = props;

filterCategories.unshift('all');

  const button = filterCategories.map((item) => {
    const isActive = filter === item
    return (
      <button
        type="button"
        className={`filterBtn ${isActive ? 'active' : ''}`}
        key={item}
        onClick={() => movieFilter(item)}
      >
        {item.toUpperCase()}
      </button>
    )
  })
  return <div className="btn-group">{button}</div>
}

MovieCardFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterCategories: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
      filter: state.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    movieFilter: (filter) => {dispatch(filterMovies(filter))},
  }
}

const MemoizedMovieCardFilter = React.memo(MovieCardFilter);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedMovieCardFilter);
