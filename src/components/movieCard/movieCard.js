import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import CardOptions from './../modalWindows/cardOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './movieCard.css';

const MovieCard = props => {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => setShow(true), []);
  const handleClose = useCallback(() => setShow(false), []);

  const {onIdChange, id, title, date, year, genre, img } = props;

  const handleChange = useCallback(() => {
    onIdChange(id);
  }, [id]);


  return (
    <li 
      className={'card w-30 mb-3'}
      onClick={handleChange}
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
          id={id}
          title={title}
          date={date}
          genre={genre}
        />}
      <img className="card-img" src={img} alt="poster" />
      <div className={"card-body"}>
        <div className="d-flex justify-content-between pt-3">
          <span className={"h5 font-weight-light mb-0"}>{title}</span>
          <div>
            <span className={"date px-3 py-1"}>{year}</span>
          </div>
        </div>
        <span className={"h6 font-weight-light"}>{genre}</span>
      </div>
    </li>
  )
}

MovieCard.defaultProps = {
  img: 'https://kinozanoza.ru/uploads/poster_none.png'
}

MovieCard.propTypes = {
    onIdChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

const MemoizedMovieCard = React.memo(MovieCard);

export default MemoizedMovieCard
