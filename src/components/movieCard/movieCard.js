import React from 'react'
import PropTypes from 'prop-types'

import './movieCard.css'

const MovieCard = props => {
  const { title, date, genre, img } = props

  return (
    <li className="card w-30 mb-3">
      <img className="card-img" src={img} alt="poster" />
      <div className={"card-body"}>
        <div className="d-flex justify-content-between pt-3">
          <span className={"h5 font-weight-light mb-0"}>{title}</span>
          <div>
            <span className={"date px-3 py-1"}>{date}</span>
          </div>
        </div>
        <span className={"h6 font-weight-light"}>{genre}</span>
      </div>
    </li>
  )
}

MovieCard.defaultProps = {
  img: 'https://lh3.googleusercontent.com/proxy/SMn_NJtXlmx3HidkzKT-QC-p5BVVyQS0WvTzJgnyZ3VL6x91WdLHHcPZn_90lrERC4LL1lBRPQi95MznjkEB_AfGMftrYhXjUv6P2-_blBus2g',
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default MovieCard
