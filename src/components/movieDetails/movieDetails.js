import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './movieDetails.css';

const MovieDetails = props => {

  const { handleDetails, data } = props;
  const { title, year, genre, img, raiting, duration, description } = data;

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
        <img src={img} alt="poster" />
        <div className={'details-info'}>
          <div className={'details-info-title d-flex'}>
            <h1>{title}</h1>
            <span>{raiting}</span>
          </div>
          <p className={'details-info-genre'}>{genre}</p>
          <div className={'details-info-date-and-duration d-flex'}>
            <span className={'pr-3'}>{year}</span>   
            <span>{`${duration} min`}</span>
          </div>
          <p className={'details-info-description'}>{description}</p>
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    raiting: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
  })
}

const MemoizedMovieDetails = React.memo(MovieDetails);

export default MemoizedMovieDetails
