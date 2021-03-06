import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardOptions from './../modalWindows/cardOptions';
import { activeId } from './../../actions/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './movieCard.css';

const MovieCard = props => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleShow = useCallback(() => setShow(true), []);
  const handleClose = useCallback(() => setShow(false), []);
  const handleRedirect = useCallback(() => history.push(`/film/${id}`), []);

  const {id, title, release_date, genres, poster_path, onIdChange } = props;

  const handleCleanId = useCallback(() => onIdChange(''), []);

  return (
    <li 
      className={'card w-30 mb-3'}
      onClick={handleRedirect}
    >
      <Button 
        onClick={handleShow}
        variant="basic" 
        className={'card-options mr-2'} >
          <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
      {show && 
        <CardOptions 
          handleClose={handleClose} 
          handleCleanId={handleCleanId}
          id={id}
        />}
      <img className="card-img" src={poster_path} alt="poster" />
      <div className={"card-body"}>
        <div className="d-flex justify-content-between pt-3">
          <span className={"h5 font-weight-light mb-0"}>{title}</span>
          <div>
            <span className={"date px-3 py-1"}>{new Date(release_date).getFullYear()}</span>
          </div>
        </div>
        <span className={"h6 font-weight-light"}>{typeof genres === 'object' ? genres.join(',') : genres}</span>
      </div>
    </li>
  )
}

MovieCard.defaultProps = {
  poster_path: 'https://kinozanoza.ru/uploads/poster_none.png'
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
    ]).isRequired,
    poster_path: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
    onIdChange: activeId,
};

const MemoizedMovieCard = React.memo(MovieCard);

export default connect(null, mapDispatchToProps)(MemoizedMovieCard)
