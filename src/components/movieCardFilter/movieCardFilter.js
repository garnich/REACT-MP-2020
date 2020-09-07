import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import './movieCardFilter.css'

const MovieCardFilter = (props) => {

  const buttons = [
    { name: 'all', label: 'all' },
    { name: 'documentary', label: 'documentary' },
    { name: 'comedy', label: 'comedy' },
    { name: 'horror', label: 'horror' },
    { name: 'crime', label: 'crime' },
  ]

const { filter, onFilterChange } = props

  const button = buttons.map(({ name, label }) => {
    const isActive = filter === name
    return (
      <button
        type="button"
        className={`filterBtn ${isActive ? 'active' : ''}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label.toUpperCase()}
      </button>
    )
  })
  return <div className="btn-group">{button}</div>
}

MovieCardFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}

export default MovieCardFilter
