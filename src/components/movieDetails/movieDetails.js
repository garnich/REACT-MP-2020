import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './movieDetails.css';

const MovieDetails = props => {

  const { handleDetails, data } = props;

  const { title, release_date, genres, poster_path, vote_average, runtime, overview } = data;
  const handleChange = () => handleDetails();

  return (
    <div className={'details'}>
      <div className={'details-header d-flex justify-content-between'}>
        <Logo />
        <Button 
          onClick={handleChange}
          variant="basic" 
          className={''} >
            <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
      <div className={'details-content d-flex justify-content-start'}>
        <img src={poster_path} alt="poster" />
        <div className={'details-info'}>
          <div className={'details-info-title d-flex'}>
            <h1>{title}</h1>
            <span>{vote_average}</span>
          </div>
          <p className={'details-info-genre'}>{typeof genres === 'object' ? [genres[0], genres[1]].join(',') : genres}</p>
          <div className={'details-info-date-and-duration d-flex'}>
            <span className={'pr-3'}>{new Date(release_date).getFullYear()}</span>   
            <span>{`${runtime} min`}</span>
          </div>
          <p className={'details-info-description'}>{overview}</p>
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
    raiting: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
  })
}

const MemoizedMovieDetails = React.memo(MovieDetails);

export default MemoizedMovieDetails
